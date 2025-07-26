import { useEffect } from "react";
import { useLocation } from "react-router";

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path === "/") {
      document.title = "SimplyMayank | Home";
    } else if (path === "/about") {
      document.title = "SimplyMayank | About";
    } else if (path === "/contact") {
      document.title = "SimplyMayank | Contact";
    } else if (path === "/blogs") {
      document.title = "SimplyMayank | Blogs";
    } else if (path === "/projects") {
      document.title = "SimplyMayank | Projects";
    } else {
      document.title = "SimplyMayank";
    }
  }, [location]);

  return null;
};

export default TitleUpdater;
