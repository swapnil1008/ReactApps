import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [pathname, setpathname] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setpathname(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  if (window.location.pathname === path) {
    return children;
  } else {
    return null;
  }
};
export default Route;
