import Image from 'next/image';

import Title from '../components/Title';
import styles from '../styles/Container.module.css';

export default function Section2() {
  return (
    <section>
      <div className={ styles.aha2 }>
        <Title title="ABOUT THE EVENT" />
      </div>
      <div className={ styles.secondContainer }>
        <div className={ styles.secondDetail }>
          <Image src="/images/section2/img-characters.png" alt="background" width="500px" height="500px" />
        </div>
      <div className={ styles.secondMain }>
        <Image src="/images/section2/img-background-intro.png" alt="background" width="1124px" height="500px" />        
        </div>        
        <button type="button" className={ styles.secondLogin }>
          LOGIN OR CREATE ACCOUNT
        </button>
        <div className={ styles.paragraph }>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac ipsum, cursus habitasse eu a, ac aliquet habitant eu. Maecenas tincidunt duis scelerisque varius vel elementum nascetur aliquet. Nibh risus leo non onvallis dolor quis gravida pretium, consequat. Sit sed et erat dui. Feugiat tellus ipsum amet nisl elit suspendisse cras mattis.
            
            Pellentesque nisl bibendum feugiat adipiscing quisque velit mauris.Amet pellentesque amet eleifend pulvinar tincidunt.Convallis neque consectetur massa ipsum. 
          </p>
          </div>
        </div>
    </section>
  )
}
