import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import TableObjectProduct from "./TableObjectProduct";
import { SearchOutlined } from "@ant-design/icons";
import qs from "qs";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addTypeProduct } from "../../../Redux/TypeProductSlice";
const FromObjectProduct = () => {
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    dispatch(addTypeProduct(values));
  };

  return (
    <div>
      <h3 style={{ fontSize: "24px", marginTop: 30, marginLeft: 20 }}>
        Danh sách
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
          >
            <Input
              name="titleTypeProduct"
              style={{ width: "750px", height: "48px", marginLeft: 10 }}
              placeholder="Nhập : Nam, Nữ,........"
            />
          </Form.Item>

          <Form.Item style={{ marginLeft: "180px" }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "220px",
                height: "48px",
                marginLeft: "-60px",
              }}
            >
              <span style={{ color: "black" }}>Thêm</span>
            </Button>
          </Form.Item>
        </div>
      </Form>
      <TableObjectProduct />
    </div>
  );
};

export default FromObjectProduct;
