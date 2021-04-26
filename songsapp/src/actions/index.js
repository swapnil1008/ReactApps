//Action Creator
export const selectSong = (song) => {
  //Return an action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
//above is named export we can import it by using import {selectSong} from "...";
//if we use export default then we should not use {} that is import selectSong from "...";
