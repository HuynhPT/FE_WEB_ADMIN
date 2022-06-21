import { Select, Tag } from "antd";
const options = [
  {
    value: "white",
    label: "Trắng",
  },
  {
    value: "red",
    label: "Đỏ",
  },
  {
    value: "black",
    label: "Đen",
  },
  {
    value: "yellow",
    label: "Vàng",
  },
  {
    value: "green",
    label: "Xanh",
  },
  {
    value: "blue",
    label: "Lam",
  },
  {
    value: "orange",
    label: "Cam",
  },
  {
    value: "beige ",
    label: "Be",
  },
  {
    value: "gray",
    label: "Xám",
  },
  {
    value: "purple ",
    label: "Tím",
  },
];

const tagRender = (props) => {
  const { label, value, closable, onClose } = props;

  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Tag
      color={value}
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

const SelectOptionColor = () => (
  <Select
    mode="multiple"
    showArrow
    tagRender={tagRender}
    defaultValue={["Trắng"]}
    style={{
      width: "100%",
    }}
    options={options}
  />
);

export default SelectOptionColor;
