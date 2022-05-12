import Head from 'next/head'

import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Main from '../components/Main';
import AwardsSection from '../components/AwardsSection';
import StepsSection from '../components/StepsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Teste Amanda&&Matilha</title>
      </Head>
      <NavBar />
      <Header />
      <Main />
      <AwardsSection />
      <StepsSection />
      <Footer />        
    </>
  )
}
