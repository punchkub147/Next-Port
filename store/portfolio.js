import { action, thunk } from "easy-peasy";
import moment from "moment";
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
        text: `${moment().diff(moment("30/03/1996", "DD/MM/YYYY"), "years")} yo`
      },
      {
        icon: faEnvelope,
        text: "punchkub147@gmail.com"
      },
      {
        icon: faFile,
        text: "Resume",
        link: "https://2m27c.sse.codesandbox.io/"
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
        text: "Linkedin",
        link: "https://www.linkedin.com/in/kittapard-puaime-6553b4146/"
      }
    ]
  },
  skillsData: [
    {
      name: "Frontend",
      level: "Pro",
      items: ["React Hook", "Redux", "Javascript", "Tailwind"]
    },
    {
      name: "Frontend",
      level: "Learning",
      items: ["Jest", "NextJS", "JS Design pattern"]
    },
    {
      name: "Backend",
      items: ["NodeJS", "ExpressJS", "MySQL", "Sequelize", "PHP"]
    },
    {
      name: "Backend",
      level: "Learning",
      items: ["GraphQL", "NestJS"]
    },
    {
      name: "Design",
      items: ["Photoshop", "Illustrator", "Adobe XD", "Figma"]
    },
    {
      name: "Management",
      items: ["Git", "Jira", "Linux cmd"]
    }
  ],
  interestData: [
    {
      name: "Design",
      items: ["UX/UI", "Data visualization", "Drawing"]
    }
  ],

  worksData: [
    {
      locationName: "True-e-logistics",
      link: "https://www.linkedin.com/company/true-e-logistics/about/",
      time: "sep 2020 - present",
      position: "Fullstack Developer",
      workDetail:
        "Work large project logistic management, Work on agile, scrum methodology",
      highlights: [
        <>
          Develop website{" "}
          <a
            href="https://manage.staging.sendit.asia/th/2stage/"
            target="_blank"
          >
            Sendit 2stage
          </a>
        </>,
        "Front-end code reviwer"
      ]
    },
    {
      locationName: "Buzzfreeze Solutions Co., Ltd.",
      link: "http://buzzfreeze.com/web/",
      time: "aug 2018 - aug 2019",
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
          <a href="https://admin.mybmwreward.com" target="_blank">
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
