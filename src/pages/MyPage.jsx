import { useState } from 'react';
import MyPostsTab from './MyPostsTab';
import MyInfoTab from './MyInfoTab';
import styles from './MyPage.module.css';

function MyPage() {
  const [tab, setTab] = useState('posts');

  return (
    <section className={styles.section}>
      <div className={styles.tabBar} role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'posts'}
          className={`${styles.tab} ${tab === 'posts' ? styles.tabActive : ''}`}
          onClick={() => setTab('posts')}
        >
          내가 쓴 글
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'info'}
          className={`${styles.tab} ${tab === 'info' ? styles.tabActive : ''}`}
          onClick={() => setTab('info')}
        >
          내 정보
        </button>
      </div>

      {tab === 'posts' ? <MyPostsTab /> : <MyInfoTab />}
    </section>
  );
}

export default MyPage;
