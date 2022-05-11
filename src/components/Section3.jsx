import Image from 'next/image';

import Title from '../components/Title';
import styles from '../styles/Section3.module.css';

export default function Section3() {
  return (
    <section className={ styles.container3 }>
      <div className={ styles.background }>
        <div className={ styles.aha2 }>
          <Title title="THE EVENT REWARDS" />
          <div className={ styles.paragraph }>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac ipsum, cursus habitasse eu a, ac aliquet habitant eu. Maecenas tincidunt duis scelerisque varius vel elementum.
            </p>
          </div>
            <Image src="/images/section3/img-pubggraffitti.png" alt="background" width="300px" height="100%" />          
        </div>
      </div>
    </section>
  )
}
