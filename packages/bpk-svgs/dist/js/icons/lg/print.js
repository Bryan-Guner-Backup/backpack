import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M7 2.5a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1zm15 5v9a3 3 0 0 1-3 3h-1v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zm-16 0a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm10 8a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z" /></svg>);