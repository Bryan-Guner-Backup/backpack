import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M23.346 9.678A13.578 13.578 0 0 0 12 3 13.578 13.578 0 0 0 .654 9.678a4.454 4.454 0 0 0 0 4.647A13.58 13.58 0 0 0 12 21a13.58 13.58 0 0 0 11.346-6.675 4.454 4.454 0 0 0 0-4.647zM12 18a6 6 0 1 1 6-6 6 6 0 0 1-6 6zm3-6a3 3 0 1 1-3-3 3 3 0 0 1 3 3z" /></svg>);