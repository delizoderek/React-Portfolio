import React from 'react';

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
        imgLink: '',
        altText: '',
        projectName: '',
        tech: [],
        links: [
            {
                title: '',
                link: '',
            },
        ],
    },
    {
        imgLink: '',
        altText: '',
        projectName: '',
        tech: [],
        links: [
            {
                title: '',
                link: '',
            },
        ],
    },
    {
        imgLink: '',
        altText: '',
        projectName: '',
        tech: [],
        links: [
            {
                title: '',
                link: '',
            },
        ],
    }

];

export default projectList