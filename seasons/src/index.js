import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./spinner";
/*
const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err.message)
  );
  return <div>Hii..</div>;
};*/

class App extends React.Component {
  /*constructor() {
    super();
    this.state = {
      latitude: "",
      errorMessage: "",
    };
    console.log("first");
  }*/
  state = {
    // babel will convert it into above constructor form
    latitude: "",
    errorMessage: "",
  };
  componentDidMount() {
    console.log("My component was rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  componentDidUpdate() {
    console.log("My component was just updated and it rerendered.");
  }
  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>errorMessage:{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }
    return <Spinner message="Please accept location request" />;
  }
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
