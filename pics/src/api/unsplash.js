import axios from "axios";
//using axios we can preconfigure and use it anywhere
//create creates the axios client and pre customized version
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID NBJu2qyLgLwglVSvfRQzGixXolzvXWwzGjKNpABsjMc",
  },
});
