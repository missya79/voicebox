import { Link } from 'react-router-dom';
import PhotoPlaceholder from './PhotoPlaceholder';
import StatusBadge from './StatusBadge';
import CategoryBadge from './CategoryBadge';
import styles from './PostCard.module.css';

function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`} className={styles.card}>
      <PhotoPlaceholder photo={post.photo} />
      <div className={styles.body}>
        <div className={styles.badges}>
          <StatusBadge status={post.status} />
          <CategoryBadge category={post.category} />
        </div>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.content}</p>
        <div className={styles.meta}>
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
