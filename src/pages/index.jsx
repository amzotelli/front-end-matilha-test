import Head from 'next/head'

import NavBar from '../components/NavBar';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';

export default function Home() {
  return (
    <div>
      <Head>
        <title>teste matilha</title>
        <style>
          @import
          url(`https://fonts.googleapis.com/css2?
          family=Teko:wght@300;400;500;600;700&display=swap`);
          @import
          url(`https://fonts.googleapis.com/css2
          ?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap`);
        </style>
      </Head>
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <footer>
        </footer>
        
    </div>
  )
}
