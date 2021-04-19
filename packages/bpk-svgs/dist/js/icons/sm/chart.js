import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M18 1.5A1.5 1.5 0 0 0 16.5 3v18a1.5 1.5 0 0 0 3 0V3A1.5 1.5 0 0 0 18 1.5zm-7.5 9a1.5 1.5 0 0 1 3 0V21a1.5 1.5 0 0 1-3 0zm-6 4.5a1.5 1.5 0 0 1 3 0v6a1.5 1.5 0 0 1-3 0z" /></svg>);