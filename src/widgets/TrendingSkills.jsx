import React from "react";

const data = [
    "Artificial Intelligence (AI)",
    "Machine Learning (ML)",
    "Data Science",
    "Cybersecurity",
    "Cloud Computing",
    "Full Stack Web Development",
    "DevOps",
    "Internet of Things (IoT)",
    "Blockchain Technology",
    "Robotic Process Automation (RPA)",
    "Natural Language Processing (NLP)",
    "Augmented Reality (AR) and Virtual Reality (VR)",
    "User Experience (UX) Design",
    "Digital Marketing",
    "Mobile App Development (iOS/Android)",
    
    
];

//defination  of Cyper Security widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const TrendingSkills = (props) => {
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

export default TrendingSkills;