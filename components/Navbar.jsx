import Link from "next/link";
import styles from "../styles/Components.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div>
      <div className={styles.topNav}>
        <Image
          alt="logo"
          src={"/images/logo-black.png"}
          width={150}
          height={60}
          onClick={() => router.push("/")}
        />
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link href="/about" passHref legacyBehavior>
                <a>About us</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio" passHref legacyBehavior>
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/submit" passHref legacyBehavior>
                <a>Submit!</a>
              </Link>
            </li>
            <li>
              <Link href="/posts" passHref legacyBehavior>
                <a>Posts</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref legacyBehavior>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
