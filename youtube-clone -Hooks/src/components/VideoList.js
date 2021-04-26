import React from "react";
import VideoItem from "./VideoItem";
const VideoList = ({ videos, onVideoSelect }) => {
  // instead of props.videos we are using es15 concept
  //props.videos
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      ></VideoItem>
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};
export default VideoList;
