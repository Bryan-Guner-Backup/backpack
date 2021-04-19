import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5zm.75 13.5H10.5v1.5a1.5 1.5 0 0 1-3 0V9A1.5 1.5 0 0 1 9 7.5h3.75a3.75 3.75 0 0 1 0 7.5zm.75-3.75a.75.75 0 0 1-.75.75H10.5v-1.5h2.25a.75.75 0 0 1 .75.75z" /></svg>);