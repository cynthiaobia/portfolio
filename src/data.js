
import lightMode from './img/tic-tac-toe/tic-tac-toe-01.png';
import darkMode from './img/tic-tac-toe/tic-tac-toe-02.png';
import barbieMode from './img/tic-tac-toe/tic-tac-toe-03.png';

import cb01 from './img/archives/cb01.png';
import cb02 from './img/archives/cb02.png';
import cb03 from './img/archives/cb03.png';
import cb04 from './img/archives/cb04.png';
import cb05 from './img/archives/cb05.png';
import cb06 from './img/archives/cb06.png';
import cb07 from './img/archives/cb07.png';
import cb08 from './img/archives/cb08.png';
import cb09 from './img/archives/cb09.png';

import OOP from './img/OOP.png'

// * ABOUT COMPONENT

// BIO

export const bio = `
Enthusiastic about technology and driven by a passion for coding, I'm a self-taught web developer with a strong background in HTML and CSS, which has paved my path into full-stack development. I've had the privilege of working on a range of UI/UX projects, refining my skills in creating seamless user experiences and captivating designs. Proficient in object-oriented programming languages like Python and C++, I excel in both front-end and back-end development. My tech journey extends beyond coding – I am well-versed in technologies such as MongoDB, React, Express, and Node.js, which allows me to craft robust and efficient web applications that bridge user needs and technical capabilities. In addition to my development proficiency, I bring hands-on experience in DevOps practices. I've successfully built and managed CI/CD pipelines, leveraging DevOps tools to ensure the smooth deployment of software projects. This experience has provided me with a holistic view of the development process, from initial design to final deployment. I'm excited about the potential to leverage my skills to contribute to impactful software systems. Feel free to connect with me to discuss how I can bring value to your projects or collaborate on opportunities that align with my expertise.
`

// EXPERIENCE
export const experience = [
  {
    id: 1,
    company: 'Per Scholas',
    role: 'Software Engineering Training Candidate',
    location: 'Chicago, IL',
    date: 'Jun 2023 - Present',
    description: [
      'A 15-week Software Engineering course sponsored by companies such as Comcast and Google',
      'Dives deep into every aspect of software engineering including computer science, React, Node, design patterns & system architecture, and more',
      'This curriculum extensively covers MERN stack technologies'
    ]
  },

  {
    id: 2,
    company: 'DRW',
    role: 'DevOps Engineer',
    location: 'Chicago, IL',
    date: 'May 2022 - Dec 2022',
    description: [
      'Cooperated with teammates to implement blue/green deployment strategies with Kubernetes to reduce downtime between development and production environments',

      'Utilized CI/CD tools to build pipelines through TeamCity and Concourse, manage images in Docker and Harbor registries, and maintain source code via Git and GitHub',

      'Collaborated with team managers to improve team productivity by researching and providing feedback on trending technology topics and skills for future company-provided learning courses and modules'
    ]
  },

  {
    id: 3,
    company: 'Teleperformance',
    role: 'Technical Support Representative',
    location: 'Warren, MI',
    date: 'Sep 2020 - Apr 2022',
    description: [
      'Managed 50+ incoming external customer inquiries daily to provide technical support for OnStar and General Motors Connected Services such as WiFi, navigation, in-vehicle apps, and bluetooth',
      'Identified and prioritized subscribers’ issues by asking probing questions and escalating to department lead contact for resolution when appropriate ',
      'Troubleshooted, tested, triaged, and resolved subscriber issues effectively and efficiently, resulting in consistently high customer satisfaction ratings of 80% and above in post-service surveys'
    ]
  },

  {
    id: 4,
    company: 'MSU Federal Credit Union',
    role: 'User Interface Design Intern',
    location: 'East Lansing, MI',
    date: 'May 2017 - Aug 2017',
    description: [
      'Performed interface inventories to establish a dynamic style library for ongoing reference and utilization',
      'Developed user workflows, prototypes, wireframes, and finalized designs for company forms, ensuring efficient and intuitive user experiences',
      'Employed atomic design principles and pattern library concepts to streamline existing styles and code, resulting in improved efficiency and consistency'
    ]
  },

  {
    id: 5,
    company: 'Michigan State University',
    role: 'Python and Math Summer Camp Teaching Assistant',
    location: 'East Lansing, MI',
    date: 'Jun 2016 - Jul 2016',
    description: [
      'Provided supervision and guidance to students in grades 4-6 during summer camp sessions',
      'Assisted in the instruction of Mathematics and Python language programming courses, supporting students in their learning journey',
      'Contributed to the preparation and organization of learning activities and assignments in classroom and lab settings'
    ]
  }
]

