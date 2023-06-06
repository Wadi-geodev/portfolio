import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  
  git,
  docker,
  postgres,
  dddapp,
  
  drone,
  threejs,
  ddmap,
  cesium,
  django,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web GIS Developer",
    icon: web,
  },
  {
    title: "AI Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "GIS Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Postgresql",
    icon: postgres,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "cesium JS",
    icon: cesium,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Leaflet.js Developer",
    //company_name: "Starbucks",
    icon: backend,
    iconBg: "#383E56",
    //date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using Leaflet.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "AI Developer",
    //company_name: "Tesla",
    icon: backend,
    iconBg: "#E6DEDD",
    //date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining AI-based solutions for object detection, tracking, and recognition.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Utilizing machine learning techniques and frameworks, such as TensorFlow or PyTorch, to optimize models and improve accuracy.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    //company_name: "Shopify",
    icon: backend,
    iconBg: "#383E56",
    //date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js, Django and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Cesium.js Developer",
    //company_name: "Meta",
    icon: backend,
    iconBg: "#E6DEDD",
    //date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining 3D web applications using Cesium.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D mapping app",
    description:
      "3D Web-based platform that allows users to search, query, and analyse spatial data, providing a convenient and efficient solution for geospatial 3D visualization and analysis.",
    tags: [
      {
        name: "Cesium",
        color: "blue-text-gradient",
      },
      {
        name: "Postgresql",
        color: "green-text-gradient",
      },
      {
        name: "Geoserver",
        color: "pink-text-gradient",
      },
    ],
    image: dddapp,
    source_code_link: "https://github.com/wadi-sudo/cesium",
  },
  {
    name: "2D mapping app",
    description:
      "Web mapping application that enables users to search query, and analyse spatial data, providing a convenient and efficient statics about data.",
    tags: [
      {
        name: "GeoDjango",
        color: "blue-text-gradient",
      },
      {
        name: "Geoserver",
        color: "green-text-gradient",
      },
      {
        name: "Leaflet JS",
        color: "pink-text-gradient",
      },
    ],
    image: ddmap,
    source_code_link: "https://github.com/wadi-sudo/vm_ova/blob/main/link%20to%20mega",
  },
  {
    name: "Object Detection and Tracking",
    description:
      "An object detection project over drones using yolov8 completed with a deepsort multi-tracking system.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "YOLOv8",
        color: "green-text-gradient",
      },
      {
        name: "DeepSort",
        color: "pink-text-gradient",
      },
    ],
    image: drone,
    source_code_link: "https://github.com/wadi-sudo/track2023",
  },
];

export { services, technologies, experiences, testimonials, projects };
