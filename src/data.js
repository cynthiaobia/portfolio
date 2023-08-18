import i from './img/tic-tac-toe-01.png'
import j from './img/tic-tac-toe-02.png'
import k from './img/tic-tac-toe-03.png'

// * ABOUT COMPONENT

// BIO

export const bio = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Nunc faucibus a pellentesque sit amet porttitor eget. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Metus aliquam eleifend mi in nulla posuere sollicitudin. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Adipiscing bibendum est ultricies integer quis auctor elit. Orci ac auctor augue mauris augue neque gravida in fermentum. Ac turpis egestas sed tempus urna et pharetra pharetra. Nunc non blandit massa enim nec dui nunc. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.
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
      'A 15-week Software Engineering course that dives deep into every aspect of software engineering including computer science, React, Node, design patterns & system architecture, and more. The curriculum extensively covers MERN stack technologies.'
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
  },

  {
    id: 2,
    school: 'Per Scholas',
    date: 'Jun 2023 - Sep 2023',
    field: 'Software Engineering',
    courses: [
      'HTML5 & CSS3', 'JavaScript', 'DOM Manipulation', 'MERN Stack', 'MVC', 'CRUD', 'REST API'
    ]
  }
]

// SKILLS
export const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Mongo DB', 'Express.js', 'Node.js', 
]


// * WORK COMPONENT
// PROJECTS
export const projects = [
  {
    id: 1,
    name: 'Tic Tac Toe',
    img: [i, j, k],
    
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Nunc faucibus a pellentesque sit amet porttitor eget. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Metus aliquam eleifend mi in nulla posuere sollicitudin. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Adipiscing bibendum est ultricies integer quis auctor elit. Orci ac auctor augue mauris augue neque gravida in fermentum. Ac turpis egestas sed tempus urna et pharetra pharetra. Nunc non blandit massa enim nec dui nunc. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.',
    link: 'https://github.com/cynthiaobia/mod-1-game'
  },

  {
    id: 2,
    name: 'Archive 2008- 2010',
    img: [
      'https://github.com/cynthiaobia/mod-1-game/blob/main/screen-recording.gif?raw=true',
      'https://github.com/cynthiaobia/mod-1-game/blob/main/screen-recording.gif?raw=true',
      'https://github.com/cynthiaobia/mod-1-game/blob/main/screen-recording.gif?raw=true'
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Nunc faucibus a pellentesque sit amet porttitor eget. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Metus aliquam eleifend mi in nulla posuere sollicitudin. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Adipiscing bibendum est ultricies integer quis auctor elit. Orci ac auctor augue mauris augue neque gravida in fermentum. Ac turpis egestas sed tempus urna et pharetra pharetra. Nunc non blandit massa enim nec dui nunc. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.',
    link: 'https://cynthiachioma.createblog.com/layouts/'
  }
]