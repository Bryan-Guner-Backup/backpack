import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M22.06 4.752a1.5 1.5 0 0 1 0 2.12L9.687 19.249a1.5 1.5 0 0 1-2.12 0h-.002L1.94 13.622A1.5 1.5 0 0 1 4.062 11.5l4.564 4.565L19.94 4.751a1.5 1.5 0 0 1 2.122 0z" /></svg>);