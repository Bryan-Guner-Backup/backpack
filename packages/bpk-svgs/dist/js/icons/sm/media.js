import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M19.5 2.25h-15a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3zm-4.694 7.864l-3.724 2.578a.389.389 0 0 1-.582-.37V7.178a.39.39 0 0 1 .582-.37l3.724 2.566a.45.45 0 0 1 0 .74zM19.5 20.25a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1 0-3h12a1.5 1.5 0 0 1 1.5 1.5z" /></svg>);