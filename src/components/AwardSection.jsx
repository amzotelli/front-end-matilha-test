import Image from 'next/image';

import Title from './subcomponents/Title';
import styles from '../styles/AwardSection.module.css';

export default function Section3() {
  return (
    <section className={ styles.container3 }>
        <div className={ styles.text }>
          <Title title="THE EVENT REWARDS" />
          <div className={ styles.paragraph }>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac ipsum, cursus habitasse eu a, ac aliquet habitant eu. Maecenas tincidunt duis scelerisque varius vel elementum.
            </p>
        </div>
        <div className={ styles.prize1 }>
            <div className={ styles.heading1 } >
            <Image src="/images/awardSection/img-spraymask-yellow.png" alt="Spraymask" width="483px" height="146px" objectFit="cover" />
            </div>
          <div className={ styles.secondDetail }>
            <Image
              src="/images/awardSection/reward.png"
              alt="Prize"
              width="464px"
              height="354px"
              objectFit="cover" 
            />
          </div>
          <div className={ styles.secondMain }>
            <Image
              src="/images/awardSection/background.png"
              alt="background"
              width="528px"
              height="520px"
              objectFit="cover" 
            />
          </div>
          </div>
        <div className={ styles.prize2 }>
          <Image
            src="/images/awardSection/reward2.png"
            alt="Prize"
            width="464px"
            height="354px"
            objectFit="cover" 
          />
          <Image src="/images/awardSection/background.png" alt="background" width="528px" height="520px" objectFit="cover" />
        </div>
        </div>
      <div className={ styles.background }>
      </div>
    </section>
  )
}
