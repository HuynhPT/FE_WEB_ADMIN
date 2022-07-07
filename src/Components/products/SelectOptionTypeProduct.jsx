import { Select, Tag } from "antd";
import { useEffect, useState } from "react";

const SelectOptionTypeProduct = (props) => {
  
  return (
    <Select
      showSearch
      style={{
        width: "100%",
      }}
      options={props.options}
      onChange={props.onChange}
    />
  );
};
export default SelectOptionTypeProduct;
