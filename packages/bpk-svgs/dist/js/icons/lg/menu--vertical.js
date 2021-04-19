import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 7a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm0 7a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm2 5a2 2 0 1 1-2-2 2 2 0 0 1 2 2z" /></svg>);