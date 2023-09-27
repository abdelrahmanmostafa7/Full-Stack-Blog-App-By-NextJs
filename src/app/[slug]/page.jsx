import React from "react";
import styles from "./SinglePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            accusantium.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Abdelrahman Mostafa</span>
              <span className={styles.date}>01.05.2001</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
              unde enim suscipit nostrum, nulla nemo provident velit non
              molestiae consequuntur maxime, assumenda quidem aut veniam
              officiis. Vero nemo perferendis ratione.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
              unde enim suscipit nostrum, nulla nemo provident velit non
              molestiae consequuntur maxime, assumenda quidem aut veniam
              officiis. Vero nemo perferendis ratione.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
              unde enim suscipit nostrum, nulla nemo provident velit non
              molestiae consequuntur maxime, assumenda quidem aut veniam
              officiis. Vero nemo perferendis ratione.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
