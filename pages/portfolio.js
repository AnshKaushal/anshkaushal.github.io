import styles from "../styles/Home.module.css";
import Image from "next/image";

const Portfolio = ({ data }) => {
  const handleImageClick = (src) => {
    window.open(src, "_blank");
  };
  return (
    <>
      {" "}
      <div className={styles.portfolio}>
        <h1>A Collection of Photos we have clicked!</h1>
      </div>
      <div className={styles.gallery}>
        {data?.map((ev) => (
          <div className={styles.galleryItem} key={ev.id}>
            <Image src={ev.src} width={1920} height={1080} alt="nice" onClick={() => handleImageClick(ev.src)}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;

export async function getStaticProps() {
  const { images } = await import("../data/images.json");
  return {
    props: {
      data: images,
    },
  };
}
