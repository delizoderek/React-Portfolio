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
	["azure","Azure"],
  ["chai", "Chai"],
  ["cpp", "C++"],
  ["cSharp", "C#"],
	["css", "CSS"],
  ["elasticSearch", "Elastic Search"],
  ["express", "Express"],
  ["figma", "Figma"],
  ["git","Git"],
  // ["graphQl", "GraphQl"],
  ["googleCloudPlatform", "Google Cloud Platform" ],
  ["handlebars", "Handlebars"],
  ["html", "HTML"],
  ["java", "Java"],
  ["javascript", "Javascript"],
  ["jenkins","Jenkins"],
  ["matlab", "Matlab"],
  // ["mongoDb", "MongoDb"],
  ["nodeJs", "NodeJs"],
  ["postgres", "Postgres"],
  ["python","Python"],
  ["react", "React"],
  ["redis", "Redis"],
  ["mySql", "MySQL"],
  ["unity","Unity"],
	["visualStudio","Visual Studio"],
	["vuforia","Vuforia"],
	["leadership","Leadership"],
	["projectPlanning","Project Planning"],
	["vuforia","Vuforia"],
]);

const professionalExperience = [
  {
    title: "Leverege",
    shortDescription: "Software Engineer",
    longDescription: "Working to build an IoT application that will assist hospital staff members in their day-to-day work. Working with express and redis to integrate powerbi reports into the application. Creating GCP Cloud functions using Javascript to automate tasks for the QA team.",
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
			"postgres",
      "professional",
    ],
    inTheNews:
      "https://www.leverege.com/usecases/smart-hospital-equipment-management?c0f50b8f_page=2&c0f50bbe_page=2",
  },
  {
    title: "PACCAR",
    shortDescription: "Systems Engineer",
    longDescription: "Ensured the micorcontrollers for Heady and Medium Duty trucks were connected properly to support communication using J1939 and LIN. Assisted in the development of the PACCAR digital display by developing features in C++. Worked on setting up the initial architecture for PACCAR's Battery Electric Trucks",
    imgUrl: paccar,
    skill: ["cpp", "git", "azure", "jenkins", "python", "professional"],
    inTheNews: "https://www.kenworth.com/about-us/news/zero-emissions-kenworth-t680e-battery-electric-vehicle-debuts-at-2022-ces-in-las-vegas/",
  },
  {
    title: "Digital Future Lab",
    shortDescription: "Lead Designer",
    longDescription: "Managed a team of 6 using agile workflow by planning weekly sprints and creating tasks in GitLab to track project completion, documenting design processes and system specifications for Ghostlight Manor and two internal projects",
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
    longDescription: "Project Mindalae is an informational website focused on making e-commerce more accessible and feasible for the Kichwa community and BIPOC business owners to move their businesses online. The wesbite has been translated for both english and spanish readers.",
    imgUrl: projectMindalae,
    skill: ["git", "javascript", "html", "css", "contract"],
    deployment: "https://projectmindalae.com",
    github: "https://github.com/SConej0/ProjectMindalae",
  },
  {
    title: "Battle Brands",
    shortDescription: "Full Stack Developer",
    longDescription: "A Tamagotchi style application where you can collect and take care of different brands. Your brands gain experience the more you interact with them. Built using NodeJs, Express, and Handlebars",
    imgUrl: battleBrands,
    skill: ["git", "express", "mySql", "javascript", "html", "css", "handlebars", "project"],
    deployment: "https://battle-brands.herokuapp.com/",
    github: "https://github.com/Atlas238/battle-brands",
  },
  {
    title: "Games for You",
    shortDescription: "Full Stack Developer",
    longDescription: "Worked in a team of 3 to build an application that makes it easier to search for video games and board games. The application was built using HTML, CSS, Javascript, and Spectre",
    imgUrl: gamesForYou,
    skill: ["git", "html", "css", "javascript", "project"],
    deployment: "https://delizoderek.github.io/Games-for-you/",
    github: "https://github.com/delizoderek/Games-for-you/",
  },
  {
    title: "SMART Glove",
    shortDescription: "Software & Hardware",
    longDescription: "Led a team of three to build a glove that assists stroke patients in their rehabilitation exercises. Provided the system with Bluetooth capabilities by writing firmware in C for the Arduino and software in Python for a laptop.",
    imgUrl: capstone,
    skill: ["git", "arduino", "cSharp", "python", "unity", "leadership", "project"],
    inTheNews: "https://www.uwb.edu/news/september-2018/stroke-capstone",
    github: "https://github.com/delizoderek/SMART-Glove",
  },
  {
    title: "CUAR",
    shortDescription: "Software Developer",
    longDescription: "Contributed to the development of a recording device used to monitor noise pollution generated from the 520 bridge. Created a command line program in Python that enabled remote communication with a Raspberry Pi to schedule desired recording times.",
    imgUrl: cuar,
    skill: ["git", "arduino", "cSharp", "python", "unity", "project"],
    inTheNews: "https://www.uwb.edu/news/may-2018/noisy-bridges",
    github:
      "https://github.com/shimaabadi/cloud-based-underwater-acoustic-recorder",
  },
  {
    title: "Localizing Crow Vocalizations",
    shortDescription: "MATLAB Developer",
    longDescription: "Worked with the Biology and Engineering departments to advance studies regarding the behavior and language of crows. Designed and built a User Interface for Biologists enabling audio analysis of crow calls using tools such as spectrograms, data tables, and location plots.",
    imgUrl: crows,
    skill: ["git", "matlab", "project"],
    inTheNews: "https://www.uwb.edu/news/june-2018/research-symposium",
    github: "https://github.com/Flettd23/Crow-Localization",
  },
  {
    title: "Holodome",
    shortDescription: "Software Developer",
    longDescription: "Collaborated with two students to design, build, test, and deploy a 360-degree controller for the Holodome at the Museum of Pop Culture. Built firmware for the controller’s wireless receiver to send rotation values to Unity, allowing users to interact with the 360-degree environment in real-time.",
    imgUrl: holodome,
    skill: ["git", "arduino", "cSharp", "unity", "project"],
    moreInfo: "https://www.holodome360.com/",
  },
  {
    title: "Raptor Reloaded Assembly Manual",
    shortDescription: "Software Developer",
    longDescription: "Created an augmented reality android application with unity that acts as an assembly manual for the E-nable Raptor Reloaded Prosthetic Hand. Created assembly animations in Autodesk Maya to assist users in following the steps.",
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
    skill: ["projectPlanning","leadership","project"],
    inTheNews:
      "https://mltnews.com/eagle-scout-candidate-upgrades-brier-park-picnic-tables/",
  },
];

export { tech, professionalExperience };
