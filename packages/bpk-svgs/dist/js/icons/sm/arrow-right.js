import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M8.25 7.463v9.074a1.358 1.358 0 0 0 2.251 1.11l4.77-4.354a1.53 1.53 0 0 0 .04-2.184l-4.77-4.718A1.357 1.357 0 0 0 8.25 7.463z" /></svg>);