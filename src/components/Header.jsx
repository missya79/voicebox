import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './Header.module.css';

function Header() {
  const { user, profile, loading } = useAuth();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <img src="/icons/icon-192.png" alt="" className={styles.icon} />
        <span className={styles.name}>(주)맘숲놀이</span>
      </Link>

      {!loading && (
        <nav className={styles.nav}>
          {user ? (
            <Link to="/mypage" className={styles.avatarLink} aria-label="마이페이지">
              {profile?.avatar_url ? (
                <img src={profile.avatar_url} alt="" className={styles.avatar} referrerPolicy="no-referrer" />
              ) : (
                <span className={styles.avatarFallback}>
                  {(profile?.display_name ?? user.email ?? '?').slice(0, 1)}
                </span>
              )}
            </Link>
          ) : (
            <>
              <Link to="/login" className={styles.loginButton}>
                로그인
              </Link>
              <Link to="/signup" className={styles.signupButton}>
                회원가입
              </Link>
            </>
          )}
        </nav>
      )}
    </header>
  );
}

export default Header;
