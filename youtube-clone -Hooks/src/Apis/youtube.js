import axios from "axios";
const KEY = "AIzaSyDqunyWCSG50rXDeYKpEZwiJyBLL6togy4";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
