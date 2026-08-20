import styles from './StatusBadge.module.css';

const STATUS_CLASS = {
  접수: styles.received,
  처리중: styles.inProgress,
  완료: styles.done,
};

function StatusBadge({ status }) {
  return (
    <span className={`${styles.badge} ${STATUS_CLASS[status] ?? ''}`}>
      {status}
    </span>
  );
}

export default StatusBadge;
