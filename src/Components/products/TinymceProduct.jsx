import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./FromProduct.css";
function TinymceProduct() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return <div style={{ display: "inline" }}></div>;
}

export default TinymceProduct;
