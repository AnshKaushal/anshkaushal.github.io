import React from "react";

export default function projects() {
  return (
    <>
      <h1 style={{ marginTop: "5rem", textAlign: "center" }}>
        Selected Projects That I Have Worked Upon
      </h1>
      <div class="projects">
        <div class="project">
          <img src="/images/project1.png" alt="Project 1" />
          <h2>Peacture Photography</h2>
          <p>A photo sharing platform made with Nextjs</p>
          <a href="#" class="btn" target="_blank">
            Project Link
          </a>
        </div>
        <div class="project">
          <img src="/images/project2.png" alt="Project 2" />
          <h2>&lt;Blog By Ansh/&gt;</h2>
          <p>A developer's blog made purely with Nextjs</p>
          <a href="https://toogood.netlify.app" class="btn" target="_blank">
            Project Link
          </a>
        </div>
        <div class="project">
          <img src="/images/project3.png" alt="Project 2" />
          <h2>Detect Keypress</h2>
          <p>
            Beginner Javascript project that detects which key you pressed on
            the keyboard.
          </p>
          <a
            href="https://anshkaushal.github.io/detect-keypress"
            class="btn"
            target="_blank"
          >
            Project Link
          </a>
        </div>
        <div class="project">
          <img src="/images/project4.png" alt="Project 2" />
          <h2>Particle Flow</h2>
          <p>Explosions made with Js and Css. Click the screen to trigger</p>
          <a
            href="https://anshkaushal.github.io/warp3"
            class="btn"
            target="_blank"
          >
            Project Link
          </a>
        </div>
        <div class="project">
          <img src="/images/project5.png" alt="Project 2" />
          <h2>Dad Jokes</h2>
          <p>
            Using Javasript Api functionality, this app fetches random dad jokes
          </p>
          <a
            href="https://anshkaushal.github.io/dadjokes"
            class="btn"
            target="_blank"
          >
            Project Link
          </a>
        </div>
        <div class="project">
          <video autoPlay loop muted>
            <source src="/images/project6.mp4" type="video/mp4" />
          </video>
          <h2 style={{ marginTop: "1rem" }}>First car on Blender</h2>
          <p>
            This is my first project on blender using basic knowledge (kinda
            easy)
          </p>
          <a href="/images/firstcar.blend" class="btn" download>
            Download
          </a>
        </div>
      </div>
      <h1 style={{ margin: "3rem auto", textAlign: "center" }}>
        And many more...
      </h1>
      <a
        href="/contact"
        class="btn"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "170px",
          margin: "0 auto",
        }}
      >
        Contact me
      </a>
    </>
  );
}