// EDUCATION
export const education = [
  {
    id: 1,
    school: 'Per Scholas',
    date: 'Jun 2023 - Sep 2023',
    field: 'Software Engineering',
    courses: [
      'HTML5/CSS3 & JavaScript', 'DOM Manipulation', 'MERN Stack', 'MVC', 'CRUD', 'REST API'
    ]
  },
  
  {
    id: 2,
    school: 'Michigan State University',
    date: 'Aug 2013 - Dec 2017',
    field: 'Computational Mathematics',
    courses: [
      'CSE 231: Introduction to Programming I',
      'CSE 232: Introduction to Programming II',
      'CSE 260: Discrete Structures in Computer Science',
      'CSE 320: Computer Organization and Architecture',
      'CSE 335: Object-Oriented Software Development'
    ]
  }
]

// SKILLS
export const skills = [
  'HTML', 'CSS', 'JavaScript', 'C++', 'Python', 'React', 'Mongo DB', 'Express.js', 'Node.js', 'DevOps', 'Prototyping and Wireframng', 'Data Structures and Algorithms'
]


// * WORK COMPONENT 
// PROJECTS
export const projects = [
  
  // TIC TAC TOE
  {
    id: 1,
    title: 'Tic Tac Toe',
    img: [lightMode, darkMode, barbieMode],
    description: `For this project I re-created the classic Tic Tac Toe game in a 2-player format. The inspiration for creating this game was a class assignment that pushed me to craft an enthralling gaming experience using HTML, CSS, and pure JavaScript. The objective was to meet specific requirements, including a two-player mode, win and lose states, continuous gameplay, and the ability to play multiple rounds. I was able to accomplish this by providing an option to reset the board after each round. In addition, I also included UI features such as interactive real-time alerts and theme customization.`,
    link: 'https://github.com/cynthiaobia/mod-1-game'
  },

  {
    id: 2,
    title: 'Object-Oriented Software Development (CSE 335)',
    img: [OOP],
    description: `In this course, I was introduced to the realm of object-oriented software development in C++, with a strong emphasis on the complex world of design considerations such as reliability, reusability, maintainability, and adaptability. Throughout the journey, I acquired the skills to apply object-oriented design techniques to effectively address these concerns. The course stressed the importance of meticulously modeling and analyzing designs before transitioning to actual implementation. The curriculum encompassed various implementation techniques, design heuristics, and established practices renowned for infusing rigor, repeatability, and manageability into the software development process. Through programming and design projects, I had the opportunity to put these methods into practice within real-world scenarios. However, the core of the course lay in the art of design itself, uncovering the reality that design predicaments are rarely clear-cut and often necessitate careful consideration of trade-offs and diverse, valid solutions. The instructor played a pivotal role in fostering an environment where we could confidently engage with intricate design issues and receive consistent, valuable feedback on our choices. As a student, active participation and thoughtful responses to these discussions were integral to making the most of this enriching learning experience.`,
    link: 'https://github.com/cynthiaobia/335proj02'
  },

  // ARCHIVES
  {
    id: 3,
    title: 'Archives 2008- 2010',
    img: [cb01, cb02, cb03, cb04, cb05, cb06, cb07, cb08, cb09],
    description: `Hosted by Create Blog, this project showcases a progression of my graphic design and UI/UX skils from a grass roots, hobbyist aspect. These are validated website templates created with HTML and CSS that are no longer maintained. The programs I used for my designs and development are Adobe Photoshop, Illustrator, Dreamweaver, ImageReady, and Notepad. For each template I tested for browser and resolution compatibility.  My 'Flower Color Burst' template is one of the most favorited website templates of all time on Create Blog.`,
    link: 'https://cynthiachioma.createblog.com/layouts/'
  }
]