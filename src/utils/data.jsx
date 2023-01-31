import html from '../assets/images/svgSkills/html.svg';
import sass from '../assets/images/svgSkills/sass.svg';
import css from '../assets/images/svgSkills/css.svg';
import node from '../assets/images/svgSkills/Vector.svg';
import js from '../assets/images/svgSkills/js.svg';
import mongo from '../assets/images/svgSkills/mongo.svg';
import firebase from '../assets/images/svgSkills/firebase.svg';
import git from '../assets/images/svgSkills/git.svg';
import materialUI from '../assets/images/svgSkills/materialUI.svg';
import mySQL from '../assets/images/svgSkills/mySql.svg';
import express from '../assets/images/svgSkills/express.svg';
import ejs from '../assets/images/svgSkills/ejs.svg';
import bootstrap from '../assets/images/svgSkills/bootstrap.svg';
import react from '../assets/images/svgSkills/react.svg';
import redux from '../assets/images/svgSkills/redux.svg';
import sqlite from '../assets/images/svgSkills/sqlite.svg';
import expo from '../assets/images/svgSkills/expo-1.svg';
import docker from '../assets/images/svgSkills/docker.svg';

import eshop from '../assets/images/portfolio/Eshop.png';
import portfolioImg from '../assets/images/portfolio/portfolio.png';
import recipes from '../assets/images/portfolio/recipes.png';
import appInventory from '../assets/images/portfolio/inventoryapp.png';
import devsafio from '../assets/images/portfolio/devsafio.png';

export const portfolio = [
  {
    id: 1,
    name: 'Inventory mobile app',
    description:
      'React native project, managing local data and firebase auth, using expo',
    skills: ['React', 'Redux', 'Expo', 'Sqlite'],
    img: `${appInventory}`,
    web: 'https://github.com/peladno/inventory-reactNativeApp',
    github: 'https://github.com/peladno/inventory-reactNativeApp',
  },
  {
    id: 2,
    name: 'Recipe generator',
    description:
      'Second project, for my class of JavaScript, Using almost all Vanilla JS and a bit of Bootstrap',
    skills: ['HTML', 'CSS', 'Sass', 'JavaScript', 'Bootstrap'],
    img: `${recipes}`,
    web: 'https://peladno.github.io/JS28160JavierPerez/',
    github: 'https://github.com/peladno/JS28160JavierPerez',
  },
  {
    id: 3,
    name: 'E-commerce',
    description:
      'Project using React to the frontend, Node js (Express) for the backend and MongoDb as database',
    skills: [
      'CSS',
      'React',
      'MongoDB',
      'MaterialUI',
      'EJS',
      'Express',
      'NodeJS',
    ],
    img: `${eshop}`,
    web: 'https://eshop-project.onrender.com',
    github: 'https://github.com/peladno/eshop-project',
  },
  {
    id: 4,
    name: 'DevSafio',
    description:
      "Project for the company 'DevSafio', using React at the front end, Node js at the backend and Sql as database",
    skills: ['React', 'Docker'],
    img: `${devsafio}`,
    github: 'https://github.com/dlab-team/c6-frontend',
  },
  {
    id: 5,
    name: 'Portfolio',
    description: 'This portfolio',
    skills: ['HTML', 'CSS', 'Sass', 'React', 'NodeJS', 'Express'],
    img: `${portfolioImg}`,
    we: 'https://portfoliojavierperez.web.app/',
    github: 'https://github.com/peladno/portfolio',
  },
];

export const skills = [
  {
    name: 'HTML',
    img: `${html}`,
  },
  {
    name: 'CSS',
    img: `${css}`,
  },
  {
    name: 'JavaScript',
    img: `${js}`,
  },
  {
    name: 'React',
    img: `${react}`,
  },
  {
    name: 'NodeJS',
    img: `${node}`,
  },
  {
    name: 'Express',
    img: `${express}`,
  },
  {
    name: 'MongoDB',
    img: `${mongo}`,
  },
  {
    name: 'Git',
    img: `${git}`,
  },
  {
    name: 'Sass',
    img: `${sass}`,
  },
  {
    name: 'Bootstrap',
    img: `${bootstrap}`,
  },
  {
    name: 'EJS',
    img: `${ejs}`,
  },
  {
    name: 'Firebase',
    img: `${firebase}`,
  },
  {
    name: 'MaterialUI',
    img: `${materialUI}`,
  },
  {
    name: 'MySQL',
    img: `${mySQL}`,
  },
  {
    name: 'Sqlite',
    img: `${sqlite}`,
  },
  {
    name: 'Expo',
    img: `${expo}`,
  },
  {
    name: 'Redux',
    img: `${redux}`,
  },
  { name: 'Docker', img: `${docker}` },
];

export const certificates = [
  {
    name: 'Web developer',
    credential_id: '61ea1117c4fb9f0068cfeedd',
    url: 'https://www.coderhouse.cl/certificados/61ea1117c4fb9f0068cfeedd?lang=en',
  },
  {
    name: 'JavaScript',
    credential_id: '625c73a7e3d8ac00241d5fcf',
    url: 'https://www.coderhouse.cl/certificados/625c73a7e3d8ac00241d5fcf?lang=en',
  },
  {
    name: 'React JS',
    credential_id: '62985811e77324001ad49bc5',
    url: 'https://www.coderhouse.cl/certificados/62985811e77324001ad49bc5?lang=en',
  },
];
