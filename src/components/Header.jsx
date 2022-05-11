import Image from 'next/image';

import styles from '../styles/Header.module.css';

export default function Section1() {
  return (
    <section>
      <div className={ styles.container }>
        <div className={ styles.leftSide }>
          <Image
            src="/images/section1/PUBG_VikendiWonderlandLogo.png"
            alt="Vikendi Wonderland Giveaway"
            width="513px"
            height="161px"
          />
          </div>
        <div className={ styles.detail }>
          <Image
            src="/images/section1/spray-bg.png"
            alt="spray"
            width="1122px"
            height="505px" 
            objectFit="contain"
          />
          <button
            type="button"
            className={ styles.loginButton }
          >
            LOGIN OR CREATE ACCOUNT
          </button>
          </div>
      </div>
    </section>
  )
}
