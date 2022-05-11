import Image from 'next/image';

import styles from '../../styles/PrizeCardB.module.css';

export default function PrizeCardA() {
  return (
    <div className={ styles.prizeB }>
      <div className={ styles.headingB }>
        <h3>9 winners</h3>
        </div>
        <div className={ styles.detailB }>
        <Image
          src="/images/awardSection/img-spraymask.png"
          alt="Spraymask"
          width="483px"
          height="146px"
          objectFit="cover" 
        />
        </div>
          <div className={styles.secondDetailB}>
            <Image
              src="/images/awardSection/reward2.png"
              alt="Prize"
              width="464px"
              height="354px"
              objectFit="cover"
            />
      </div>
         <div className={styles.secondMainB}>
        <Image
              src="/images/awardSection/background.png"
              alt="background"
              width="528px"
              height="520px"
              objectFit="cover"
            />
      </div>
    </div>
  )
}
