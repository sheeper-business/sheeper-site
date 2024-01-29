import React from "react";
import css from "./home.module.css";
import Image from "next/image";
import "@fontsource/raleway";

export default function Home() {
  return (
    <div className={css.host}>
      <section className={css.container}>
        <div className={css.textContent}>
          <p className={css.descLogin}>
            Welcome to Sheeper! Your Gateway to Unbeatable Deals! Where
            incredible deals await you at every turn. At Sheeper, we are on a
            mission to save you time and money.
          </p>
        </div>
        <div className={css.content}>
          <Image
            className={css.image}
            src="/login.jpeg"
            alt="Login"
            width={300}
            height={600}
          />
        </div>
      </section>
      <section className={css.container}>
        <div className={css.secondcontent}>
          <Image
            className={css.image}
            src="/home.jpeg"
            alt="homepage"
            width={300}
            height={600}
          />
          <Image
            className={css.image}
            src="/deal.jpeg"
            alt="deals"
            width={300}
            height={600}
          />
        </div>
        <div className={css.textContent}>
          <p className={css.descLogin}>
            Discover unbeatable deals and endless excitement at Sheeper! Explore
            curated collections on our vibrant homepage and dive into
            jaw-dropping discounts on our Deals Page. Sheeper - where you will
            find exclusive food deals. Download now and let the savings begin!
          </p>
        </div>
      </section>
    </div>
  );
}
