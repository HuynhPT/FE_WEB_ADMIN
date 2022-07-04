import React from "react";
import FromObjectProduct from "./FromObjectProduct";
import "./ObjectProduct.css";

const ScreenObjectProduct = () => {
  return (
    <div className="mainObjectProduct" style={{ background: "#ffff" }}>
      <div className="BodyObjectProduct">
        <div className="contentObjectProduct">
          <FromObjectProduct />
        </div>
      </div>
    </div>
  );
};

export default ScreenObjectProduct;
