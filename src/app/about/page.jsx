import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>About Agency</h2>
        <h1>
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission we're in world's Our
          Special Team best consulting & finance solutuion provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of expericence</p>
          </div>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of expericence</p>
          </div>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of expericence</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/about.png" fill alt="picture of the author" />
      </div>
    </div>
  );
};

export default AboutPage;
