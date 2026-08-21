import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PhotoPlaceholder from '../components/PhotoPlaceholder';
import StatusBadge from '../components/StatusBadge';
import CategoryBadge from '../components/CategoryBadge';
import { supabase } from '../lib/supabaseClient';
import { formatDate } from '../lib/formatDate';
import styles from './DetailPage.module.css';

function DetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function fetchPost() {
      setLoading(true);
      const { data, error } = await supabase
        .from('opinions')
        .select('*')
        .eq('id', id)
        .maybeSingle();

      if (ignore) return;
      if (error || !data) {
        setPost(null);
      } else {
        setPost({
          id: data.id,
          title: data.title,
          content: data.content,
          author: data.author,
          status: data.status,
          category: data.category,
          photo: data.photo_url,
          date: formatDate(data.created_at),
        });
      }
      setLoading(false);
    }

    fetchPost();
    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <section className={styles.notFound}>
        <p>불러오는 중이에요...</p>
      </section>
    );
  }

  if (!post) {
    return (
      <section className={styles.notFound}>
        <p>글을 찾을 수 없어요.</p>
        <Link to="/" className={styles.backLink}>
          목록으로 돌아가기
        </Link>
      </section>
    );
  }

  return (
    <article className={styles.article}>
      <PhotoPlaceholder photo={post.photo} className={styles.photo} />
      <div className={styles.body}>
        <div className={styles.badges}>
          <StatusBadge status={post.status} />
          <CategoryBadge category={post.category} />
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
        <p className={styles.content}>{post.content}</p>
        <Link to="/" className={styles.backLink}>
          목록으로 돌아가기
        </Link>
      </div>
    </article>
  );
}

export default DetailPage;
