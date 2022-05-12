import Image from 'next/image';

import styles from '../../styles/PrizeCard.module.css';

export default function PrizeCardB() {
  return (
    <div className={ styles.prizeB }>
      <div className={ styles.headingB }>
        <h3>9 WINNERS</h3>
      </div>
      <div className={ styles.titleImageB }>
        <Image
          src="/images/awardSection/img-spraymask.png"
          alt="Spraymask"
          width="483px"
          height="146px"
          objectFit="cover" 
        />
      </div>
      <div className={styles.rewardB}>
        <Image
          src="/images/awardSection/reward2.png"
          alt="Prize"
          width="464px"
          height="354px"
          objectFit="cover"
        />
      </div>
      <div className={styles.prizeContainerB}>
        <Image
          src="/images/awardSection/background.png"
          alt="background"
          width="528px"
          height="520px"
          objectFit="cover"
        />
      </div>
      <p className={ styles.subtitleB }> +++++ WILL RECEIVE { '>' }{ '>' }{ '>' }{ '>' }{ '>' }{ '>' }{ '>' } </p>
      <div className={ styles.prizeTextB }>
        <p>  Contraband Coupons, Nickel G coin box</p>
      </div>
    </div>
  )
}
