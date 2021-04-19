import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M5 14a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm7 0a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm9-2a2 2 0 1 1-2-2 2 2 0 0 1 2 2z" /></svg>);