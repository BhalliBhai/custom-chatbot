import React from "react";

const data = [
	"Computer Science",
	"Data Science",
	"Artificial Intelligence",
	"Cybersecurity",
	"Business Administration",
	"Engineering (various disciplines)",
	"Medicine",
	"Finance",
	"Marketing",
	"Environmental Science",
	"Nursing",
	"Software Engineering",
	"Mathematics",
	"Graphic Design",
    "Communication Studies",

];

//defination  of Cyper Security widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const DegreeScope = (props) => {
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

export default DegreeScope;