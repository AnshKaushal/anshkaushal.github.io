import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function Home({data}) {
  const handleImageClick = (src) => {
    window.open(src, "_blank");
  };
  return (
    <div>
      <Head>
        <title>PeaceTure Photography</title>
        <meta
          name="description"
          content="The home page for our website PeaceTure"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://picsum.photos/200/200" />
      </Head>
      <main className={styles.main}>
        <div className={styles.logo}>
          <h1>PeaceTure</h1>
          <p>The Essence of Photography</p>
          <p style={{ fontSize: "1.4rem" }}>
            We are professional photographers who like to show people, the
            world, through our lenses!
          </p>
        </div>
        <div className={styles.logoContent}>
          <Image
            src={"https://picsum.photos/1920/1080?random=44"}
            width={640}
            height={320}
            alt="Nice"
          />
          <p>It's an essence to click beautiful photographs!</p>
        </div>
      </main>
      <main className={styles.main}>
      <div className={styles.logoContent}>
          <Image
            src={"https://picsum.photos/1920/1080?random=372"}
            width={640}
            height={320}
            alt="Nice"
          />
          <p>Premium photoshoots that define elegence...</p>
        </div>
        <div className={styles.logo}>
          <h1>Photography</h1>
          <p>At the Finest</p>
          <p style={{ fontSize: "1.4rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            cupiditate quas tenetur veritatis corrupti! Tempora ad id at
            consequuntur harum!
          </p>
        </div>
      </main>
      <h1 className={styles.wrapper}>
          Our Collection Of Great Photographs
        </h1>
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
        {data?.map((ev) => (
            <div className={styles.slide} key={ev.id}>
              <Image
                key={ev.id}
                src={ev.src}
                alt={ev.id}
                className={styles.image}
                width={640}
                height={360}
                onClick={() => handleImageClick(ev.src)}
              />
            </div>
          ))}
        </div>
      </div>
      <h1 style={{ textAlign: "center", textShadow:"0 0 5px #000", color:"#efefef" }}>
        For More, Visit these links below! <br/>
        Fun-tip : hover on these links
      </h1>
      <div className={styles.links}>
        <button>
        <Link href="/about" className={styles.link}>
          About us
        </Link>
        </button>
       <button>
       <Link href="/contact" className={styles.link}>
          Contact us
        </Link>
       </button>
        <button>
        <Link href="/posts" className={styles.link}>
          Latest Posts
        </Link>
        </button>
        <button>
        <Link href="/fun-tools" className={styles.link}>
          Fun Tools
        </Link>
        </button>
      </div>
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  const { images } = await import("../data/images.json");
  return {
    props: {
      data: images,
    },
  };
}