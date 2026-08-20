import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.wrap}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <h1 className={styles.title}>우리 동네, 말하면 바뀝니다</h1>
          <p className={styles.subtitle}>
            가로등, 놀이터, 도로처럼 동네에서 겪은 불편이나 제안을 남기면 (주)맘숲놀이가 확인하고,
            접수부터 처리 완료까지 상황을 알려드려요.
          </p>
          <Link to="/write" className={styles.cta}>
            의견 남기기
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Hero;
