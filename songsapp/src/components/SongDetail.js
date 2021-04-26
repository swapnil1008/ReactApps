import React from "react";
import { connect } from "react-redux";
const SongDetail = ({ song }) => {
  //{ song } destructuring
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title:{song.title}
        <br />
        Duration:{song.Duration}
      </p>
    </div>
  );
};
const stateToProps = (state) => {
  return { song: state.selectedsong };
};
export default connect(stateToProps)(SongDetail);
