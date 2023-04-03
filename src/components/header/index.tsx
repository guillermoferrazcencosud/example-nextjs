import HeaderTop from '../headerTop';
import styles from  './Header.module.scss';
import BlockLeft from './blocks/left';
import BlockMiddle from './blocks/middle';
import BlockRight from './blocks/right';

const Header = () => {
  return (
    <>
    <HeaderTop/>
    <header className={styles.root}>
      <BlockLeft/>
      <BlockMiddle/>
      <BlockRight/>
    </header>
    </>
  )
}
export default Header;