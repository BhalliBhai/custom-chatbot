import React, { useState } from "react";
import Button from "@material-ui/core/Button";

//defination  of EnrollmentNo widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const EnrollmentNo = (props) => {
  const [state, setstate] = useState({
    name: "",
    year: "",
    collagecode: "",
    shift: "",
    branch: "",
    rollno: "",
  });

  const EnrollSubmit = (input) => {
    const message = props.actionProvider.createChatBotMessage(
      `Enrollment no of ${input.name}: ${input.year % 100}${input.collagecode}${
        input.shift
      }${input.branch}${input.rollno}`,
      {
        withAvatar: true,
      }
    );
    props.actionProvider.addMessageToBotState(message);
  };

  const EnrollmentFormValidation = (field) => {
    const message = props.actionProvider.createChatBotMessage(
      `Enter ${field} for create enrollment number`,
      {
        withAvatar: true,
      }
    );
    props.actionProvider.addMessageToBotState(message);
  };

  const onsubmit = (event) => {
    event.preventDefault();
    console.log(state.name);

    if (state.name === "") {
      EnrollmentFormValidation("name");
    } else {
      if (state.year === "") {
        EnrollmentFormValidation("year");
      } else {
        if (state.collagecode === "") {
          EnrollmentFormValidation("collage code");
        } else {
          if (state.shift === "") {
            state.shift = "01";
          }
          if (state.branch === "") {
            EnrollmentFormValidation("branch");
          } else {
            if (state.rollno === "") {
              EnrollmentFormValidation("rollno");
            } else {
              const info = state;
              //calling mathod define in actionprovider
              EnrollSubmit(info);
            }
          }
        }
      }
    }
  };

  const onchangeevent = (event) => {
    console.log(event.target.value);
    setstate((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  return (
    <>
      <form>
        <label>Student Name: </label>
        <input className="form-control bg-light mb-2"
          type="text"
          name="name"
          placeholder="Name"
          value={state.name}
          onChange={onchangeevent}
        />
        <label>Admission Year: </label>
        <input className="form-control bg-light mb-2"
          type="text"
          name="year"
          placeholder="Year"
          value={state.year}
          onChange={onchangeevent}
        />
        <label>Collage Code: </label>
        <input className="form-control bg-light mb-2"
          type="text"
          name="collagecode"
          placeholder="College Code"
          value={state.collagecode}
          onChange={onchangeevent}
        />
        <label>Shift: </label>
        <input className="form-control bg-light mb-2"
          type="text"
          name="shift"
          placeholder="Shift No."
          value={state.shift}
          onChange={onchangeevent}
        />
        <label>Branch Code: </label>
        <input className="form-control bg-light mb-2"
          type="text"
          name="branch"
          placeholder="Branch Code"
          value={state.branch}
          onChange={onchangeevent}
        />
        <label>Roll No: </label>
        <input className="form-control bg-light mb-2"
          type="text"
          name="rollno"
          placeholder="Roll No."
          value={state.rollno}
          onChange={onchangeevent}
        />
        <Button
          variant="outlined"
          color="primary"
          className="btn btn-primary my-2 fw-bold"
          onClick={onsubmit}
        >
          submit
        </Button>
      </form>
    </>
  );
};

export default EnrollmentNo;
