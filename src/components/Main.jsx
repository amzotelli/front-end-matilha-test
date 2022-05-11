import Image from 'next/image';

import Title from './Title';
import styles from '../styles/Main.module.css';

export default function Section2() {
  return (
    <section className={ styles.container }>
      <div className={ styles.secondContainer }>
      <div className={ styles.text }>
          <Title title="ABOUT THE EVENT" />
          <Image
            src="/images/section2/grad-line.png"
            width="401px"
            height="5px" 
            alt="color"
          />
        </div>
        <div className={ styles.secondDetail }>
          <Image
            src="/images/section2/img-characters.png"
            alt="Characters"
            width="536px"
            height="554px" 
            objectFit="cover"
          />
        </div>
      <div className={ styles.secondMain }>
        <button type="button" className={ styles.secondLogin }>
          LOGIN OR CREATE ACCOUNT
        </button>
        <div className={ styles.paragraph }>
        <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac ipsum, cursus habitasse eu a, ac aliquet habitant eu. Maecenas tincidunt duis scelerisque varius vel elementum nascetur aliquet. Nibh risus leo non onvallis dolor quis gravida pretium, consequat. Sit sed et erat dui. Feugiat tellus ipsum amet nisl elit suspendisse cras mattis.
            </p>
            <p>
            Pellentesque nisl bibendum feugiat adipiscing quisque velit mauris.Amet pellentesque amet eleifend pulvinar tincidunt.Convallis neque consectetur massa ipsum. 
            </p>
          </div>
          <div className={ styles.link }>
            <h5>SEE THE OFFICIAL RULES</h5>
          </div>
        </div>
      </div>
    </section>
  )
}
