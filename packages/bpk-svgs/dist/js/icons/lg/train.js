import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M20.412 9.517l-5.048-4.71A3 3 0 0 0 13.318 4H4a2 2 0 0 0-2 2v10a1 1 0 0 0 1 1h12.125A1.876 1.876 0 0 1 17 18.875 1.125 1.125 0 0 0 18.125 20H20c1.657 0 2-1.343 2-3v-3.827a5 5 0 0 0-1.588-3.656zM9 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1zm7.586 1H12a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.586a1 1 0 0 1 .707.293l3 3A1 1 0 0 1 16.586 11zM16 19a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h12a1 1 0 0 1 1 1z" /></svg>);