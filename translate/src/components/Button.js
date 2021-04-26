import React from "react";
import ColorContext from "../context/ColorContext";
import LanguageContext from "../context/LanguageContext";

class Button extends React.Component {
  //static contextType = LanguageContext;
  renderValue(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }
  render() {
    //const text = this.context === "english" ? "Submit" : "Voorleggen";

    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {({ language }) => this.renderValue(language)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}
export default Button;
