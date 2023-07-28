import { createChatBotMessage } from "react-chatbot-kit";
import EnrollmentNo from "./widgets/EnrollmentNo";
import SoftwareDevelopment from "./widgets/SoftwareDevelopment";
import WebDevelopment from "./widgets/WebDevelopment";
import Tools from "./widgets/Tools";
// import WeatherInfo from "./widgets/WeatherInfo";
import AI from "./widgets/AI";
import CyberSecurity from './widgets/CyberSecurity';
import VirtualSystem from "./widgets/VirtualSystem";
import CloudComputing from './widgets/CloudComputing';
import TrendingSkills from './widgets/TrendingSkills';
import DegreeScope from "./widgets/DegreeScope";
import BestRankedUni from "./widgets/BestRankedUni";

const botName = "Virtual Assistant";
//config for chatbot
const config = {
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#010080",
    },
    chatButton: {
      backgroundColor: "#010080",
    },
  },
  initialMessages: [createChatBotMessage(`Hi, I am a ${botName}, Here to assist you. Tell me how may i help You, `)],
  state: {
    WebDevelopmentState: [
      // "HTML",
      // "CSS",
      // "JAVASCRIPT",
      // "BOOTSTRAP",
      // "JQUERY & AJAX",
      // "SASS",
      // "REACT",
      // "REDUX",
      // "NODEJS",
      // "EXPRESS",
      // "MONGODB & MONGOOSE",
      "The Complete Web Developer Course",
      "Responsive Web Design",
      "JavaScript for Web Development",
      "Front-End Web Development",
      "Full Stack Web Development",
      "Node.js and Express for Web Development",
      "React.js for Web Development",
      "AngularJS Web Development",
      "PHP and MySQL Web Development",
      "Ruby on Rails Web Development",
    ],

    ToolsState: [
      "enrollment number",
      "web development",
      "software development",
      "Artificial Intelligence",
      "Cyber Security",
      "whether info",
    ],  
  },
  //widgets declaration section which we use in our bot for display information
  widgets: [
    {
      widgetName: "EnrollmentNo",
      widgetFunc: (props) => <EnrollmentNo {...props} />,
      mapStateToProps: ["Enrollment"],
    },
    {
      widgetName: "WebDevelopment",
      widgetFunc: (props) => <WebDevelopment {...props} />,
      mapStateToProps: ["WebDevelopmentState"],
    },
    {
      widgetName: "SoftwareDevelopment",
      widgetFunc: (props) => <SoftwareDevelopment {...props} />,
    },
    {
      widgetName: "AI",
      widgetFunc: (props) => <AI {...props} />,
    },
    {
      widgetName: "CyberSecurity",
      widgetFunc: (props) => <CyberSecurity {...props} />,
    },
    {
      widgetName: "VirtualSystem",
      widgetFunc: (props) => <VirtualSystem {...props} />,
    },
    {
      widgetName: "CloudComputing",
      widgetFunc: (props) => <CloudComputing {...props} />,
    },
    {
      widgetName: "TrendingSkills",
      widgetFunc: (props) => <TrendingSkills {...props} />,
    },
    {
      widgetName: "DegreeScope",
      widgetFunc: (props) => <DegreeScope {...props} />,
    },
    {
      widgetName: "BestRankedUni",
      widgetFunc: (props) => <BestRankedUni {...props} />,
    },
    {
      widgetName: "Tools",
      widgetFunc: (props) => <Tools {...props} />,
      mapStateToProps: ["ToolsState"],
    },
    // {
    //   widgetName: "WeatherInfo",
    //   widgetFunc: (props) => <WeatherInfo {...props} />,
    //   mapStateToProps: ["WeatherInfo"],
    // },
  ],
};

export default config;
