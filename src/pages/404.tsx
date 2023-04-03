import styles from '@/styles/404.module.scss';
import React from 'react';
import Logo from '@/../public/img/easy-logo.svg';
import Image from 'next/image';
const ErrorPage = () => {
  return (
    <section className={styles.root}>
    <section className={styles.containerLogo}>
      <Image src={Logo} width="90" alt="Easy"/>
    </section>
    <section className={styles.containerText}>
      <h1>Lo siento, la página que estás buscando no se puede encontrar en nuestro sitio.</h1>
    </section>
    </section>
  )
}
export default ErrorPage;