import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5zm-3 6A1.5 1.5 0 1 1 7.5 9 1.5 1.5 0 0 1 9 7.5zm6 9H9a1.5 1.5 0 0 1 0-3h6a1.5 1.5 0 0 1 0 3zm0-6A1.5 1.5 0 1 1 16.5 9a1.5 1.5 0 0 1-1.5 1.5z" /></svg>);