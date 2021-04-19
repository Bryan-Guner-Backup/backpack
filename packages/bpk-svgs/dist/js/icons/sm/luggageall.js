import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M12 1.5c-2.703 0-4.688 1.426-5.543 2.46C6.111 4.38 6 4.895 6 5.32V22.5a1.5 1.5 0 0 0 3 0V21h6v1.5a1.5 1.5 0 0 0 3 0V5.385c0-.514-.162-1.074-.555-1.5C16.547 2.914 14.693 1.5 12 1.5zM9 6.417c0-.264.075-.52.23-.684C9.751 5.176 10.721 4.5 12 4.5c1.276 0 2.208.676 2.758 1.262.16.171.242.436.242.71V7c0 .276-.168.5-.375.5h-5.25C9.168 7.5 9 7.276 9 7v-.583zM3 7.5A1.5 1.5 0 0 0 1.5 9v10.5a1.5 1.5 0 0 0 3 0V9A1.5 1.5 0 0 0 3 7.5zm18 0A1.5 1.5 0 0 0 19.5 9v10.5a1.5 1.5 0 0 0 3 0V9A1.5 1.5 0 0 0 21 7.5z" /></svg>);