import styles from './CategoryBadge.module.css';

function CategoryBadge({ category }) {
  return <span className={styles.badge}>{category}</span>;
}

export default CategoryBadge;
