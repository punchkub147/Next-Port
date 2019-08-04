import { action, thunk } from "easy-peasy";
import {
  faBirthdayCake,
  faMapMarkerAlt,
  faEnvelope,
  faFileImage,
  faFile
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default {
  profileData: {
    contract: [
      {
        icon: faMapMarkerAlt,
        text:
          "91/84 pruksa villa lumlooka Rd. klong 7 Khwaeng lumlooka Khet lumlooka Pathumthani 12150"
      },
      {
        icon: faBirthdayCake,
        text: "23 yo"
      },
      {
        icon: faEnvelope,
        text: "punchkub147@gmail.com"
      },
      {
        icon: faFile,
        text: "Resume",
        link: "https://github.com/punchkub147"
      },
      {
        icon: faFileImage,
        text: "Portfolio",
        link:
          "https://drive.google.com/file/d/1iFISiWeWbAi-m5QEayAnU3JssF8fmIqB/view?usp=sharing"
      },
      {
        icon: faGithub,
        text: "punchkub147",
        link: "https://github.com/punchkub147"
      },
      {
        icon: faLinkedin,
        text: "Linkedin"
      }
    ]
  },
  skillsData: [
    {
      name: "Frontend",
      level: "Pro",
      items: ["React Hook", "Redux", "Javascript", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      name: "Frontend",
      level: "Learning",

      items: ["Jest", "NextJS", "Vue"]
    },
    {
      name: "Backend",
      items: ["NodeJS", "ExpressJS", "MySQL", "Sequelize", "PHP"]
    },
    {
      name: "Design",
      items: ["Photoshop", "Illustrator", "Adobe XD", "Figma"]
    },
    {
      name: "Management",
      items: ["Git", "Trello", "Linux cmd"]
    }
  ],
  interesData: [
    {
      name: "Design",
      items: ["Drawing", "Doodle", "UI"]
    },
    {
      name: "Investing",
      items: ["Option", "Forex"]
    }
  ],

  worksData: [
    {
      locationName: "Buzzfreeze Solutions Co., Ltd.",
      link: "http://buzzfreeze.com/web/",
      time: "2018 - present",
      position: "Fullstack Developer",
      workDetail:
        "Open the world of backend with NodeJS, Sequelize and Experience of React Hooks, React Native",
      highlights: [
        "Design & Develop a Stock Inventories Dashboard",
        <>
          My BMW Rewards{" "}
          <a href="https://mybmwreward.com" target="_blank">
            User
          </a>
          {" & "}
          <a href="https://mybmwreward.com" target="_blank">
            Admin
          </a>
        </>,

        <>
          LANEXANG Tourism{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.lanxangapp&hl=en_US"
            target="_blank"
          >
            Android
          </a>
          {" & "}
          <a
            href="https://apps.apple.com/ar/app/lanexang-tourism/id1448354702"
            target="_blank"
          >
            IOS
          </a>
        </>,
        "Develop Logistic Algorithm"
      ]
    }
  ],
  educationsData: [
    {
      locationName: "Silpakorn University",
      link: "https://ict.su.ac.th/",
      time: "2014 - 2017",
      position: "ICT Web & Interactive media Design",
      workDetail: "",
      highlights: [
        "Second-class Honors GPA 3.39",
        <>
          <a
            href="http://ictsilpakorn.com/im12/comeraam/project_detail.php?id=13570110"
            target="_blank"
          >
            Final Project
          </a>{" "}
          Design & Develop
        </>
      ]
    }
  ]
};
