import React, { useState } from "react";
import { Button, Form, Input, message, Modal } from "antd";
import TableObjectProduct from "./TableObjectProduct";
import { CheckCircleTwoTone, PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addTypeProduct } from "../../../Redux/TypeProductSlice";
import { useForm } from "react-hook-form";
import Validate from "../../../Components/auth/Validate";
const FromObjectProduct = () => {
  const [edtex, setedtex] = useState({ titleTypeProduct: "" });

  const dispatch = useDispatch();

  const onFinish = async (data) => {
    dispatch(addTypeProduct(edtex));
    message.success({
      content: "Thêm thành công",
      className: "custom-class",
      style: {
        color: "#52c41a",
      },
      icon: () => <CheckCircleTwoTone twoToneColor="#52c41a" />,
      duration: 2,
    });
  };
  const handleChange = (event) => {
    setedtex({
      ...edtex,
      [event.target.name]: event.target.value,
    });
    console.log(edtex);
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
          }}
        >
          <Form.Item
            name="titleTypeProduct"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập đối tượng!",
              },
              {
                min: 3,
                message: "Nhập tối thiểu 3 ký tự!",
              },
            ]}
          >
            <Input
              value={edtex.titleTypeProduct}
              onChange={handleChange}
              name="titleTypeProduct"
              style={{
                width: "100%",
                height: "48px",
              }}
              placeholder="Nhập : Nam, Nữ,........"
            />
          </Form.Item>
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
