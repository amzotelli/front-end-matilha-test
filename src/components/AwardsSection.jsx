import Image from 'next/image';

import Title from './subcomponents/Title';
import PrizeCardA from './subcomponents/PrizeCardA';
import PrizeCardB from './subcomponents/PrizeCardB';

import styles from '../styles/AwardsSection.module.css';

export default function AwardsSection() {
  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <Title title="THE EVENT REWARDS" />
        <div className={styles.paragraph}>
          <p>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit.
            Ac ipsum, cursus habitasse eu a, ac aliquet habitant eu.
            Maecenas tincidunt duis scelerisque varius vel elementum.
          </p>
        </div>
        <div>
          <PrizeCardA />
        </div>
        <div>
          <PrizeCardB /> 
        </div>
      </div>
      <div className={ styles.background } />
      <div className={styles.imageBottom}>
        <Image
          src="/images/awardSection/bottom-bar.png"
          alt="background"
          width="1302px"
          height="77px"
          objectFit="contain"        
        />
      </div>
    </section>
  );
}
