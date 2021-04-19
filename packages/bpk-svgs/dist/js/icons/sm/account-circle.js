import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5zm-1.5 5.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75V9a1.5 1.5 0 0 1-3 0zm6 7.54a1.298 1.298 0 0 1-.23.764 5.25 5.25 0 0 1-8.54 0 1.306 1.306 0 0 1-.23-.765v-.675a.71.71 0 0 1 .513-.67l2.09-.654a6.36 6.36 0 0 1 3.794 0l2.09.655a.71.71 0 0 1 .513.67z" /></svg>);