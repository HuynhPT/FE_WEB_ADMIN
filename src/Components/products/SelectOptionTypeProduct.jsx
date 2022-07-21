import { Select, Tag } from "antd";

const SelectOptionTypeProduct = (props) => {
  return (
    <Select
      placeholder={props.placeholder}
      showSearch
      style={{
        width: "100%",
      }}
      options={props.options}
      onChange={props.onChange}
      defaultValue={props.defaultValue}
    />
  );
};
export default SelectOptionTypeProduct;
