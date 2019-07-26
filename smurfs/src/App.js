import React, { Component } from "react";
import SmurfForm from "./SmurfForm";
import SmurfsViewList from "./views/SmurfsViewList"


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
        <SmurfsViewList/>
        <SmurfForm/>
      </div></div>
    )
  }
}

export default App;