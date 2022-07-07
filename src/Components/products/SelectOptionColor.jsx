import { Select, Tag } from "antd";
import { useEffect, useState } from "react";

const SelectOptionColor = (props) => {
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
    <Select
      mode="multiple"
      showArrow
      tagRender={tagRender}
      style={{
        width: "100%",
      }}
      options={props.dataColor}
      onChange={props.onChange}
    />
  );
};
export default SelectOptionColor;
