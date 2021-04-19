import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M17.526 16.5H5.921A4.521 4.521 0 0 1 1.5 11.885a4.595 4.595 0 0 1 3.444-4.497A1.612 1.612 0 0 0 6.12 6.231 6.135 6.135 0 0 1 12 1.5a6.082 6.082 0 0 1 5.593 3.856 1.494 1.494 0 0 0 1.034.887 5.15 5.15 0 0 1 3.873 5.065 5.087 5.087 0 0 1-4.974 5.192zM3 18.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75zM6.75 21a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z" /></svg>);