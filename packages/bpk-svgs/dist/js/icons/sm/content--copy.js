import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M9.75 0a1.5 1.5 0 0 0 0 3h4.5a4.5 4.5 0 0 1 4.5 4.5v9a1.5 1.5 0 0 0 3 0v-9a7.5 7.5 0 0 0-7.5-7.5z" /><path d="M5.25 4.5a3 3 0 0 0-3 3V21a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V7.5a3 3 0 0 0-3-3z" /></svg>);