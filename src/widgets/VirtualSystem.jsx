import React from "react";

const data = [
    "Virtualization Essentials",
    "VMware vSphere: Install, Configure, Manage",
    "Hyper-V Virtualization Fundamentals",
    "Virtualization with Citrix XenServer",
    "Virtualization Security and Best Practices",
    "Cloud Computing and Virtualization Technologies",
    "Virtual Machine Management and Deployment",
    "Virtualization and Cloud Infrastructure Administration",
    "Advanced Virtualization Techniques and Solutions",
    "Virtual Networking Fundamentals"

];

//defination  of Cyper Security widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const VirtualSystem = (props) => {
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

export default VirtualSystem;