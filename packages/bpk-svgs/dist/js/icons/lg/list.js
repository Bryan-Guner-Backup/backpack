import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M4 8a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm0 6a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm2 4a2 2 0 1 1-2-2 2 2 0 0 1 2 2zM9 5a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2zm-1 7a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1zm1 5a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2z" /></svg>);