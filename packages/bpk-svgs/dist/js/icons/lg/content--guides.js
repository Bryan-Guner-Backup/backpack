import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M17.5 2H6a2.5 2.5 0 0 0-2.5 2.5V19a3.226 3.226 0 0 0 3 3h11a1 1 0 0 0 0-2h-11a1 1 0 0 1-.878-.52C5.49 19.237 5.724 19 6 19h12.5a2.15 2.15 0 0 0 2-2V5a3.226 3.226 0 0 0-3-3zm-4 11h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2zm2-4h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2z" /></svg>);