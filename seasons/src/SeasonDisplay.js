import React from "react";
import "./season-display.css";
const sessionConfig = {
  summer: {
    iconName: "sun",
    text: "let's hit the beach",
  },
  winter: {
    iconName: "snowflake",
    text: "Burr, it's chilly",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { iconName, text } = sessionConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
};
export default SeasonDisplay;
