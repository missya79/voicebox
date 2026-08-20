import styles from './PhotoPlaceholder.module.css';

function PhotoPlaceholder({ photo, className = '' }) {
  if (photo) {
    return (
      <div className={`${styles.wrap} ${className}`}>
        <img src={photo} alt="" className={styles.image} />
      </div>
    );
  }

  return (
    <div className={`${styles.wrap} ${className}`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className={styles.icon}
        aria-hidden="true"
      >
        <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
        <circle cx="8" cy="10" r="1.6" fill="currentColor" stroke="none" />
        <path d="M4 17.5l5-5 3.5 3.5L17 11l3.5 4.5" />
      </svg>
    </div>
  );
}

export default PhotoPlaceholder;
