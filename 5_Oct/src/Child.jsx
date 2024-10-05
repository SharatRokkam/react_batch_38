import React from "react";
import "./App.css";
class Child extends React.Component {
  render() {
    return (
      <>
        <h3>Hi, {this.props.name}</h3>
      </>
    );
  }
}

export default Child;
