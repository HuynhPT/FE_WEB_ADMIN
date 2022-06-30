import { Select, Tag } from "antd";
import React, { useEffect, useState } from "react";

const SelectOtionSze = () => {
  const [data, setData] = useState();
  console.log(data);
  useEffect(() => {
    fetch(
      "http://ec2-13-250-14-151.ap-southeast-1.compute.amazonaws.com:3000/api/size-color/get-size"
    )
      .then((res) => res.json())
      .then((data) => {
        let newData = [];
        data.data.map((item) => {
          newData.push({ value: item.titleSize });
        });
        setData(newData);
      });
  }, []);

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;

    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    return (
      <Tag
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginRight: 3,
        }}
      >
        {label}
      </Tag>
    );
  };
  return (
    <>
      {/* {data !== undefined && ( */}
        <Select
          mode="multiple"
          showArrow
          tagRender={tagRender}
          style={{
            width: "100%",
          }}
          options={data}
        />
      {/* )} */}
    </>
  );
};

export default SelectOtionSze;
