import Logo from '@/../public/img/easy-logo.svg'
import Image from 'next/image';
import styles from './Left.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const BlockLeft = () => {
  return (
    <section className={styles.root}>
      <Link href="/">
        <Image 
          src={Logo} 
          width="60" 
          alt="Easy" 
          blurDataURL={Logo}
          priority 
          />
      </Link>
      <section className={styles.menu}>
        <FontAwesomeIcon icon={faBars}/>
        <span>Categorias</span>
      </section>
    </section>
  )
}
export default BlockLeft;