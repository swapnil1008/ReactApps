import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { searchedval: "" };
  }
  onChangeInput = (event) => {
    this.setState({ searchedval: event.target.value });
  };
  onSubmitForm = (event) => {
    event.preventDefault();
    //watch 122nd video to know how to access youtube api
    //TODO: make sure we call calback from parent component
    this.props.onSubmitForm(this.state.searchedval);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmitForm}>
          <div className="field">
            <label>VideoSearch</label>
            <input
              onChange={this.onChangeInput}
              type="text"
              value={this.state.searchedval}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
