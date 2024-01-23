import Link from "next/link";
import React from "react";
import css from "./navbar.module.css";
import sheeper from "../../../assets/sheeper.png";
import Image from "next/image";

export function NavBar() {
  return (
    <div className={css.host}>
      <div className={css.logo}>
        <Image
          src="/sheeper.png"
          alt="Logo da sua empresa"
          width={175}
          height={75}
        />
      </div>
      <div className={css.navbar}>
        <Link className={css.navitem} href="/home">
          Home
        </Link>
        <Link className={css.navitem} href="/contacts">
          Contacts
        </Link>
      </div>
    </div>
  );
}
