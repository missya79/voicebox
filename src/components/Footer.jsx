import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <strong className={styles.name}>(주)맘숲놀이</strong>
      <p className={styles.intro}>마음을 잇는 놀이 — 숲에서 시작해 세계로 이어지는 놀이</p>
    </footer>
  );
}

export default Footer;
