import React from "react";

const data = [
    "Introduction to Cybersecurity",
    "Cybersecurity Fundamentals",
    "Network Security and Firewalls",
    "Ethical Hacking and Penetration Testing",
    "Cybersecurity Risk Management",
    "Digital Forensics and Incident Response",
    "Secure Coding and Software Vulnerabilities",
    "Cybersecurity Operations and Incident Handling",
    "Web Application Security",
    "Cloud Security and Data Protection",
];

//defination  of Cyper Security widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const CyperSecurity = (props) => {
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

export default CyperSecurity;