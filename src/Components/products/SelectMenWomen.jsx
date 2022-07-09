import React from "react";
import { Radio } from "antd";

function SelectMenWomen(props) {
  return (
    <Radio.Group
      style={{
        width: "100%",
        marginTop: 7,
      }}
      onChange={props.onChange}
      options={props.dataOP}
    ></Radio.Group>
  );
}

export default SelectMenWomen;
