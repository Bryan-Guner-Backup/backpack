import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M21 12a1.5 1.5 0 0 1-1.5 1.5H8.121l4.94 4.94a1.5 1.5 0 0 1-2.122 2.12l-7.5-7.5a1.5 1.5 0 0 1 0-2.12l7.5-7.5a1.5 1.5 0 0 1 2.122 2.12L8.12 10.5H19.5A1.5 1.5 0 0 1 21 12z" clipRule="evenodd" /></svg>);