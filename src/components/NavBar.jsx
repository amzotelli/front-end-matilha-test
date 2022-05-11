import Image from 'next/image';

import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  return (
    <nav>
      <div className={styles.container}>
        <div className={ styles.leftSide }>
          <Image src="/images/navbar/logo.png" alt="logo" width="136px" height="48px" className={ styles.logo } />
              <div>ABOUT THE EVENT</div>
              <div>REWARDS</div>
              <div>ACCOUNT</div>
            </div>
        <div className={ styles.rightSide }>
          <button type="button" className={ styles.loginButton }>
            LOGIN TO EARN REWARDS
          </button>
          <Image src="/images/navbar/dust_bg.png" alt="dust" width="1920px" height="100%" className={ styles.background } />
        </div>
    </div>
    </nav>
  )
}
