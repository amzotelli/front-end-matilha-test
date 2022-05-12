import Image from 'next/image';

import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <section>
      <div className={ styles.container }>
        <div className={ styles.leftSide }>
          <Image
            src="/images/header/PUBG_VikendiWonderlandLogo.png"
            alt="Vikendi Wonderland Giveaway"
            width="513px"
            height="161px"
          />
        </div>
        <div className={ styles.detail }>
          <Image
            src="/images/header/spray-bg.png"
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
