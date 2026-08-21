import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CategoryChips from '../components/CategoryChips';
import { CATEGORIES } from '../data/categories';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../context/AuthContext';
import styles from './WritePage.module.css';

function WritePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);
  const { user, profile } = useAuth();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(null);
  const [content, setContent] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [existingPhotoUrl, setExistingPhotoUrl] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [loadingPost, setLoadingPost] = useState(isEdit);
  const [aiOpen, setAiOpen] = useState(false);
  const [aiDraft, setAiDraft] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!isEdit) return;

    async function loadPost() {
      const { data, error } = await supabase
        .from('opinions')
        .select('*')
        .eq('id', id)
        .maybeSingle();

      if (error || !data || data.user_id !== user.id) {
        navigate('/mypage', { replace: true });
        return;
      }

      setTitle(data.title);
      setCategory(data.category);
      setContent(data.content);
      setExistingPhotoUrl(data.photo_url);
      setLoadingPost(false);
    }

    loadPost();
  }, [isEdit, id, user, navigate]);

  useEffect(() => {
    return () => {
      if (photoUrl) URL.revokeObjectURL(photoUrl);
    };
  }, [photoUrl]);

  const handlePhotoSelect = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (photoUrl) URL.revokeObjectURL(photoUrl);
    setPhoto(file);
    setPhotoUrl(URL.createObjectURL(file));
  };

  const handlePhotoRemove = () => {
    if (photoUrl) URL.revokeObjectURL(photoUrl);
    setPhoto(null);
    setPhotoUrl(null);
    setExistingPhotoUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleAiGenerate = async () => {
    if (!aiDraft.trim()) {
      setAiError('짧게라도 무슨 일인지 적어주세요.');
      return;
    }

    setAiLoading(true);
    setAiError('');

    try {
      const response = await fetch('/api/ai-draft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ draft: aiDraft.trim() }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'AI 초안 생성에 실패했어요.');

      setTitle(result.title);
      setContent(result.content);
      setCategory(result.category);
      setErrors({});
      setAiOpen(false);
      setAiDraft('');
    } catch (error) {
      setAiError(error.message);
    } finally {
      setAiLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!title.trim()) nextErrors.title = '제목을 입력해 주세요.';
    if (!category) nextErrors.category = '분야를 선택해 주세요.';
    if (!content.trim()) nextErrors.content = '내용을 입력해 주세요.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError('');

    try {
      let photoUrlToSave = existingPhotoUrl;
      if (photo) {
        const filePath = `${Date.now()}-${photo.name}`;
        const { error: uploadError } = await supabase.storage
          .from('photos')
          .upload(filePath, photo);
        if (uploadError) throw uploadError;
        photoUrlToSave = supabase.storage.from('photos').getPublicUrl(filePath).data.publicUrl;
      }

      if (isEdit) {
        const { error } = await supabase
          .from('opinions')
          .update({
            title: title.trim(),
            content: content.trim(),
            category,
            photo_url: photoUrlToSave,
          })
          .eq('id', id);
        if (error) throw error;
        navigate(`/posts/${id}`);
      } else {
        const author = profile?.display_name || user.user_metadata?.full_name || user.email;
        const { data, error } = await supabase
          .from('opinions')
          .insert({
            title: title.trim(),
            content: content.trim(),
            author,
            category,
            photo_url: photoUrlToSave,
            user_id: user.id,
          })
          .select()
          .single();
        if (error) throw error;
        navigate(`/posts/${data.id}`);
      }
    } catch (error) {
      setSubmitError('저장에 실패했어요. 잠시 후 다시 시도해 주세요.');
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loadingPost) {
    return (
      <section className={styles.section}>
        <p>불러오는 중이에요...</p>
      </section>
    );
  }

  const previewUrl = photoUrl || existingPhotoUrl;

  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>{isEdit ? '의견 수정' : '의견 쓰기'}</h1>

      <div className={styles.aiWrap}>
        <button type="button" className={styles.aiToggle} onClick={() => setAiOpen((prev) => !prev)}>
          ✨ AI 작성도우미
        </button>
        {aiOpen && (
          <div className={styles.aiPanel}>
            <p className={styles.aiHint}>
              짧게 무슨 일인지 적으면 제목·내용·분야를 채워드려요.
            </p>
            <textarea
              className={styles.aiTextarea}
              value={aiDraft}
              onChange={(event) => setAiDraft(event.target.value)}
              placeholder="예) 놀이터 그네 사슬 녹슬어서 위험함"
            />
            {aiError && <p className={styles.errorText}>{aiError}</p>}
            <button
              type="button"
              className={styles.aiGenerate}
              onClick={handleAiGenerate}
              disabled={aiLoading}
            >
              {aiLoading ? '작성 중...' : '제목·본문 채우기'}
            </button>
          </div>
        )}
      </div>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="title">
            제목
          </label>
          <input
            id="title"
            type="text"
            className={`${styles.input} ${errors.title ? styles.inputError : ''}`}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="무엇이 불편했나요?"
          />
          {errors.title && <p className={styles.errorText}>{errors.title}</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>분야</label>
          <CategoryChips
            categories={CATEGORIES}
            value={category}
            onChange={setCategory}
            error={Boolean(errors.category)}
          />
          {errors.category && <p className={styles.errorText}>{errors.category}</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="content">
            내용
          </label>
          <textarea
            id="content"
            className={`${styles.textarea} ${errors.content ? styles.inputError : ''}`}
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="언제, 어디서, 어떤 불편이 있었는지 적어주세요."
          />
          {errors.content && <p className={styles.errorText}>{errors.content}</p>}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>사진 (선택, 최대 1장)</label>
          {previewUrl ? (
            <div className={styles.preview}>
              <img src={previewUrl} alt="" className={styles.previewImage} />
              <span className={styles.previewName}>{photo?.name ?? '기존 사진'}</span>
              <button type="button" className={styles.previewRemove} onClick={handlePhotoRemove}>
                삭제
              </button>
            </div>
          ) : (
            <button
              type="button"
              className={styles.upload}
              onClick={() => fileInputRef.current?.click()}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className={styles.uploadIcon}
                aria-hidden="true"
              >
                <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
                <circle cx="8" cy="10" r="1.6" fill="currentColor" stroke="none" />
                <path d="M4 17.5l5-5 3.5 3.5L17 11l3.5 4.5" />
              </svg>
              <span>사진 올리기</span>
            </button>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className={styles.fileInput}
            onChange={handlePhotoSelect}
          />
        </div>

        {submitError && <p className={styles.errorText}>{submitError}</p>}

        <div className={styles.submitRow}>
          <button type="submit" className={styles.submit} disabled={submitting}>
            {submitting ? '저장 중...' : '저장하기'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default WritePage;
