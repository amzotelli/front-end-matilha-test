import Image from 'next/image';

import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer>
      <div className={styles.divider}>
        <Image
          src="/images/footer/divider-bottom.png"
          alt="logo"
          width="1440px"
          height="32px" 
          objectFit="contain"
        />
      </div>
      <div className={styles.footerContainer} />
    </footer>
  );
}
