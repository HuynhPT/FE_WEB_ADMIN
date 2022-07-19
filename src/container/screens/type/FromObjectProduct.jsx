import React, { useState } from "react";
import { Button, Form, Input, message, Modal } from "antd";
import TableObjectProduct from "./TableObjectProduct";
import { CheckCircleTwoTone, PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addTypeProduct } from "../../../Redux/TypeProductSlice";
const FromObjectProduct = () => {
  const [edtex, setedtex] = useState();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    dispatch(addTypeProduct({ titleTypeProduct: edtex }));
    message.success({
      content: "Thêm thành công",
      className: "custom-class",
      style: {
        color: "#52c41a",
      },
      icon: () => <CheckCircleTwoTone twoToneColor="#52c41a" />,
      duration: 2,
    });
    setedtex();
  };
  return (
    <div>
      <h3 style={{ fontSize: "24px", marginTop: 30, marginLeft: 30 }}>
        Danh sách đối tượng
      </h3>

      <p style={{ fontSize: "14px", marginTop: 20, marginLeft: 30 }}>
        Thêm đối tượng sử dụng
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: 30,
        }}
      >
        <Input
          value={edtex}
          onChange={(e) => setedtex(e.target.value)}
          name="titleTypeProduct"
          style={{ width: "100%", height: "48px" }}
          placeholder="Nhập : Nam, Nữ,........"
        />

        <Button
          type="primary"
          htmlType="submit"
          style={{
            width: "30%",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#87CEEB",
            border: "1px sold #87CEEB ",
            marginLeft: 100,
            marginRight: 10,
          }}
          onClick={() => onFinish()}
        >
          <PlusOutlined />
          <p style={{ color: "black", margin: 4 }}>Thêm</p>
        </Button>
      </div>
      <TableObjectProduct />
    </div>
  );
};

export default FromObjectProduct;
