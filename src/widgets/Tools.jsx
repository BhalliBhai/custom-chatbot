import React from "react";
import Button from "@material-ui/core/Button";

//defination  of Tools widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const Tools = (props) => {
  return (
    <>
      <ul>
        <li>
          <Button
            className="my-1 list-button"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.EnrollmentNumber}
          >
            Enrollment No
          </Button>
        </li>
        <li>
          <Button
            className="my-1 list-button"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.SoftwareHandler}
          >
            Software Development Courses 
          </Button>
        </li>
        <li>
          <Button
            className="my-1 list-button"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.WebHandler}
          >
            Web Development Courses
          </Button>
        </li>
        <li>
          <Button
            className="my-1 list-button"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.AiHandler}
          >
            Artificial Intelligence Courses
          </Button>
        </li>
        <li>
          <Button
            className="my-1 list-button"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.CyberSecurityHandler}
          >
            Cyber Security Courses
          </Button>
        </li>
        <li>
          <Button
            className="my-1 list-button"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.VirtualSystemHandler}
          >
            Virtual System Courses
          </Button>
        </li>
        <li>
          <Button
            className="my-1 list-button"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.CloudComputingHandler}
          >
            Cloud Computing Courses
          </Button>
        </li>
        <li>
          <Button
            className="my-1 list-button"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.TrendingSkillsHandler}
          >
            Trending Skills List
          </Button>
        </li>
        <li>
          <Button
            className="my-1 list-button"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.DegreeScopeHandler}
          >
            Degrees with the most scope
          </Button>
        </li>
        <li>
          <Button
            className="my-1 list-button"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.BestRankedUniHandler}
          >
            No. 01 ranked university of Pakistan
          </Button>
        </li>

        
        {/* <li>
          <Button
            className="my-1 list-button"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.WeatherInfoHandle}
          >
            Weather Information
          </Button>
        </li> */}
      </ul>
    </>
  );
};
export default Tools;
