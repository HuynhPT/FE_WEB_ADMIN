import { Select } from "antd";
const option = [
  { value: "Đầm" },
  { value: "Váy" },
  { value: "Áo" },
  { value: "Quần" },
  { value: "Trang sức" },
  { value: "Phụ kiện" },
  { value: "Bra" },
];

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log("search:", value);
};

const SelectOptionTypeProduct = () => (
  <Select
    style={{
      width: "100%",
    }}
    showSearch
    defaultValue={"Đầm"}
    onChange={onChange}
    onSearch={onSearch}
    options={option}
  ></Select>
);

export default SelectOptionTypeProduct;
