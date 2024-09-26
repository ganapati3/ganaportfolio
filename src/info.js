import { FaCss3Alt,FaJs,FaPhp,FaReact,FaVuejs,FaPython,FaLaptopCode, FaPlug, FaShoppingCart, FaWordpress, FaDatabase, FaMobileAlt,FaHtml5, FaNodeJs } from 'react-icons/fa';
import { DiMysql } from "react-icons/di";
import { SiExpress } from 'react-icons/si';
import { RiTailwindCssLine } from "react-icons/ri";


export const about = {
    desc: "I am a Full-Stack Developer with 2 years of experience specializing in Vue.js, React.js, Python, PHP, and Node.js. My expertise includes developing ERP systems, booking platforms, e-commerce applications, and custom WordPress plugins. I excel in creating scalable, user-friendly web applications, ensuring seamless integration and high performance.\n\n\tI have a strong track record of collaborating with clients to deliver tailored solutions that meet their unique needs. I’m dedicated to writing clean, maintainable code and staying updated with industry trends to provide the best results. Whether leading a project or contributing as part of a team, I am committed to achieving excellence in every aspect of my work.",
    services: [
          {
            service: "Web Application Development",
            icon: FaLaptopCode,
            description: "Building scalable and user-friendly applications tailored to client needs."
          },
          {
            service: "API Integration",
            icon: FaPlug,
            description: "Seamlessly connecting third-party services and enhancing functionality through robust API solutions."
          },
          {
            service: "E-commerce Solutions",
            icon: FaShoppingCart,
            description: "Developing secure and efficient online stores with payment integration and inventory management."
          },
          {
            service: "WordPress Plugin Development",
            icon: FaWordpress,
            description: "Creating custom themes and plugins, optimizing performance, and ensuring a great user experience."
          },
          {
            service: "Database Management",
            icon: FaDatabase,
            description: "Designing and managing databases for optimal data storage, retrieval, and security."
          },
          {
            service: "Responsive Design",
            icon: FaMobileAlt,
            description: "Ensuring applications are mobile-friendly and accessible across all devices."
          }
        ],
    testinomials:[
            {
              name: "Denish Patel",
              projectname: "AI Integrated Medical App (MVP)",
              testimonial: "Ganapathi developed an intuitive and efficient medical app that integrates AI to support healthcare professionals. His expertise in Vue.js and Python resulted in a user-friendly and insightful platform that exceeded expectations.",
              clientlink: "https://www.linkedin.com/in/idenish/"
            },
            {
              name: "Balaji Sala",
              projectname: "E-commerce Affiliate Marketing",
              testimonial: "Ganapathi delivered an engaging e-commerce platform tailored for affiliate marketing. His skillful use of Vue.js and Tailwind CSS created a seamless and effective product tracking experience.",
              clientlink: ""
            }
                ],
    clients: []
};

