import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M3 12a1.5 1.5 0 0 0 1.5 1.5h11.379l-3.44 3.44a1.5 1.5 0 0 0 2.122 2.12l6-6a1.5 1.5 0 0 0 0-2.12l-6-6a1.5 1.5 0 0 0-2.122 2.12l3.44 3.44H4.5A1.5 1.5 0 0 0 3 12z" clipRule="evenodd" /></svg>);