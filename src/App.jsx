import React from "react";
import Chatbot from "react-chatbot-kit";
import Config from "./Config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "./app.css";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <h1 className="text-center my-2">Student Chat Box Information</h1>
          <hr />
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 mx-auto">
              <div className="App mx-auto">
                <Chatbot className="w-100"
                  config={Config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
                />
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-12 px-2">
              <hr />
              <h2>About</h2>
              <ol className="px-5">
                <li>You can get the enrollment number by entering the student Information.</li>
                <li>Complete information about the software developement.</li>
                <li>Complete information about the web developement.</li>
                <li>Complete information about the artificial intelligence.</li>
                <li>Complete information about the cyber security.</li>
                <li>Complete information about the cloud virtual system.</li>
                <li>Complete information about the cloud computing.</li>
                <li>The most trending skills now a days</li>
                <li>Which degree have the most scope in 2023 & 2024.</li>
                <li>No. 01 Ranked University in Pakistan information.</li>
              </ol>
            </div>
            <footer className="col-12">
              <hr />
              <h5 className="text-center py-2">Designed & Developed By: <a href="mailto:bhallibhai69@gmail.com" className="creator-name">Bhalli</a> </h5>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
