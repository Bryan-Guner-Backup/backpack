import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5zm3.31 13.774a1.5 1.5 0 0 1-2.121.036l-1.81-1.81a3 3 0 0 1-.879-2.121V7.5a1.5 1.5 0 0 1 3 0v3.878l1.811 1.812a1.5 1.5 0 0 1 0 2.084z" /></svg>);