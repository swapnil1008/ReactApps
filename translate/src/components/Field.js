import React from "react";
import LanguageContext from "../context/LanguageContext";
class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context.language === "english" ? "Name" : "Naam"; //this is one way of geetting context onject data
    return (
      <div className="ui field">
        <label>{text}</label>
        <input></input>
      </div>
    );
  }
}
export default Field;

/*

import React from "react";
import LanguageContext from "../context/LanguageContext";
class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context === "english" ? "Name" : "Naam"; //this is one way of geetting context onject data
    return (
      <div className="ui field">
        <label>{text}</label>
        <input></input>
      </div>
    );
  }
}
export default Field;
Context System:when we want pass data from parent component to deeply nested child component

there are 2 ways to get info into context object
1. Default
2. provider

there are 2 ways to get the data from context object
1. this.context
2. Using consumer  : when we need information from multiple contexts in a single component
and only value we pass to consumer is function


*/
