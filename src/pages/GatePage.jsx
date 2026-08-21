import { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleButton from '../components/GoogleButton';
import ConfirmDialog from '../components/ConfirmDialog';
import { supabase } from '../lib/supabaseClient';
import styles from './GatePage.module.css';

const COPY = {
  login: {
    heading: '로그인',
    description: '구글 계정으로 로그인하고 우리 동네 의견을 남겨보세요.',
    switchText: '아직 계정이 없으신가요?',
    switchLabel: '회원가입',
    switchTo: '/signup',
  },
  signup: {
    heading: '회원가입',
    description: '구글 계정으로 간편하게 가입하고 시작해보세요.',
    switchText: '이미 계정이 있으신가요?',
    switchLabel: '로그인',
    switchTo: '/login',
  },
};

function GatePage({ mode }) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const copy = COPY[mode];

  const handleGoogleAuth = async () => {
    setConfirmOpen(false);
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>{copy.heading}</h1>
      <p className={styles.description}>{copy.description}</p>

      <GoogleButton onClick={() => setConfirmOpen(true)} />

      <p className={styles.switchRow}>
        {copy.switchText}{' '}
        <Link to={copy.switchTo} className={styles.switchLink}>
          {copy.switchLabel}
        </Link>
      </p>

      <ConfirmDialog
        open={confirmOpen}
        title="구글 계정으로 계속할까요?"
        description="구글 계정으로 계속합니다. 처음이면 회원가입이, 이미 회원이면 로그인이 진행됩니다. 계속할까요?"
        confirmLabel="계속하기"
        cancelLabel="취소"
        onConfirm={handleGoogleAuth}
        onCancel={() => setConfirmOpen(false)}
      />
    </section>
  );
}

export default GatePage;