export const portfolio = [
    {
        projectname: "Dynamic Booking app",
        thumbnailurl: './assets/wpboss/wpbooking.png',
        images: ['./assets/wpboss/wpbooking.png', './assets/wpboss/wpbooking2.png', './assets/wpboss/wpbooking3.png', "./assets/wpboss/wpbooking4.png", "./assets/wpboss/wpbooking5.png", "./assets/wpboss/wpbooking6.png", "./assets/wpboss/wpbooking7.png"],
        projectdesc: 'A fully-featured booking application built with Vue.js and PHP. This app allows users to search, book, and manage reservations dynamically. It leverages modern web technologies to ensure a responsive and user-friendly experience.',
        techstack: ['Vue.js', 'PHP', 'JavaScript', 'HTML', "Tailwind CSS", "SQL"],
        livelink: '',
        status: 'In Progress',
        type: 'Full Stack Web Development (WorkPress Plugin)'
    },
    {
        projectname: "AI Integrated Medical App (MVP)",
        thumbnailurl: './assets/soapme/soapme.png',
        images: ['./assets/soapme/soapme.png', './assets/soapme/soapme2.png', './assets/soapme/soapme3.png'],
        projectdesc: 'An MVP for a medical app that integrates AI to assist healthcare professionals. Built with Vue.js and Python, this application enhances decision-making with intelligent insights and a seamless user interface.',
        techstack: ['Vue.js', 'Nuxt.js', 'JavaScript', 'HTML', "Tailwind CSS", "SQL", "Python"],
        livelink: '',
        status: 'Completed',
        type: 'Full Stack Web Development'
    },
    {
        projectname: "E-commerce Affiliate Marketing",
        thumbnailurl: './assets/mlm/mlm2.png',
        images: ['./assets/mlm/mlm.png', './assets/mlm/mlm2.png', './assets/mlm/mlm3.png', "./assets/mlm/mlm4.png", "./assets/mlm/mlm5.png"],
        projectdesc: 'A comprehensive e-commerce platform focused on affiliate marketing. Developed using Vue.js, this project showcases products with an engaging interface and allows users to track their affiliate activities effectively.',
        techstack: ['Vue.js', 'JavaScript', 'HTML', "Tailwind CSS", "SQL"],
        livelink: '',
        status: 'Completed',
        type: 'Full Stack Web Development (WorkPress Plugin)'
    },
    {
        projectname: "Upwork Chrome Extension",
        thumbnailurl: './assets/upwork/upwork.png',
        images: [],
        projectdesc: 'A powerful Chrome extension designed to enhance the Upwork experience. Built with Node.js and Express.js, this extension streamlines job searching and management for freelancers.',
        techstack: ['Node.js', 'Express.js', 'JavaScript', 'HTML', "SQL"],
        livelink: '',
        status: 'In Progress',
        type: 'Full Stack Chrome Extension'
    },
    {
        projectname: "Nxt Trends",
        thumbnailurl: './assets/nxtrends.png',
        images: [],
        projectdesc: 'A dynamic front-end application developed using React.js that showcases the latest trends. This project emphasizes responsive design and user engagement, making it an ideal platform for trend enthusiasts.',
        techstack: ['React.js', 'JavaScript', 'HTML', "CSS"],
        livelink: 'https://ganatrendz.ccbp.tech/',
        credentials: {
            username: 'rahul',
            password: 'rahul@2021'
        },
        status: 'Completed',
        type: 'Front End Development'
    },
    {
        projectname: "Nxt Watch",
        thumbnailurl: './assets/nxtwatch.png',
        images: [],
        projectdesc: 'A sleek front-end application built with React.js that provides users with a streamlined interface for exploring watch collections. It features a modern design and intuitive navigation.',
        techstack: ['React.js', 'JavaScript', 'HTML', "CSS"],
        livelink: 'https://nxtwatchgana.ccbp.tech/',
        credentials: {
            username: 'rahul',
            password: 'rahul@2021'
        },
        status: 'Completed',
        type: 'Front End Development'
    },
    {
        projectname: "Wiki Search App",
        thumbnailurl: './assets/wiki.png',
        images: [],
        projectdesc: 'A simple yet effective search application for Wikipedia articles, built with JavaScript and HTML. This project provides users with an easy way to find and explore a wealth of information online.',
        techstack: ['JavaScript', 'HTML', "CSS"],
        livelink: 'https://ganapatiwiki.ccbp.tech/',
        status: 'Completed',
        type: 'Front End Development'
    },
    {
        projectname: "Todo App",
        thumbnailurl: './assets/todo.png',
        images: [],
        projectdesc: 'A straightforward todo list application that helps users manage their tasks efficiently. Built using JavaScript and HTML, it offers a clean interface for adding, editing, and deleting tasks.',
        techstack: ['JavaScript', 'HTML', "CSS"],
        livelink: 'https://ganapatitodo.ccbp.tech/',
        status: 'Completed',
        type: 'Front End Development'
    },
    {
        projectname: "Food Munch",
        thumbnailurl: './assets/foodmunch.png',
        images: [],
        projectdesc: 'A static web application showcasing various food recipes. Built with HTML and CSS, this project highlights beautiful designs and easy navigation for food lovers.',
        techstack: ['HTML', "CSS"],
        livelink: 'https://ganapatifood.ccbp.tech',
        status: 'Completed',
        type: 'Static Web App'
    }
];


