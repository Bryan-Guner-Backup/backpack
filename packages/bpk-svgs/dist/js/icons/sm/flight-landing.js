import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M9.668 6.877L9.034 4.5a.585.585 0 0 1 .712-.701l1.546.435a1.152 1.152 0 0 1 .568.369l2.817 3.23a.597.597 0 0 1-.58.979L10.5 7.8a1.188 1.188 0 0 1-.832-.923z" /><path d="M1.774 2.91a1.163 1.163 0 0 0-.69-.538l-.36-.101a.587.587 0 0 0-.712.702l.955 4.832a4.083 4.083 0 0 0 2.555 3.107l5.173 1.456a.612.612 0 0 1 .34.904l-4.32 7.136a.612.612 0 0 0 .34.904l1.407.396a1.115 1.115 0 0 0 1.084-.28l7.57-6.716a1.546 1.546 0 0 1 1.26-.183l6.416 1.806a.887.887 0 0 0 1.202-.88c-.196-1.735-1.824-3.034-3.652-3.548L5.75 7.8a3.49 3.49 0 0 1-2.06-1.612z" /><path d="M16.114 18.698a1.499 1.499 0 1 0-1.061-1.843l-.002.005a1.504 1.504 0 0 0 1.063 1.838z" /></svg>);