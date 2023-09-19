import React from "react"
import { FaProjectDiagram, FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import notesyImg from "@/public/notesy.png"
import fruvegApiImg from "@/public/FruvegApi.png"
import journalCmsImg from "@/public/JournalCMS.png"
import portfolioOld from "@/public/portfolioOld.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const

export const experiencesData = [
  {
    title: "Graduated from Sri Aurobindo Public School",
    location: "Baddi, India",
    description:
      "Having completed my high school, I had the dream to become software engineer",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Chitkara University, Baddi",
    location: "Kalujhandha, India",
    description:
      "I enrolled into the B.Tech program at Chitkara University. I'm currently in my 3rd year.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
  {
    title: "Full-stack developer",
    location: "Baddi, India",
    description:
      "As i continued my studies in college, I started making my own projects, which are helpful for me as well as others",
    icon: React.createElement(FaProjectDiagram),
    date: "2021 - present",
  },
] as const

export const projectsData = [
  {
    title: "Notesy",
    description:
      "A note-taking desktop app with features like creating, editing, deleting and searching notes. I was the full-stack developer.",
    tags: ["React", "Node.Js", "MongoDB", "Tailwind"],
    imageUrl: notesyImg,
  },
  {
    title: "FruVeg API",
    description:
      "A REST API made in Node.js. It generates random fruits and vegetables for tesing purposes. I learned how to create APIs in this project",
    tags: ["React", "Javascript", "Node.Js"],
    imageUrl: fruvegApiImg,
  },
  {
    title: "Journal CMS",
    description:
      "A CMS for my journal website. It has features like creating, editing, deleting and searching articles. I learned how to make CMS using CRUD API in this project",
    tags: ["React", "Next.js", "MySql", "Vanilla Css"],
    imageUrl: journalCmsImg,
  },
  {
    title: "Old Personal Website",
    description:
      "My personal wesbite made using React and Next.js. It has features like dark mode, responsive design and animations. I learned how to make websites using React and Next.js in this project",
    tags: ["React", "Next.js", "Node.js", "MySql"],
    imageUrl: portfolioOld,
  },
] as const

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Java",
  "C++",
  "C",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "Framer Motion",
] as const
