import React from "react";
const Link = ({ className, href, children }) => {
  const onclick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    window.history.pushState({}, "", href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onclick} className={className} href={href}>
      {children}
    </a>
  );
};
export default Link;
