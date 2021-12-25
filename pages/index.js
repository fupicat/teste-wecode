import Head from 'next/head'
import Home from '../components/Home';

export default function Index() {

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet" /> 
      </Head>
      <Home />
    </div>
  )
}
