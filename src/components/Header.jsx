import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <img src="/icons/icon-192.png" alt="" className={styles.icon} />
        <span className={styles.name}>(주)맘숲놀이</span>
      </Link>
    </header>
  );
}

export default Header;
