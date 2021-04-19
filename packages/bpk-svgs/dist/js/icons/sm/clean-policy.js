import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M22.192 2.943a2.562 2.562 0 0 0-1.442-1.454 26.458 26.458 0 0 0-17.5 0 2.562 2.562 0 0 0-1.442 1.454A3.867 3.867 0 0 0 1.5 4.416v6.542a12.483 12.483 0 0 0 3.45 8.137 24.682 24.682 0 0 0 5.184 4.363 3.481 3.481 0 0 0 3.732 0 24.709 24.709 0 0 0 5.185-4.363 12.48 12.48 0 0 0 3.45-8.137V4.416a3.87 3.87 0 0 0-.309-1.473zM11.706 9.135a2.39 2.39 0 0 0-1.07 1.07l-.567 1.133a1.195 1.195 0 0 1-2.138 0l-.567-1.133a2.4 2.4 0 0 0-1.069-1.07l-1.134-.567a1.196 1.196 0 0 1 0-2.138l1.133-.567a2.391 2.391 0 0 0 1.07-1.07L7.93 3.66h.001a1.196 1.196 0 0 1 2.138 0l.567 1.133a2.391 2.391 0 0 0 1.07 1.07l1.133.567a1.196 1.196 0 0 1 0 2.138zm6.21 4.72a.797.797 0 0 1-.357.357l-.755.378a1.594 1.594 0 0 0-.713.713l-.378.755a.797.797 0 0 1-1.426 0l-.378-.755a1.594 1.594 0 0 0-.713-.713l-.755-.378a.797.797 0 0 1 0-1.426l.755-.378a1.587 1.587 0 0 0 .713-.713h.001l.377-.755a.797.797 0 0 1 1.426 0l.378.755a1.587 1.587 0 0 0 .713.713l.755.378a.797.797 0 0 1 .357 1.069z" /></svg>);