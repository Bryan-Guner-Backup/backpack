import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M3.113 8.295l17.692-6.71a1.248 1.248 0 0 1 1.61 1.61l-6.71 17.692a2.498 2.498 0 0 1-4.57.232l-2.126-4.25a4.2 4.2 0 0 0-1.878-1.878l-4.25-2.125a2.499 2.499 0 0 1 .232-4.571z" /></svg>);