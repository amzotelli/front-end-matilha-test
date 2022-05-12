import Image from 'next/image';

import Title from './subcomponents/Title';
import StepLine from './subcomponents/StepLine';

import styles from '../styles/StepsSection.module.css';

export default function StepsSection() {
  return (
    <section>
      <div className={styles.borderImage}>
        <Image
          src="/images/stepsSection/vector_alt.png"
          alt="divider"
          width="1890px"
          height="50px"
        />
      </div>
      <div className={styles.heading}>
        <Title title="HOW TO PARTICIPATE" />
      </div>
      <div className={ styles.container }>
        <div className={ styles.image } />
        <div className={ styles.imageIcon } >
          <Image
            src="/images/stepsSection/pubg-kraftonid.png"
            alt="steps"
            width="460px"
            height="532px" 
          />
        </div>
        <div className={ styles.stepsMobile } >
          <div className={ styles.step1 }>
            <span><h5 className={ styles.item }>STEP 1</h5></span>
            <span><h3 className={styles.line}>Login to your PUBG Account</h3></span>
          </div>
          <div className={ styles.mobileLogin }>
            <button
              className={ styles.buttonMobile }
              type="button"
            >
          LOGIN
            </button>
          </div>
          <StepLine step="2" text="Link your gaming Account" />
          <StepLine step="3" text="Enter Sweepstakes" />
        </div>
        <div className={ styles.steps }>
          <StepLine step="1" text="Login to your PUBG Account" />
          <StepLine step="2" text="Link your gaming Account" />
          <StepLine step="3" text="Enter Sweepstakes" />
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
