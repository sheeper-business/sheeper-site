import Link from 'next/link';
import React from 'react';
import css from './navbar.module.css';
import sheeper from '../../../assets/sheeper.png';
import Image from 'next/image';

export function NavBar() {
  return (
    <nav className={css.host}>
      <div className={css.logo}>
        <Image
          src="/sheeper-text.png"
          alt="Logo da sua empresa"
          width={158}
          height={37}
          className={css.logo}
        />

        {/* <Image src="/sheeper.png" alt="Logo da sua empresa" width={150} height={50} /> */}
      </div>
      <div className={css.navbar}>
        <Link className={css.navitem} href="#about_section">
          About
        </Link>
        <Link className={css.navitem} href="#showcase_section">
          How it works
        </Link>
        <Link className={css.navitem} href="#footer">
          Contacts
        </Link>
      </div>
      <div className={css.loginContainer}>
        <span className={css.partner}>Are you a already a partner? <Link href={"https://sheeperbusiness.app/login"} className={css.login}>Login here</Link></span>
      </div>
    </nav>
  );
}
