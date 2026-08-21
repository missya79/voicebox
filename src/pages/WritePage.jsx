import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryChips from '../components/CategoryChips';
import { CATEGORIES } from '../data/categories';
import { supabase } from '../lib/supabaseClient';
import styles from './WritePage.module.css';

function WritePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState(null);
  const [content, setContent] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const fileInputRef = useRef(null);

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
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!title.trim()) nextErrors.title = '제목을 입력해 주세요.';
    if (!author.trim()) nextErrors.author = '이름을 입력해 주세요.';
    if (!category) nextErrors.category = '분야를 선택해 주세요.';
    if (!content.trim()) nextErrors.content = '내용을 입력해 주세요.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError('');

    try {
      let uploadedPhotoUrl = null;
      if (photo) {
        const filePath = `${Date.now()}-${photo.name}`;
        const { error: uploadError } = await supabase.storage
          .from('photos')
          .upload(filePath, photo);
        if (uploadError) throw uploadError;
        uploadedPhotoUrl = supabase.storage.from('photos').getPublicUrl(filePath).data
          .publicUrl;
      }

      const { data, error } = await supabase
        .from('opinions')
        .insert({
          title: title.trim(),
          content: content.trim(),
          author: author.trim(),
          category,
          photo_url: uploadedPhotoUrl,
        })
        .select()
        .single();
      if (error) throw error;

      navigate(`/posts/${data.id}`);
    } catch (error) {
      setSubmitError('저장에 실패했어요. 잠시 후 다시 시도해 주세요.');
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>의견 쓰기</h1>

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
          <label className={styles.label} htmlFor="author">
            이름
          </label>
          <input
            id="author"
            type="text"
            className={`${styles.input} ${errors.author ? styles.inputError : ''}`}
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            placeholder="이름을 입력해 주세요"
          />
          {errors.author && <p className={styles.errorText}>{errors.author}</p>}
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
          {photoUrl ? (
            <div className={styles.preview}>
              <img src={photoUrl} alt="" className={styles.previewImage} />
              <span className={styles.previewName}>{photo?.name}</span>
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
