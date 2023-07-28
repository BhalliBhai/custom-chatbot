import React from "react";

const data = [
	"Introduction to Cloud Computing",
	"Cloud Computing Fundamentals",
	"AWS Certified Cloud Practitioner",
	"Microsoft Azure Fundamentals",
	"Google Cloud Platform Fundamentals",
	"Cloud Architecture and Design",
	"Cloud Security and Compliance",
	"Serverless Computing with AWS Lambda",
	"Containers and Kubernetes in the Cloud",
	"Cloud Data Management and Analytics",
    "Cloud Infrastructure Automation",
    
];

//defination  of Cyper Security widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const CloudComputing = (props) => {
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

export default CloudComputing;