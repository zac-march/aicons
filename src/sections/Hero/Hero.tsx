import React from "react";
import style from "./Hero.module.css";
import Link from "../../components/Link/Link";

function Hero() {
  return (
    <section className={style.container}>
      <h1>Effortless Icon Generation at Your Fingertips</h1>
      <p>
        Create icons for your website, apps, or brand effortlessly using our
        AI-powered icon generator. Save time with a single click and enjoy
        stunning results.
      </p>
      <Link title={"Get Started"} callback={() => console.log("load page")} />
    </section>
  );
}

export default Hero;
