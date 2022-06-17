import { Select, Tag } from "antd";
const options = [
  {
    value: "Trắng",
  },
  {
    value: "Đỏ",
  },
  {
    value: "Đen",
  },
  {
    value: "Vàng",
  },
  {
    value: "Lục",
  },
  {
    value: "Lam",
  },
  {
    value: "Tràm",
  },
  {
    value: "Be",
  },
  {
    value: "Xám",
  },
  {
    value: "Tím",
  },
];

// const tagRender = (props) => {
//   const { label, value, closable, onClose } = props;

//   const onPreventMouseDown = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//   };

//   return (
//     <Tag
//       color={"gray"}
//       onMouseDown={onPreventMouseDown}
//       closable={closable}
//       onClose={onClose}
//       style={{
//         marginRight: 3,
//       }}
//     >
//       {label}
//     </Tag>
//   );
// };

const SelectOptionTypeProduct = () => (
  <Select
    mode="multiple"
    showArrow
    // tagRender={tagRender}
    defaultValue={["Trắng"]}
    style={{
      width: "100%",
    }}
    options={options}
  />
);

export default SelectOptionTypeProduct;
