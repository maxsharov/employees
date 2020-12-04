import React, { Component } from "react";

import Employees from "./containers/Employees";
import EmployeesBirthday from "./components/EmployeesBirthday/EmployeesBirthday";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Employees />
        <EmployeesBirthday />
      </div>
    );
  }
}

export default App;
