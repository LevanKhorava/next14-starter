import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, velit
          aut doloribus officiis facere explicabo, fuga, dolores voluptatem
          earum quae iure eius quis asperiores. Dolore sint quos exercitationem
          hic iste?
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src={"/brands.png"} fill className={styles.brandImage} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.png" fill className={styles.heroImage} />
      </div>
    </div>
  );
};

export default Home;
