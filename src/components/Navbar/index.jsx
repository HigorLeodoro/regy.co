import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <div>
      <header className={styles.fixed}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <a href="/">
              <Image src={logo} width={200} height={125} />
            </a>
          </div>
          <div className={styles.mobileMenu}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
          <ul className={styles.navList}>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/">Quem somos</Link>
            </li>
            {/* <li><Link href="/">Projetos</Link></li> */}
            <li>
              <Link href="/">Contato</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
