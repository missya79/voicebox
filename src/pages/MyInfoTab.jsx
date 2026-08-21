import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './MyInfoTab.module.css';

function MyInfoTab() {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/', { replace: true });
  };

  return (
    <div className={styles.wrap}>
      {profile?.avatar_url ? (
        <img src={profile.avatar_url} alt="" className={styles.avatar} referrerPolicy="no-referrer" />
      ) : (
        <span className={styles.avatarFallback}>
          {(profile?.display_name ?? user.email ?? '?').slice(0, 1)}
        </span>
      )}
      <p className={styles.name}>{profile?.display_name ?? '이름 없음'}</p>
      <p className={styles.email}>{user.email}</p>
      <button type="button" className={styles.signOut} onClick={handleSignOut}>
        로그아웃
      </button>
    </div>
  );
}

export default MyInfoTab;
