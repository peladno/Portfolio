import html from "../../public/svgSkills/html.svg";
import sass from "../../public/svgSkills/sass.svg";
import css from "../../public/svgSkills/css.svg";
import node from "../../public/svgSkills/Vector.svg";
import js from "../../public/svgSkills/js.svg";
import mongo from "../../public/svgSkills/mongo.svg";
import firebase from "../../public/svgSkills/firebase.svg";
import git from "../../public/svgSkills/git.svg";
import materialUI from "../../public/svgSkills/materialUI.svg";
import mySQL from "../../public/svgSkills/mySql.svg";
import express from "../../public/svgSkills/express.svg";
import ejs from "../../public/svgSkills/ejs.svg";
import bootstrap from "../../public/svgSkills/bootstrap.svg";
import react from "../../public/svgSkills/react.svg";

import eshop from "../../public/portfolio/eshop.webp"
import challenges from "../../public/portfolio/challenge.webp"
import clubarduino from "../../public/portfolio/clubarduino.webp"
import portfolioImg from "../../public/portfolio/portfolio.webp"
import recipes from "../../public/portfolio/recipes.webp"

export const portfolio = [
  {
    id: 1,
    name: "Club Arduino",
    description:
      "First project made for my class of web development. Simple static website for a existing club",
    skills: ["HTML", "Bootstrap", "CSS", "Sass"],
    img: `${clubarduino}`,
    web: "https://peladno.github.io/club-arduino/index.html",
    github: "https://github.com/peladno/club-arduino",
  },
  {
    id: 2,
    name: "Recipe generator",
    description:
      "Second project, for my class of JavaScript, Using almost all Vanilla JS and a bit of Bootstrap",
    skills: ["HTML", "CSS", "Sass", "JavaScript", "Bootstrap"],
    img: `${recipes}`,
    web: "https://peladno.github.io/JS28160JavierPerez/",
    github: "https://github.com/peladno/JS28160JavierPerez",
  },
  {
    id: 3,
    name: "E-commerce",
    description:
      "Third project for my class of React JS, using Firebase as a database (just to alocate products infomation)",
    skills: ["HTML", "CSS", "React", "Firebase", "MaterialUI"],
    img: `${eshop}`,
    web: "https://javierperezreact31140.web.app/",
    github: "https://github.com/peladno/JavierPerezReact31140",
  },
  {
    id: 4,
    name: "BackEnd challenges",
    description: "All the challenges I made for my class of BackEnd",
    skills: ["HTML", "CSS", "NodeJS", "Express", "MongoDB", "MySQL", "EJS"],
    img: `${challenges}`,
    github: "https://github.com/peladno/backendExpress",
  },
  {
    id: 5,
    name: "Portfolio",
    description: "This portfolio",
    skills: ["HTML", "CSS", "Sass", "React", "NodeJS", "Express"],
    img: `${portfolioImg}`,
    github: "https://github.com/peladno/portfolio",
  },
];

export const skills = [
  {
    name: "HTML",
    img: `${html}`,
  },
  {
    name: "CSS",
    img: `${css}`,
  },
  {
    name: "JavaScript",
    img: `${js}`,
  },
  {
    name: "React",
    img: `${react}`,
  },
  {
    name: "NodeJS",
    img: `${node}`,
  },
  {
    name: "Express",
    img: `${express}`,
  },
  {
    name: "MongoDB",
    img: `${mongo}`,
  },
  {
    name: "Git",
    img: `${git}`,
  },
  {
    name: "Sass",
    img: `${sass}`,
  },
  {
    name: "Bootstrap",
    img: `${bootstrap}`,
  },
  {
    name: "EJS",
    img: `${ejs}`,
  },
  {
    name: "Firebase",
    img: `${firebase}`,
  },
  {
    name: "MaterialUI",
    img: `${materialUI}`,
  },
  {
    name: "MySQL",
    img: `${mySQL}`,
  },
];

export const certificates = [
  {
    name: "Web developer",
    credential_id: "61ea1117c4fb9f0068cfeedd",
    url: "https://www.coderhouse.cl/certificados/61ea1117c4fb9f0068cfeedd?lang=en",
  },
  {
    name: "JavaScript",
    credential_id: "625c73a7e3d8ac00241d5fcf",
    url: "https://www.coderhouse.cl/certificados/625c73a7e3d8ac00241d5fcf?lang=en",
  },
  {
    name: "React JS",
    credential_id: "62985811e77324001ad49bc5",
    url: "https://www.coderhouse.cl/certificados/62985811e77324001ad49bc5?lang=en",
  },
];
