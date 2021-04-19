import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M21.702 3.522L19.38 2.73a22.771 22.771 0 0 0-14.758 0L2.3 3.523h-.001A1.194 1.194 0 0 0 1.5 4.657V15.77A3.547 3.547 0 0 0 5 19.362h2.614a2.1 2.1 0 0 1 1.504.634l2.13 2.186a1.05 1.05 0 0 0 1.485.02l.019-.02 2.13-2.186a2.1 2.1 0 0 1 1.504-.634H19a3.547 3.547 0 0 0 3.5-3.59V4.657a1.195 1.195 0 0 0-.798-1.136zM12 16.5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zm.75-4.5H12a1.5 1.5 0 0 1 0-3h.75a.75.75 0 1 0 0-1.5H10.5a1.5 1.5 0 0 1 0-3h2.25a3.75 3.75 0 1 1 0 7.5z" /></svg>);