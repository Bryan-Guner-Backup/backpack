import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M4.5 4.5A1.5 1.5 0 1 1 3 3a1.5 1.5 0 0 1 1.5 1.5zm0 7.5A1.5 1.5 0 1 1 3 10.5 1.5 1.5 0 0 1 4.5 12zm0 7.5A1.5 1.5 0 1 1 3 18a1.5 1.5 0 0 1 1.5 1.5zm3-15A1.5 1.5 0 0 1 9 3h12a1.5 1.5 0 0 1 0 3H9a1.5 1.5 0 0 1-1.5-1.5zm0 7.5A1.5 1.5 0 0 1 9 10.5h12a1.5 1.5 0 0 1 0 3H9A1.5 1.5 0 0 1 7.5 12zm0 7.5A1.5 1.5 0 0 1 9 18h12a1.5 1.5 0 0 1 0 3H9a1.5 1.5 0 0 1-1.5-1.5z" /></svg>);