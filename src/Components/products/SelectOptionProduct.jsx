import React from "react";
import { Select } from "antd";
const { Option } = Select;
const handleChange = (value) => {
  console.log(value);
};
function SelectOptionProduct(props) {
  return (
    <Select
      labelInValue
      defaultValue={{
        value: "1",
      }}
      style={{
        width: "100%",
      }}
      onChange={handleChange}
    >
      <Option value="1">{props.Option1}</Option>
      <Option value="2">{props.Option2}</Option>
      <Option value="3">{props?.Option3}</Option>
      <Option value="4">{props?.Option4}</Option>
      <Option value="5">{props?.Option5}</Option>
      <Option value="6">{props?.Option6}</Option>
    </Select>
  );
}

export default SelectOptionProduct;
