import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar-logo">
          <a href="/">AnSh KaUsHaL</a>
        </div>
        <ul className="navbar-menu">
          <li>
           <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
