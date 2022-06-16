import React from "react";
import { Select } from "antd";
const { Option } = Select;
const handleChange = (value) => {
  console.log(value);
};
function SelectMenWomen(props) {
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
    </Select>
  );
}

export default SelectMenWomen;
