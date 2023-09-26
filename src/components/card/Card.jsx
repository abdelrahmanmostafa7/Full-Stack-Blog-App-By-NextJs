import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2023</span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            excepturi.
          </h1>
        </Link>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea sequi
          repellendus dolorem accusamus explicabo minima eum minus
          exercitationem perspiciatis reprehenderit!
        </p>
        <Link href="/">Read more</Link>
      </div>
    </div>
  );
};

export default Card;