export const resume = {
    education: [
        {
            collegename: "Dr.Paulraj Engineering College",
            branch: "Electrical & Electronics Engineering",
            duration: "2022 - 2025",
            location:"Yetapaka,EG.,Ap"
        },
        {
            collegename: "Smt.B.Seetha polytechnic College",
            branch: "Electrical & Electronics Engineering",
            duration: "2019 - 2022",
            location:"Bhimavaram,WG.,Ap"
        },
        {
            collegename: "SNRRM ITI",
            branch: "Fitter",
            duration: "2016 - 2018",
            location:"Yetapaka,EG.,Ap"
        }
    ],
    experience: [
        {
            company: "Maitri Diamonds Inc.",
            role: "Full stack developer",
            duration: "Oct 2022 - Ongoing",
            location:"Surat"
        }
    ],
 skills :[
    {
        technology: 'HTML',
        icon: FaHtml5,
        percentage: 80,
        color: 'text-orange-600',
    },
    {
        technology: 'Python',
        icon: FaPython,
        percentage: 80,
        color: 'text-blue-500',
    },
    {
        technology: 'JavaScript',
        icon: FaJs,
        percentage: 90,
        color: 'text-yellow-500',
    },
    {
        technology: 'Vue.js',
        icon: FaVuejs,
        percentage: 90,
        color: 'text-green-500',
    },
    {
        technology: 'React.js',
        icon: FaReact,
        percentage: 70,
        color: 'text-blue-400',
    },
    {
        technology: 'PHP',
        icon: FaPhp,
        percentage: 80,
        color: 'text-indigo-700',
    },
    {
        technology: 'CSS',
        icon: FaCss3Alt,
        percentage: 70,
        color: 'text-blue-600',
    },
    {
        technology: 'SQL',
        icon: DiMysql,
        percentage: 70,
        color: 'text-blue-700',
     },
    {
        technology: 'Node.js',
        icon: FaNodeJs,
        percentage: 85,
        color: 'text-green-600',
    },
    {
        technology: 'Express.js',
        icon: SiExpress,
        percentage: 80,
        color: 'text-gray-800',
     },
    {
        technology: 'Tailwind CSS',
        icon: RiTailwindCssLine,
        percentage: 90,
        color: 'text-sky-800',
    },
    ]
};

export const certifications = [
    {
        name: 'React.js',
        image: "./assets/certifications/React.jpg",
        link:'https://certificates.ccbp.in/intensive/react-js?id=JJJZBXTUFE'
    },
    {
        name: 'Node.js',
        image: "./assets/certifications/nodejs.jpg",
        link:'https://certificates.ccbp.in/intensive/node-js?id=IZHVYCLRJS'
    },
    {
        name: 'Python',
        image: "./assets/certifications/pythonprogramming.jpg",
        link:'https://certificates.ccbp.in/intensive/programming-foundations?id=LZLDKVVSDW'
    },
    {
        name: 'SQL',
        image: "./assets/certifications/sql.jpg",
        link:'https://certificates.ccbp.in/intensive/introduction-to-databases?id=LUTPWSNJPG'
    },
    {
        name: 'GitHub',
        image: "./assets/certifications/git.jpg",
        link:'https://certificates.ccbp.in/intensive/developer-foundations?id=ZZOQZTTYHX'
    },
    {
        name: 'Dynamic Web App',
        image: "./assets/certifications/dynamicwebapp.jpg",
        link:'https://certificates.ccbp.in/intensive/dynamic-web-application?id=OUMURZUTAG'
    },
    {
        name: 'Static Web App',
        image: "./assets/certifications/ownstaticwebsite.jpg",
        link:'https://certificates.ccbp.in/intensive/static-website?id=NWJPXXECHN'
    },
    {
        name: 'Responsive Web App',
        image: "./assets/certifications/responsivewebsite.jpg",
        link:'https://certificates.ccbp.in/intensive/responsive-website?id=ACYILRUPLY'
    }
]
