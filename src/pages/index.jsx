import Head from 'next/head'

import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Main from '../components/Main';
import AwardSection from '../components/AwardSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>teste matilha</title>
      </Head>
      <NavBar />
      <Header />
      <Main />
      <AwardSection />
      <footer>
        </footer>
        
    </div>
  )
}
