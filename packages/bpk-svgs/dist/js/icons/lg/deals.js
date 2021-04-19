import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M20.121 4.621l-1.535-1.535a2 2 0 0 0-1.414-.586H6.828a2 2 0 0 0-1.414.586L3.88 4.62A3 3 0 0 0 3 6.743V18.5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6.743a3 3 0 0 0-.879-2.122zM12 15.5a5 5 0 0 1-5-5 1 1 0 0 1 2 0 3 3 0 0 0 6 0 1 1 0 0 1 2 0 5 5 0 0 1-5 5zm6.147-9.147a.5.5 0 0 1-.354.147H6.207a.5.5 0 0 1-.353-.854l.853-.853a1 1 0 0 1 .707-.293h9.172a1 1 0 0 1 .707.293l.853.853a.5.5 0 0 1 0 .707z" /></svg>);