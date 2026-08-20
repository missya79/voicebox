import { useState } from 'react';
import styles from './CategoryChips.module.css';

function CategoryChips({ categories, value, onChange, includeAll = false, error = false }) {
  const [expanded, setExpanded] = useState(false);
  const options = includeAll ? ['전체', ...categories] : categories;

  return (
    <div>
      <div className={`${styles.wrap} ${expanded ? styles.expanded : ''}`}>
        <div className={styles.row} role="group" aria-label="분야">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className={`${styles.chip} ${value === option ? styles.active : ''} ${
                error ? styles.errorChip : ''
              }`}
              onClick={() => onChange(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <button
        type="button"
        className={styles.moreToggle}
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? '분야 접기 ▴' : '분야 더보기 ▾'}
      </button>
    </div>
  );
}

export default CategoryChips;
