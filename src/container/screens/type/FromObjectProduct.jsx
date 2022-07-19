import React, { useState } from "react";
import { Button, Form, Input, message, Modal } from "antd";
import TableObjectProduct from "./TableObjectProduct";
import {
  CheckCircleTwoTone,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import qs from "qs";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addTypeProduct } from "../../../Redux/TypeProductSlice";
const FromObjectProduct = () => {
  const [edtex, setedtex] = useState();
  const [errors, setErrors] = useState(true);
  const dispatch = useDispatch();
  const onFinish = async () => {
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
    setErrors(edtex);
  };

  return (
    <div>
      <h3 style={{ fontSize: "24px", marginTop: 30, marginLeft: 30 }}>
        Danh sách đối tượng
      </h3>

      <p style={{ fontSize: "14px", marginTop: 20, marginLeft: 30 }}>
        Thêm đối tượng sử dụng
      </p>

      <Form
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: 30,
        }}
        onFinish={onFinish}
      >
        <div
          style={{
            width: "100%",
            height: "48px",
            borderColor: !errors ? "red" : "	#DCDCDC",
          }}
        >
          <Input
            value={edtex}
            onChange={(e) => setedtex(e.target.value)}
            name="titleTypeProduct"
            style={{
              width: "100%",
              height: "48px",
              borderColor: !errors ? "red" : "	#DCDCDC",
            }}
            placeholder="Nhập : Nam, Nữ,........"
          />
          <p style={{ color: !errors ? "red" : "	#f0f2f5" }}>
            Mời nhập đối tượng!
          </p>
        </div>
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
        >
          <PlusOutlined />
          <p style={{ color: "black", margin: 4 }}>Thêm</p>
        </Button>
      </Form>
      <TableObjectProduct />
    </div>
  );
};

export default FromObjectProduct;
