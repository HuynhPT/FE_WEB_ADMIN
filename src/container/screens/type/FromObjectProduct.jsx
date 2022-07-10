import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import TableObjectProduct from "./TableObjectProduct";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import qs from "qs";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addTypeProduct } from "../../../Redux/TypeProductSlice";
const FromObjectProduct = () => {
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    dispatch(addTypeProduct(values));
    alert("Thêm đối tượng sử dụng thành công");
  };

  return (
    <div>
      <h3 style={{ fontSize: "24px", marginTop: 30, marginLeft: 20 }}>
        Danh sách đối tượng
      </h3>
      <Form
        onFinish={onFinish}
        autoComplete="off"
        style={{ margin: "0 20px" }}
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        initialValues={{
          remember: true,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Form.Item
            label="Đối tượng sử dụng"
            name="titleTypeProduct"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập đối tượng sử dụng !",
              },
            ]}
            style={{ width: "70%" }}
          >
            <Input
              name="titleTypeProduct"
              style={{ width: "100%x", height: "48px" }}
              placeholder="Nhập : Nam, Nữ,........"
            />
          </Form.Item>

          <Form.Item style={{ width: "20%" }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "100%",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#87CEEB",
                border: "1px sold #87CEEB ",
                marginLeft: 20,
              }}
            >
              <PlusOutlined />
              <p style={{ color: "black", margin: 4 }}>Thêm</p>
            </Button>
          </Form.Item>
        </div>
      </Form>
      <TableObjectProduct />
     
    </div>
  );
};

export default FromObjectProduct;
