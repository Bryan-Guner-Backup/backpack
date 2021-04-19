import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M3.684 5.067A1.228 1.228 0 0 0 3 6.227V9.43a1.1 1.1 0 0 0 1.125 1.07H5.25A.75.75 0 0 0 6 9.75v-1.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 0 .75.75h1.123a1.099 1.099 0 0 0 1.125-1.073l-.001-1.07H21v-2.13a1.228 1.228 0 0 0-.684-1.16l-1.991-.812a16.569 16.569 0 0 0-12.65 0zM4.5 12a3 3 0 0 0-3 3v5.25a.75.75 0 0 0 .75.75h.286a.75.75 0 0 0 .671-.415L4.5 18h15l1.293 2.585a.75.75 0 0 0 .67.415h.287a.75.75 0 0 0 .75-.75V15a3 3 0 0 0-3-3z" /></svg>);