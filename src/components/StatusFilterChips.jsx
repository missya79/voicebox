import { STATUSES } from '../data/statuses';
import styles from './StatusFilterChips.module.css';

const OPTIONS = ['전체', ...STATUSES];

function StatusFilterChips({ value, onChange }) {
  return (
    <div className={styles.row} role="group" aria-label="처리 상태 필터">
      {OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          className={`${styles.chip} ${value === option ? styles.active : ''}`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default StatusFilterChips;
