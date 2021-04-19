import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M10.5 1.5a1 1 0 0 0 0 2h5a3 3 0 0 1 3 3v12a1 1 0 0 0 2 0v-12a5 5 0 0 0-5-5z" /><path d="M5.5 4.5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2z" /></svg>);