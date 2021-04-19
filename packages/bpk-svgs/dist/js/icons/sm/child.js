import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M10.8 4.024A2.637 2.637 0 0 1 12 3.75a2.563 2.563 0 0 1 1.196.28.685.685 0 0 1 .304.62v2.262A1.377 1.377 0 0 1 12 8.25a1.377 1.377 0 0 1-1.5-1.338V4.65a.681.681 0 0 1 .3-.626zm4.2 9.061v-1.383a1.514 1.514 0 0 0-.536-1.277 4.444 4.444 0 0 0-2.429-.675 4.575 4.575 0 0 0-2.5.784A1.542 1.542 0 0 0 9 11.818v1.383a2.458 2.458 0 0 0 .295 1.217c.05.087.103.175.157.263a3.131 3.131 0 0 1 .563 1.414l.408 2.812c.054.764.483 1.343.995 1.343h1.235c.511 0 .94-.58.994-1.343l.408-2.812a3.272 3.272 0 0 1 .477-1.32c.074-.14.148-.277.214-.417A3.083 3.083 0 0 0 15 13.085z" /></svg>);