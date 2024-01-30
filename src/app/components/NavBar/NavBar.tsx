import Link from 'next/link';
import React from 'react';
import css from './navbar.module.css';
import sheeper from '../../../assets/sheeper.png';
import Image from 'next/image';

export function NavBar() {
  return (
    <div className={css.host}>
      <div className={css.logo}>
        <Image
          src="/logo.png"
          alt="Logo da sua empresa"
          width={100}
          height={100}
          className={css.logo}
        />

        {/* <Image src="/sheeper.png" alt="Logo da sua empresa" width={150} height={50} /> */}
      </div>
      <div className={css.navbar}>
        <Link className={css.navitem} href="/">
          Home
        </Link>
        <Link className={css.navitem} href="/contacts">
          Contacts
        </Link>
      </div>
    </div>
  );
}
