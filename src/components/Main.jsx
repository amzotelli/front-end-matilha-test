import Image from 'next/image';

import Title from './subcomponents/Title';
import styles from '../styles/Main.module.css';

export default function Main() {
  return (
    <section>
      <div className={ styles.container }>
        <div className={ styles.text }>
          <Title title="ABOUT THE EVENT" />
          <div className={ styles.mobileImage }>
            <Image
              src="/images/main/grad-line.png"
              width="401px"
              height="5px" 
              alt="color"
            />
          </div>
        </div>
        <div className={ styles.sideImage }>
          <Image
            src="/images/main/img-characters.png"
            alt="Characters"
            width="536px"
            height="554px" 
            objectFit="cover"
          />
        </div>
        <div className={ styles.paragraph }>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ac ipsum, cursus habitasse eu a, ac aliquet habitant eu.
          Maecenas tincidunt duis scelerisque varius vel elementum nascetur aliquet.
          Nibh risus leo non onvallis dolor quis gravida pretium, consequat.
          Sit sed et erat dui. Feugiat tellus ipsum amet nisl elit suspendisse cras mattis.
          </p>
          <p>
          Pellentesque nisl bibendum feugiat adipiscing quisque velit mauris.
          Amet pellentesque amet eleifend pulvinar tincidunt.Convallis neque consectetur massa ipsum. 
          </p>
        </div>
        <div className={ styles.textLink }>
          <h5>SEE THE OFFICIAL RULES</h5>
        </div>
        <button type="button" className={ styles.loginButton }>
          LOGIN OR CREATE ACCOUNT
        </button>
        <div className={ styles.secondContainer }/>
      </div>
    </section>
  )
}
