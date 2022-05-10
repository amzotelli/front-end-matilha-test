import Image from 'next/image';

import styles from '../styles/Container.module.css';

export default function Section1() {
  return (
    <section>
      <div className={ styles.container }>
        <div className={ styles.leftSide }>
          <Image src="/images/section1/PUBG_VikendiWonderlandLogo.png" alt="logo" width="513px" height="161px" />
          </div>
        <div className={ styles.detail }>
          <Image src="/images/section1/spray-bg.png" alt="spray" width="1122px" height="505px" />
            <button type="button" className={ styles.loginButton }>
              LOGIN OR CREATE ACCOUNT
            </button>
          </div>
        <div className={ styles.main }>
        <Image src="/images/section1/l-1920px.png" alt="character banner" width="1797px" height="1011px" />
        </div>
      </div>
    </section>
  )
}
