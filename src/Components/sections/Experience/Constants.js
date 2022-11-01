import leverege from "../../../assets/img/experienceAssets/Leverege.svg";
import paccar from "../../../assets/img/experienceAssets/Paccar.svg";
import digitalFutureLab from "../../../assets/img/experienceAssets/DigitalFutureLab.svg";
import capstone from "../../../assets/img/experienceAssets/CapstoneProject.jpg";
import crows from "../../../assets/img/experienceAssets/CrowGroup.jpg";
import holodome from "../../../assets/img/experienceAssets/Holodome.jpg";
import eNable from "../../../assets/img/experienceAssets/RaptorReloaded.jpg";
import battleBrands from "../../../assets/img/experienceAssets/battle-brands_interaction.gif";
import gamesForYou from "../../../assets/img/experienceAssets/GamesForYou.jpg";
import cuar from "../../../assets/img/experienceAssets/cuar.jpg";
import eagleScout from "../../../assets/img/experienceAssets/EagleScout.jpg";
import projectMindalae from "../../../assets/img/experienceAssets/ProjectMindalae.jpg";

const tech = new Map([
  ["googleCloudPlatform", { icon: "", title: "Google Cloud Platform" }],
  ["visualStudio", { icon: "", title: "Visual Studio" }],
  ["azure", { icon: "", title: "Azure" }],
  ["unity", { icon: "", title: "Unity" }],
  ["git", { icon: "", title: "Git" }],
  ["linux", { icon: "", title: "Linux" }],
  ["Web3", { icon: "", title: "Web3" }],
  ["jenkins", { icon: "", title: "Jenkins" }],
  ["python", { icon: "", title: "Python" }],
  ["verilog", { icon: "", title: "Verilog" }],
]);

const languages = new Map([
  ["cpp", { icon: "", title: "C++" }],
  ["cSharp", { icon: "", title: "C#" }],
  ["java", { icon: "", title: "Java" }],
  ["javascript", { icon: "", title: "Javascript" }],
  ["html", { icon: "", title: "HTML" }],
  ["matlab", { icon: "", title: "Matlab" }],
  ["python", { icon: "", title: "Python" }],
  ["verilog", { icon: "", title: "Verilog" }],
  ["css", { icon: "", title: "CSS" }],
  ["sql", { icon: "", title: "MySQL" }],
  ["mongoDb", { icon: "", title: "MongoDb" }],
]);

const frontendTools = new Map([
  ["react", { icon: "", title: "React" }],
  ["chai", { icon: "", title: "Chai" }],
  ["figma", { icon: "", title: "Figma" }],
  ["handlebars", { icon: "", title: "Handlebars" }],
  ["css", { icon: "", title: "CSS" }],
]);

const backendTools = new Map([
  ["nodeJs", { icon: "", title: "NodeJs" }],
  ["express", { icon: "", title: "Express" }],
  ["graphQl", { icon: "", title: "GraphQl" }],
  ["elasticSearch", { icon: "", title: "Elastic Search" }],
  ["sql", { icon: "", title: "MySQL" }],
  ["mongoDb", { icon: "", title: "MongoDb" }],
  ["postgres", { icon: "", title: "Postgres" }],
  ["redis", { icon: "", title: "Redis" }],
]);

const skills = [
  ["Languages", languages],
  ["Frontend Tools", frontendTools],
  ["Backend Tools", backendTools],
  ["Technologies", tech],
];

