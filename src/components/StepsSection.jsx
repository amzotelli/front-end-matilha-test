import Image from 'next/image';

import styles from '../styles/StepsSection.module.css';
import Title from './subcomponents/Title';

export default function StepsSection() {
  return (
    <section>
      <div className={styles.topImage}>
        <Image
          src="/images/stepsSection/divider-top.png"
          alt="divider"
          width="1890px"
          height="50px"
        />
      </div>
      <div className={styles.text}>
        <Title title="HOW TO PARTICIPATE" />
      </div>
      <div className={ styles.container }>
        <div className={ styles.img }>
          <Image
            src="/images/stepsSection/pubg-kraftonid.png"
            alt="steps"
            width="430px"
            height="420px"
            objectFit="cover"
          />
        </div> 
        <button
          className={ styles.button }
          type="button"
        >
          LOGIN
        </button>
        <div className={ styles.character }>
          <Image
            src="/images/stepsSection/icequeen.png"
            alt="divider"
            width="230px"
            height="516px"
          />
        </div>
      </div>
    </section>
  );
}
