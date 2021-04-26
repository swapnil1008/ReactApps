import { combineReducers } from "redux";
const songReducer = () => {
  return [
    { title: "Teri Mitti", Duration: "3.45min" },
    { title: "Dil bar", Duration: "4.20min" },
    { title: "Sarang Dariya", Duration: "3.39min" },
    { title: "Kanne Adirindi", Duration: "5.20min" },
    { title: "KGF theme song", Duration: "2.30min" },
  ];
};

const selectedSongReducer = (SelectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return SelectedSong;
};
export default combineReducers({
  songs: songReducer,
  selectedsong: selectedSongReducer,
});
