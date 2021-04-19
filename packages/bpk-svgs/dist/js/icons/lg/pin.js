import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M4.017 12.024a3.274 3.274 0 0 1-.557-5.078L6.948 3.46a3.274 3.274 0 0 1 5.078.557l2.56 4.026a4.365 4.365 0 0 0 1.73 1.56l3.739 1.87a1.09 1.09 0 0 1 .284 1.747l-2.402 2.402a.546.546 0 0 0 0 .772l3.244 3.244a1.091 1.091 0 0 1-1.543 1.543l-3.244-3.244a.546.546 0 0 0-.772 0l-2.402 2.402a1.091 1.091 0 0 1-1.748-.284l-1.87-3.737a4.365 4.365 0 0 0-1.56-1.73l-4.025-2.562z" /></svg>);