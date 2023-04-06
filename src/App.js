import React, { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Sign from "./Components/sign";
function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const ToggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div>
      {currentForm === "login" ? <Login onFormSwitch={ToggleForm} /> : <Sign />}
    </div>
  );
}

export default App;
