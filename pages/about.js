import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - PeaceTure</title>
        <meta
          name="description"
          content="The home page for our website PeaceTure"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <main className={styles.about}>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.para}>
          You have seen our website, what about you learn about us??
        </p>
        <h1 style={{ textShadow: "5px 5px #1d1d1d" }}>Our Team -&gt;</h1>
        <div className={styles.cards}>
          <article className={styles.card}>
            <div className={styles.tempText}><Image src={'/images/ansh.jpeg'} width={500} height={400} alt="Ansh"/></div>
            <div className={styles.cardContent}>
              <span className={styles.cardTitle}>Ansh Kaushal</span>
              <span className={styles.cardSub}>
                Web Developer, Designer & Figma expert.
              </span>
              <p className={styles.cardDesc}>
                Lorem ipsum dolor, sit amet expedita exercitationem recusandae
                aut dolor tempora aperiam itaque possimus at, cupiditate earum,
                quae repudiandae aspernatur? Labore minus soluta consequatur
                placeat.
                Lorem ipsum dolor, sit amet expedita exercitationem recusandae
                aut dolor tempora aperiam itaque possimus at, cupiditate earum,
                quae repudiandae aspernatur? Labore minus soluta consequatur
                placeat.
              </p>
            </div>
          </article>
          <article className={styles.card}>
            <div className={styles.tempText}><Image src={'/images/bhadwi.jpeg'} width={400} height={600} alt="ayushi"/></div>
            <div className={styles.cardContent}>
              <span className={styles.cardTitle}>Ayushi Pathak</span>
              <span className={styles.cardSub}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </span>
              <p className={styles.cardDesc}>
                Lorem ipsum dolor, sit amet expedita exercitationem recusandae
                aut dolor tempora aperiam itaque possimus at, cupiditate earum,
                quae repudiandae aspernatur? Labore minus soluta consequatur
                placeat.
                Lorem ipsum dolor, sit amet expedita exercitationem recusandae
                aut dolor tempora aperiam itaque possimus at, cupiditate earum,
                quae repudiandae aspernatur? Labore minus soluta consequatur
                placeat.
              </p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default About;
