import { Select } from "antd";
import React, { useEffect, useState } from "react";
const { Option } = Select;

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (label) => {
  console.log("search:", label);
};

const SelectOptionOpject = (props) => {
  const [dataOp, setDataOp] = useState();
  useEffect(() => {
    fetch(
      "http://ec2-18-141-199-110.ap-southeast-1.compute.amazonaws.com:3000/api/type-product/get-type-product"
    )
      .then((res) => res.json())
      .then((dataOp) => {
        const otpn = [];
        dataOp.data.map((item) => {
          otpn.push({ label: item.titleTypeProduct, value: item._id });
        });
        setDataOp(otpn);
      });
  }, []);
  return (
    <Select
      // showSearch
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().includes(input.toLowerCase())
      }
      options={dataOp}
      style={{width:'100%'}}
    ></Select>
  );
};

export default SelectOptionOpject;
