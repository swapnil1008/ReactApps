import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import UseVideos from "../Hooks/UseVideos";

const App = () => {
  const [selectedVideo, setselectedVideo] = useState(null);
  const [videos, search] = UseVideos("building");
  useEffect(() => {
    setselectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onSubmitForm={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo}></VideoDetail>
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={(video) => {
                setselectedVideo(video);
              }}
              videos={videos}
            ></VideoList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
