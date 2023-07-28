import React from "react";

const data = [
  // "JAVA",
  // "PYTHON",
  // "DATA-STRUCTURE & ALGORITHAM",
  // "SECURITY",
  // "PENETRATION TESTING",
  // "ANDROID/IOS SDK",
  // "DATA ANALYSIS",
  // "API & JSON",

	"Complete Web Developer Course",
	"Software Development Fundamentals",
	"Full Stack Web Development",
	"Mobile App Development with React Native",
	"Python for Data Science and Machine Learning",
	"Java Programming and Software Engineering Fundamentals",
	"Agile Software Development and Scrum Methodology",
	"Software Testing and Quality Assurance",
	"Introduction to DevOps and Continuous Integration",
	"Front-End Web Development with HTML, CSS, and JavaScript"
];

//defination  of SoftwareDevelopment widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const SoftwareDevelopment = (props) => {
  return (
    <>
      <ol>
        {data.map((val, index) => {
          return <li>{val}</li>;
        })}
      </ol>
    </>
  );
};

export default SoftwareDevelopment;
