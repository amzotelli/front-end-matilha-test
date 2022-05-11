import Title from './subcomponents/Title';
import PrizeCardA from './subcomponents/PrizeCardA';
import PrizeCardB from './subcomponents/PrizeCardB';

import styles from '../styles/AwardSection.module.css';

export default function Section3() {
  return (
    <section className={styles.container3}>
      <div className={styles.text}>
        <Title title="THE EVENT REWARDS" />
        <div className={styles.paragraph}>
          <p>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit.
            Ac ipsum, cursus habitasse eu a, ac aliquet habitant eu.
            Maecenas tincidunt duis scelerisque varius vel elementum.
          </p>
        </div>
        <PrizeCardA />
        <PrizeCardB />          
        </div>
      <div className={styles.background} />
    </section>
  );
}
