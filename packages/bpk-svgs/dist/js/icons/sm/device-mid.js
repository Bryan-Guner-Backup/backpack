import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M4.876 21.001h14.248a3.375 3.375 0 0 0 3.375-3.375V6.373a3.375 3.375 0 0 0-3.375-3.375H4.876a3.375 3.375 0 0 0-3.375 3.375v11.253a3.375 3.375 0 0 0 3.375 3.375zm6-3.753h2.25a1.125 1.125 0 1 1 0 2.25h-2.25a1.125 1.125 0 0 1 0-2.25z" /></svg>);