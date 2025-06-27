/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ammar S S",
  title: "Hi all, I'm Ammar",
  subTitle: emoji(
    "A results-oriented Full Stack Software Engineer 🚀 with 5 years of IT experience specializing in Java development, API integration, microservices, and frameworks like Spring Boot, JSP, and JavaScript."
  ),
  resumeLink: true, // Set to true to enable resume download button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "", // Update once GitHub profile is available
  linkedin: "", // Update once LinkedIn profile is available
  gmail: "s.s.ammar@outlook.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK SOFTWARE ENGINEER WITH EXPERTISE IN JAVA DEVELOPMENT AND WEB TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Develop Java-based applications leveraging frameworks like Spring Boot for rapid and efficient development"
    ),
    emoji("⚡ Create interactive and user-friendly web applications using Liferay portal development"),
    emoji(
      "⚡ Implement frontend technologies including JavaScript, AJAX, JSP, HTML, CSS and Bootstrap"
    ),
    emoji(
      "⚡ Integrate microservices and APIs for scalable solutions"
    ),
    emoji(
      "⚡ Debug Java projects, both frontend and backend, using IDE debugging tools and techniques"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "bitbucket",
      fontAwesomeClassname: "fab fa-bitbucket"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Tamilnadu Open University",
      logo: require("./assets/images/harvardLogo.png"), // Update with appropriate logo
      subHeader: "Master of Computer Applications (MCA)",
      duration: "2023 - Present (Expected completion in 2025)",
      desc: "Currently pursuing first year of MCA degree.",
      descBullets: []
    },
    {
      schoolName: "National Engineering College",
      logo: require("./assets/images/stanfordLogo.png"), // Update with appropriate logo
      subHeader: "Bachelor of Engineering",
      duration: "Completed in 2015",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Rosemary Matric Higher Secondary School",
      logo: require("./assets/images/stanfordLogo.png"), // Update with appropriate logo
      subHeader: "Higher Secondary Education",
      duration: "Completed in 2011",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Don Bosco Matric Higher Secondary School",
      logo: require("./assets/images/stanfordLogo.png"), // Update with appropriate logo
      subHeader: "Primary Schooling",
      duration: "Completed in 2009",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Spring Boot Framework",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend Technologies (HTML, CSS, JS)",
      progressPercentage: "80%"
    },
    {
      Stack: "Liferay Portal Development",
      progressPercentage: "80%"
    },
    {
      Stack: "API Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Microservices Integration",
      progressPercentage: "75%"
    },
    {
      Stack: "Database Management (SQL, NoSQL)",
      progressPercentage: "75%"
    },
    {
      Stack: "Cloud Platforms (GCP)",
      progressPercentage: "70%"
    },
    {
      Stack: "Version Control Systems",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Software Engineer",
      company: "Capgemini",
      companylogo: require("./assets/images/facebookLogo.png"), // Update with Capgemini logo
      date: "February 2022 – Present",
      desc: "Specializing in Java development and web technologies to create efficient and scalable solutions.",
      descBullets: [
        "Leveraged Liferay portal development for creating interactive and user-friendly web applications",
        "Utilized JavaScript, AJAX, JSP and other frontend technologies to create interactive and dynamic user interfaces",
        "Proficient in using leading IDEs such as Visual Studio Code, IntelliJ IDEA, Eclipse, and Spring Tool Suite (STS)",
        "Mastered various shortcuts and productivity tools within IDEs for efficient code navigation, editing, and debugging"
      ]
    },
    {
      role: "Java Developer",
      company: "Accenture",
      companylogo: require("./assets/images/quoraLogo.png"), // Update with Accenture logo
      date: "August 2021 – February 2022",
      desc: "Developed Java-based applications, leveraging frameworks like Spring Boot for rapid and efficient development."
    },
    {
      role: "Software Engineer",
      company: "Asta Systech",
      companylogo: require("./assets/images/airbnbLogo.png"), // Update with Asta Systech logo
      date: "December 2019 – July 2021",
      desc: "Focused on Java development with expertise in debugging and project management.",
      descBullets: [
        "Demonstrated expertise in debugging Java projects, both frontend and backend, using IDE debugging tools and techniques",
        "Managed project tasks and workflows using Jira, ensuring timely completion of tickets and deliverables without escalations"
      ]
    },
    {
      role: "Non-IT Professional",
      company: "Previous Roles",
      companylogo: require("./assets/images/airbnbLogo.png"), // Update with appropriate logo
      date: "November 2015 – December 2019",
      desc: "Technical design experience in the mechanical and electrical systems domain.",
      descBullets: [
        "Utilized AutoCAD and Revit software for designing and drafting mechanical and electrical systems",
        "Created detailed drawings, layouts, and schematics for HVAC, plumbing, drainage, fire fighting equipment, and safety systems"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Specialized Skills & Tools 🛠️ "),
  subtitle:
    "Advanced tools and AI technologies that enhance my development capabilities",

  achievementsCards: [
    {
      title: "AI-Assisted Development",
      subtitle:
        "Proficient in using AI tools to enhance development workflow and productivity.",
      image: require("./assets/images/codeInLogo.webp"), // Update with appropriate image
      imageAlt: "AI Tools Logo",
      footerLink: [
        {
          name: "Github Copilot",
          url: ""
        },
        {
          name: "ChatGPT",
          url: ""
        },
        {
          name: "Meta AI & Anthropic Claude",
          url: ""
        }
      ]
    },
    {
      title: "Project Management Tools",
      subtitle:
        "Experience with various project management tools for efficient workflow and collaboration.",
      image: require("./assets/images/googleAssistantLogo.webp"), // Update with appropriate image
      imageAlt: "Project Management Tools Logo",
      footerLink: [
        {
          name: "Jira",
          url: ""
        },
        {
          name: "Confluence",
          url: ""
        },
        {
          name: "Trello, Redmine & ALM",
          url: ""
        }
      ]
    },

    {
      title: "IDEs & Development Tools",
      subtitle: "Proficient in using leading IDEs for optimized development workflows.",
      image: require("./assets/images/pwaLogo.webp"), // Update with appropriate image
      imageAlt: "IDE Logo",
      footerLink: [
        {name: "IntelliJ IDEA", url: ""},
        {name: "Eclipse", url: ""},
        {name: "Visual Studio Code", url: ""},
        {name: "Spring Tool Suite", url: ""}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // Will be updated when blogs are available
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "SHARING KNOWLEDGE AND EXPERTISE THROUGH PRESENTATIONS AND WORKSHOPS"
  ),

  talks: [
    // Will be updated when talks are available
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "SHARING INSIGHTS AND EXPERTISE IN TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // Will be updated when podcasts are available
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink: process.env.PUBLIC_URL + "/resume.pdf", // Path to resume in public folder
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in discussing potential opportunities or just want to connect? Feel free to reach out.",
  number: "+91 9751883398",
  email_address: "s.s.ammar@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
