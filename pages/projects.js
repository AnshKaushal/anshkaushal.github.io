import Image from "next/image";
import React from "react";
import Link from "next/link";
import project1 from "../public/images/project1.png";
import project2 from "../public/images/project2.png";
import project3 from "../public/images/picture3.png";
import project4 from "../public/images/project4.png";
import project5 from "../public/images/project5.png";

export default function projects() {
  return (
    <>
      <h1 style={{ marginTop: "5rem", textAlign: "center" }}>
        Selected Projects That I Have Worked Upon
      </h1>
      <div className="projects">
        <div className="project">
          <Image src={project1} alt="Project 1" height={250} priority/>
          <h2>Peacture Photography</h2>
          <p>A photo sharing platform made with Nextjs</p>
          <Link href="#" className="btn" target="_blank" rel="noreferrer">
            Project Link
          </Link>
        </div>
        <div className="project">
          <Image src={project2} alt="Project 2" height={250}/>
          <h2>&lt;Blog By Ansh/&gt;</h2>
          <p>A developer's blog made purely with Nextjs</p>
          <Link
            href="https://toogood.netlify.app"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Project Link
          </Link>
        </div>
        <div className="project">
          <img src={project3} alt="Project 3" height={250}/>
          <h2>Detect Keypress</h2>
          <p>
            Beginner Javascript project that detects which key you pressed on
            the keyboard.
          </p>
          <Link
            href="https://anshkaushal.github.io/detect-keypress"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Project Link
          </Link>
        </div>
        <div className="project">
          <Image src={project4} alt="Project 2" height={250}/>
          <h2>Particle Flow</h2>
          <p>Explosions made with Js and Css. Click the screen to trigger</p>
          <Link
            href="https://anshkaushal.github.io/warp3"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Project Link
          </Link>
        </div>
        <div className="project">
          <Image src={project5} alt="Project 2" height={250}/>
          <h2>Dad Jokes</h2>
          <p>
            Using Javasript Api functionality, this app fetches random dad jokes
          </p>
          <Link
            href="https://anshkaushal.github.io/dadjokes"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Project Link
          </Link>
        </div>
        <div className="project">
          <video autoPlay muted loop height={250}>
            <source src="/images/project6.mp4"/>
          </video>
          <h2 style={{ marginTop: "1rem" }}>First car on Blender</h2>
          <p>
            This is my first project on blender using basic knowledge (kinda
            easy)
          </p>
          <Link href="/images/firstcar.blend" className="btn" download>
            Download
          </Link>
        </div>
      </div>
      <h1 style={{ margin: "3rem auto", textAlign: "center" }}>
        And many more...
      </h1>
      <Link
        href="/contact"
        className="btn"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "170px",
          margin: "0 auto",
        }}
      >
        Contact me
      </Link>
    </>
  );
}
