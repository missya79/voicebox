import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import styles from './AuthCallbackPage.module.css';

function AuthCallbackPage() {
  const { user, loading } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const handled = useRef(false);

  useEffect(() => {
    if (loading || !user || handled.current) return;
    handled.current = true;

    const createdAt = new Date(user.created_at).getTime();
    const lastSignInAt = new Date(user.last_sign_in_at).getTime();
    const isNewUser = Math.abs(lastSignInAt - createdAt) < 5000;

    showToast(isNewUser ? '가입을 마쳤습니다. 환영해요!' : '로그인되었습니다.');
    navigate('/', { replace: true });
  }, [loading, user, navigate, showToast]);

  return (
    <section className={styles.section}>
      <p>로그인 처리 중이에요...</p>
    </section>
  );
}

export default AuthCallbackPage;
