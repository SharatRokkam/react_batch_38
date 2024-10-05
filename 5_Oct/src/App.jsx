//boilerplate code for class component

import React, { Component } from "react";
import Child from "./Child";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <>
        <Child name="John" />
        <Counter />
      </>
    );
  }
}

export default App;

//migrate functional to class
// class - javascript es6
