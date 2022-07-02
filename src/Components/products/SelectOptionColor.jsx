import { Select, Tag } from "antd";
import { useEffect, useState } from "react";
// const options = [
//   {
//     value: "white",
//     label: "Trắng",
//   },
//   {
//     value: "red",
//     label: "Đỏ",
//   },
//   {
//     value: "black",
//     label: "Đen",
//   },
//   {
//     value: "yellow",
//     label: "Vàng",
//   },
//   {
//     value: "green",
//     label: "Xanh",
//   },
//   {
//     value: "blue",
//     label: "Lam",
//   },
//   {
//     value: "orange",
//     label: "Cam",
//   },
//   {
//     value: "beige ",
//     label: "Be",
//   },
//   {
//     value: "gray",
//     label: "Xám",
//   },
//   {
//     value: "purple ",
//     label: "Tím",
//   },
// ];

const SelectOptionColor = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "http://ec2-18-141-199-110.ap-southeast-1.compute.amazonaws.com:3000/api/size-color/get-color"
    )
      .then((res) => res.json())
      .then((data) => {
        let newData = [];
        data.data.map((item) => {
          newData.push({ value: item.titleColors });
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
    <Select
      mode="multiple"
      showArrow
      tagRender={tagRender}
      style={{
        width: "100%",
      }}
      options={data}
    />
  );
};
export default SelectOptionColor;
