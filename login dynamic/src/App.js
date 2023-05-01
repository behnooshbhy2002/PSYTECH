import React, { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import SignUpVerify from "./Components/SignUpVerify";
function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const ToggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div>
      {currentForm === "login" ? (
        <Login onFormSwitch={ToggleForm} />
      ) : (
        <SignUp />
      )}
      {/* <SignUpVerify></SignUpVerify> */}
    </div>
  );
}

export default App;
