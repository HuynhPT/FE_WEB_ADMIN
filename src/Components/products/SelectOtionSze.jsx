import { Select, Tag } from "antd";
const options = [
  {
    value: "S",
  },
  {
    value: "M",
  },
  {
    value: "L",
  },
  {
    value: "XL",
  },
  {
    value: "XXL",
  },
  {
    value: "XXXL",
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
      color={"gray"}
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

const SelectOtionSze = () => (
  <Select
    mode="multiple"
    showArrow
    tagRender={tagRender}
    defaultValue={["S"]}
    style={{
      width: "100%",
    }}
    options={options}
  />
);

export default SelectOtionSze;
