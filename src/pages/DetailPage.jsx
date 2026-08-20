import { useParams, Link } from 'react-router-dom';
import PhotoPlaceholder from '../components/PhotoPlaceholder';
import StatusBadge from '../components/StatusBadge';
import CategoryBadge from '../components/CategoryBadge';
import { POSTS } from '../data/posts';
import styles from './DetailPage.module.css';

function DetailPage() {
  const { id } = useParams();
  const post = POSTS.find((item) => String(item.id) === id);

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
