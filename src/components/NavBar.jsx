import Image from 'next/image';

import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  return (
    <nav>
      <div className={styles.container}>
        <div className={ styles.leftSide }>
          <Image
            src="/images/navbar/logo.png"
            alt="logo"
            width="136px"
            height="48px"
            className={ styles.logo } 
          />
          <span>ABOUT THE EVENT</span>
          <span>REWARDS</span>
          <span>ACCOUNT</span>
        </div>
        <div className={ styles.rightSide }>
          <button
            type="button"
            className={ styles.loginButton }
          >
            LOGIN TO EARN REWARDS
          </button>
        </div>
        <div className={ styles.mobile }>
          <button
            type="button"
            className={ styles.loginButton }
          >
                LOGIN
          </button>
          <Image
            src="/images/navbar/languages-icon.png"
            alt="languages"
            width="24px"
            height="24px" 
          />
        </div>
      </div>
    </nav>
  )
}
