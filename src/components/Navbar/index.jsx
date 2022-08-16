import Image from 'next/image';

import styles from './styles.module.css';

import logo from '../../assets/logo.png'

export default function Navbar() {
 return (
   <div>
      <header>
        <nav className={styles.nav}>
          <a href='/'> <Image src={logo} width={200} height={100} /></a>
          <div className={styles.mobileMenu}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
          <ul className={styles.navList}>
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Sobre</a></li>
            <li><a href="/">Projetos</a></li>
            <li><a href="/">Contato</a></li>
          </ul>
        </nav>
      </header>
   </div>
 );
}