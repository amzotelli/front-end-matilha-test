import Image from 'next/image';

import styles from '../../styles/PrizeCard.module.css';

export default function PrizeCardA() {
  return (
    <div className={ styles.prizeA }>
      <div className={ styles.headingA }>
        <h3>1 GRAND PRIZE WINNER</h3>
      </div>
      <div className={ styles.titleImageA }>
        <Image
          src="/images/awardSection/img-spraymask-yellow.png"
          alt="Spraymask"
          width="483px"
          height="146px"
          objectFit="cover" 
        />
      </div>
      <div className={styles.rewardA}>
        <Image
          src="/images/awardSection/reward.png"
          alt="Prize"
          width="464px"
          height="354px"
          objectFit="cover"
        />
      </div>
      <div className={styles.prizeContainerA}>
        <Image
          src="/images/awardSection/background.png"
          alt="background"
          width="528px"
          height="520px"
          objectFit="cover"
        />
      </div>
      <p className={ styles.subtitleA }> +++++ WILL RECEIVE { '>' }{ '>' }{ '>' }{ '>' }{ '>' }{ '>' }{ '>' } </p>
      <div className={ styles.prizeTextA }>
        <p> Contraband Coupons, Nickel G coin box</p>
        <p> and PUBG X SteelSeries gear </p>
      </div>
    </div>
  )
}
