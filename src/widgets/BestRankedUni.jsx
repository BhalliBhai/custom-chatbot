import React from "react";

const data = [
    "University of Management and Technology",
    "The University of Management and Technology (UMT) is a private university located in Lahore, Pakistan. It offers undergraduate, graduate, and doctoral programs in various fields such as business, management, computer science, engineering, social sciences, and more. While UMT is recognized for its quality education and has been ranked among the top universities in Pakistan, it is important to note that rankings may vary depending on different evaluation criteria and sources. It's always recommended to refer to official ranking organizations or consult multiple sources for the most accurate and up-to-date information.",



];

//defination  of Cyper Security widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const BestRankedUni = (props) => {
  return (
    <>
      <ul>
        {data.map((val, index) => {
          return <li>{val}</li>;
        })}
      </ul>
    </>
  );
};

export default BestRankedUni