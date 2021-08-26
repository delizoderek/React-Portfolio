/* props object
    imgLink - String
    altText - String
    projectName - String
    tech - Array
    links - Array of objects {
        link - string
        title - string
    }
 */

const projectList = [
    {
        imgLink: './assets/media/SiteContent/battle-brands_entirepage.gif',
        altText: 'A dragon icon contained within a box that has buttons for Petting, Feeding, and Playing',
        projectName: 'Battle Brands',
        tech: ["HTML"," CSS"," JavaScript"," Express"," NodeJs"," SQL"," Git"],
        links: [
            {
                title: 'Deployed Application',
                link: 'https://battle-brands.herokuapp.com',
            },
            {
                title: 'Source Code',
                link: 'https://github.com/Atlas238/battle-brands',
            },
        ],
    },
    {
        imgLink: './assets/media/SiteContent/Games-for-You_Thumbnail.png',
        altText: 'A black and red themed webpage, with an image of a women standing in front of a firy backdrop',
        projectName: 'Games for You',
        tech: ["HTML","CSS","JavaScript","Git","RAWG API","Board Game Atlas API"],
        links: [
            {
                title: 'Deployed Application',
                link: 'https://delizoderek.github.io/Games-for-you/',
            },
            {
                title: 'Source Code',
                link: 'https://delizoderek.github.io/Games-for-you/',
            },
        ],
    },
    {
        imgLink: './assets/media/SiteContent/Budget-Tracker-PWA.png',
        altText: 'Image of a graph that tracks the balance of an account',
        projectName: 'PWA Budget Tracker',
        tech: ["PWA","MongoDb","NodeJs","Javascript"],
        links: [
            {
                title: 'Deployed Application',
                link: 'https://dd-budget-pwa.herokuapp.com/',
            },
            {
                title: 'Source Code',
                link: 'https://github.com/delizoderek/progressive-budget',
            },
        ],
    },
    {
        imgLink: './assets/media/SiteContent/team_generator.png',
        altText: 'A group of cards with headings that say engineer, manager,and intern',
        projectName: 'Team Profile Generator',
        tech: ["NodeJs","Javascript","HTML","CSS"],
        links: [
            {
                title: 'Video Demo',
                link: 'https://www.youtube.com/watch?v=PEOoQzEkoWY',
            },
            {
                title: 'Source Code',
                link: 'https://github.com/delizoderek/team-generator',
            },
        ],
    },
    {
        imgLink: './assets/media/SiteContent/employee-management-system.png',
        altText: 'Image of white text with a black background',
        projectName: 'Employee Management System',
        tech: ["NodeJs","Javascript"],
        links: [
            {
                title: 'Video Demo',
                link: 'https://youtu.be/LmW_7BLclss',
            },
            {
                title: 'Source Code',
                link: 'https://github.com/delizoderek/employee-management-system',
            },
        ],
    }

];

export default projectList