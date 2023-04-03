import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './HeaderTop.module.scss';
import { faAngleDown, faAngleUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ListLinks } from './helpers';
import { AccordionStruct, ListLinksStruct } from './types';
import Link from 'next/link';
import SingleModal from '../singleModal';
import React from 'react';

const HeaderTop = () => {

  const ContentModal = (accordionList: AccordionStruct[]) => {
    return (
      <React.Fragment>
        <div className={styles.quad}/>
      <section className={styles.modalContentRoot}>
        <ul>
        {accordionList && accordionList?.length > 0 && accordionList?.map((item: AccordionStruct) => (
          <li key={item.link}>
            <Link href={item.link} target='_blank' className={styles.link}>
             <FontAwesomeIcon icon={item.icon}/>
             {item.title}
            </Link>
          </li>
        ))}
        </ul>
      </section>
      </React.Fragment>
    )
  }

  return (
    <header className={styles.root}>
      <nav>
        <ul className={styles.ul}>
          {ListLinks?.map((item: ListLinksStruct) => (
            <li key={item.link} className={styles.list}>
              {!item.accordion && item.link ? (
                <Link href={item.link} target='_blank' className={styles[item.className]}>
                  {item.title}
                </Link>
              ) :
                (
                  
                    <span className={styles.itemAccordion}>
                      {item.title}&nbsp;
                      <FontAwesomeIcon icon={faAngleDown} className={styles.arrowDown} />
                      <FontAwesomeIcon icon={faAngleUp} className={styles.arrowUp} />
                      {item?.accordionList && (
                        <SingleModal content={ContentModal(item.accordionList)}/>
                      )}
                    </span>
                )
              }
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
};
export default HeaderTop;