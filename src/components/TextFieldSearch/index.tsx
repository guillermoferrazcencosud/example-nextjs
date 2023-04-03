import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './TextFieldSearch.module.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { KeyboardEvent } from 'react';
import Router from 'next/router';

const TextFieldSearch = () => {
  const inputId = 'search-input-product'

  const handleSearch = () => {
    const searchEl = (document.getElementById(inputId) as HTMLInputElement).value;
    if(searchEl && searchEl !== "") Router.push(`https://www.easy.cl/${searchEl}?_q=${searchEl}&map=ft`)
  }

  const handleKey = (key: string) => {
    if(key === "Enter") handleSearch()
  }

  return (
    <section className={styles.root} tabIndex={0} onKeyDown={(e: KeyboardEvent) => handleKey(e.key)}>
      <input type="search" placeholder="¡Hola! ¿Qué estás buscando?" id={inputId}/>
      <div className={styles.searchIcon} onClick={() => handleSearch()}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </section>
  )
}
export default TextFieldSearch;
