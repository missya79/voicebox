import { useEffect, useMemo, useState } from 'react';
import Hero from '../components/Hero';
import PostCard from '../components/PostCard';
import StatusFilterChips from '../components/StatusFilterChips';
import CategoryChips from '../components/CategoryChips';
import { CATEGORIES } from '../data/categories';
import { supabase } from '../lib/supabaseClient';
import { formatDate } from '../lib/formatDate';
import styles from './HomePage.module.css';

function HomePage() {
  const [status, setStatus] = useState('전체');
  const [category, setCategory] = useState('전체');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let ignore = false;

    async function fetchPosts() {
      setLoading(true);
      setLoadError(false);
      const { data, error } = await supabase
        .from('opinions')
        .select('*')
        .order('created_at', { ascending: false });

      if (ignore) return;
      if (error) {
        setLoadError(true);
        console.error(error);
      } else {
        setPosts(
          data.map((row) => ({
            id: row.id,
            title: row.title,
            content: row.content,
            author: row.author,
            status: row.status,
            category: row.category,
            photo: row.photo_url,
            date: formatDate(row.created_at),
          }))
        );
      }
      setLoading(false);
    }

    fetchPosts();
    return () => {
      ignore = true;
    };
  }, []);

  const filtered = useMemo(
    () =>
      posts.filter(
        (post) =>
          (status === '전체' || post.status === status) &&
          (category === '전체' || post.category === category)
      ),
    [posts, status, category]
  );

  return (
    <>
      <Hero />

      <section className={styles.filters}>
        <p className={styles.filterLabel}>처리 상태</p>
        <StatusFilterChips value={status} onChange={setStatus} />

        <p className={styles.filterLabel}>분야</p>
        <CategoryChips
          categories={CATEGORIES}
          value={category}
          onChange={setCategory}
          includeAll
        />
      </section>

      <section className={styles.listSection}>
        {loading ? (
          <p className={styles.empty}>불러오는 중이에요...</p>
        ) : loadError ? (
          <p className={styles.empty}>의견을 불러오지 못했어요. 잠시 후 다시 시도해 주세요.</p>
        ) : filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>조건에 맞는 의견이 아직 없어요.</p>
        )}
      </section>
    </>
  );
}

export default HomePage;