const professionalExperience = [
  {
    title: "Leverege",
    shortDescription: "Software Engineer",
    longDescription: "",
    imgUrl: leverege,
    skill: [
      "javascript",
      "html",
      "css",
      "react",
      "nodeJs",
      "redis",
      "elasticSearch",
      "postgres",
      "chai",
      "figma",
      "professional",
    ],
    inTheNews:
      "https://www.leverege.com/usecases/smart-hospital-equipment-management?c0f50b8f_page=2&c0f50bbe_page=2",
  },
  {
    title: "PACCAR",
    shortDescription: "Systems Engineer",
    longDescription: "",
    imgUrl: paccar,
    skill: ["cpp", "git", "azure", "python", "professional"],
    inTheNews: "",
  },
  {
    title: "Digital Future Lab",
    shortDescription: "Lead Designer",
    longDescription: "",
    imgUrl: digitalFutureLab,
    skill: ["git", "unity", "jira", "professional"],
    deployment: "https://store.steampowered.com/app/559250/Ghostlight_Manor/",
    moreInfo: "http://digitalfuturelab.com/process/",
    inTheNews:
      "https://www.thegeeklygrind.com/eccc-2018-coverage-digital-future-labs-intros-seed-as-a-cute-critter-booster/",
  },
  {
    title: "Project Mindalae",
    shortDescription: "Software Engineer",
    longDescription: "",
    imgUrl: projectMindalae,
    skill: ["git", "javascript", "html", "css", "contract"],
    deployment: "https://projectmindalae.com",
    github: "https://github.com/SConej0/ProjectMindalae",
  },
  {
    title: "Battle Brands",
    shortDescription: "Full Stack Developer",
    longDescription: "",
    imgUrl: battleBrands,
    skill: ["git", "express", "mySql", "javascript", "html", "css", "handlebars", "project"],
    deployment: "https://battle-brands.herokuapp.com/",
    github: "https://github.com/Atlas238/battle-brands",
  },
  {
    title: "Games for You",
    shortDescription: "Full Stack Developer",
    longDescription: "Worked in a team of 3 ",
    imgUrl: gamesForYou,
    skill: ["git", "html", "css", "javascript", "project"],
    deployment: "https://delizoderek.github.io/Games-for-you/",
    github: "https://github.com/delizoderek/Games-for-you/",
  },
  {
    title: "Capstone Project",
    shortDescription: "Software & Hardware",
    longDescription: "Led a team of three to build a glove that assists stroke patients in their rehabilitation exercises. Designed a Printed Circuit Board meeting durability, size, and weight requirements and tested components to validate functionality. Provided the system with Bluetooth capabilities by writing firmware in C for the Arduino and software in Python for a laptop.",
    imgUrl: capstone,
    skill: ["git", "arduino", "cSharp", "python", "unity", "project"],
    inTheNews: "https://www.uwb.edu/news/september-2018/stroke-capstone",
    github: "https://github.com/delizoderek/SMART-Glove",
  },
  {
    title: "CUAR",
    shortDescription: "Software Developer",
    longDescription: "Contributed to the development of a recording device used to monitor noise pollution generated from the 520 bridge. Assisted team members in building the recording software and designing the web application to interact with the recorder. Created a command line program in Python that enabled remote communication with a Raspberry Pi to schedule desired recording times.",
    imgUrl: cuar,
    skill: ["git", "arduino", "cSharp", "python", "unity", "project"],
    inTheNews: "https://www.uwb.edu/news/may-2018/noisy-bridges",
    github:
      "https://github.com/shimaabadi/cloud-based-underwater-acoustic-recorder",
  },
  {
    title: "Localizing Crow Vocalizations",
    shortDescription: "MATLAB Developer",
    longDescription: "Worked with the Biology and Engineering departments to advance studies regarding the behavior and language of crows. Designed and built a User Interface for Biologists enabling audio analysis of crow calls using tools such as spectrograms, data tables, and location plots. Taught 2+ students how to use version control software to improve workflow and task-tracking.",
    imgUrl: crows,
    skill: ["git", "matlab", "project"],
    inTheNews: "https://www.uwb.edu/news/june-2018/research-symposium",
    github: "https://github.com/Flettd23/Crow-Localization",
  },
  {
    title: "Holodome",
    shortDescription: "Software Developer",
    longDescription: "Collaborated with two students to design, build, test, and deploy a 360-degree controller for the Holodome at the Museum of Pop Culture. Built firmware for the controller’s wireless receiver to send rotation values through serial to Unity, allowing users to interact with the 360-degree environment intuitively and in real-time.",
    imgUrl: holodome,
    skill: ["git", "arduino", "cSharp", "unity", "project"],
    moreInfo: "https://www.holodome360.com/",
  },
  {
    title: "Raptor Reloaded Manual",
    shortDescription: "Software Developer",
    longDescription: "",
    imgUrl: eNable,
    skill: ["git", "vuforia", "cSharp", "unity", "project"],
    inTheNews:
      "http://enablingthefuture.org/2016/08/23/augmented-reality-and-e-nable/",
  },
  {
    title: "Eagle Scout Project",
    shortDescription: "Project Organizer",
    longDescription: "Lead a group of 15 volunteers to refurbish the wood on the picnic tables at Brier Park. Was responsible for coming up with the project, getting it approved by the city, working with local businesses to get materials donated, and scheduling when the project would be executed.",
    imgUrl: eagleScout,
    skill: ["project"],
    inTheNews:
      "https://mltnews.com/eagle-scout-candidate-upgrades-brier-park-picnic-tables/",
  },
];

export { skills, professionalExperience };
