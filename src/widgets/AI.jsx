import React from "react";

const data = [
	"Introduction to Artificial Intelligence",
	"Artificial Intelligence: Principles and Techniques",
	"Machine Learning and Artificial Intelligence",
	"Deep Learning Specialization",
	"Natural Language Processing",
	"Reinforcement Learning",
	"Computer Vision and Image Recognition",
	"Ethics in Artificial Intelligence",
	"Artificial Intelligence for Robotics",
	"AI Planning and Decision-Making",

];

//defination  of AI widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const AI = (props) => {
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

export default AI;
