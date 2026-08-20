import { useMemo, useState } from 'react';
import Hero from '../components/Hero';
import PostCard from '../components/PostCard';
import StatusFilterChips from '../components/StatusFilterChips';
import CategoryChips from '../components/CategoryChips';
import { POSTS } from '../data/posts';
import { CATEGORIES } from '../data/categories';
import styles from './HomePage.module.css';

function HomePage() {
  const [status, setStatus] = useState('전체');
  const [category, setCategory] = useState('전체');

  const filtered = useMemo(
    () =>
      POSTS.filter(
        (post) =>
          (status === '전체' || post.status === status) &&
          (category === '전체' || post.category === category)
      ),
    [status, category]
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
        {filtered.length > 0 ? (
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
