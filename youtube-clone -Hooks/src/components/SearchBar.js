import React, { useState } from "react";

const SearchBar = ({ onSubmitForm }) => {
  const [searchedval, setsearchedval] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    //watch 122nd video to know how to access youtube api
    //TODO: make sure we call calback from parent component
    onSubmitForm(searchedval);
  };
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>VideoSearch</label>
          <input
            onChange={(event) => {
              setsearchedval(event.target.value);
            }}
            type="text"
            value={searchedval}
          />
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
