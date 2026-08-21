import { Link } from 'react-router-dom';
import PhotoPlaceholder from './PhotoPlaceholder';
import StatusBadge from './StatusBadge';
import CategoryBadge from './CategoryBadge';
import styles from './MyPostCard.module.css';

function MyPostCard({ post, onDelete }) {
  return (
    <div className={styles.card}>
      <Link to={`/posts/${post.id}`} className={styles.linkArea}>
        <PhotoPlaceholder photo={post.photo} />
        <div className={styles.body}>
          <div className={styles.badges}>
            <StatusBadge status={post.status} />
            <CategoryBadge category={post.category} />
          </div>
          <h3 className={styles.title}>{post.title}</h3>
          <div className={styles.meta}>
            <span>{post.date}</span>
          </div>
        </div>
      </Link>
      <div className={styles.actions}>
        <Link to={`/write/${post.id}`} className={styles.edit}>
          수정
        </Link>
        <button type="button" className={styles.delete} onClick={() => onDelete(post.id)}>
          삭제
        </button>
      </div>
    </div>
  );
}

export default MyPostCard;
