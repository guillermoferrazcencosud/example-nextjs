import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useEffect } from 'react';


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    config.autoAddCss = false; 
  },[])
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )

}
