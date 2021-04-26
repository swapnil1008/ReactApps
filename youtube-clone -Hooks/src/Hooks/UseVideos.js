import { useState, useEffect } from "react";
import youtube from "../Apis/youtube";
const UseVideos = (defaultSeachItem) => {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    search(defaultSeachItem);
  }, [defaultSeachItem]);
  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setvideos(response.data.items);
  };
  return [videos, search];
};
export default UseVideos;
