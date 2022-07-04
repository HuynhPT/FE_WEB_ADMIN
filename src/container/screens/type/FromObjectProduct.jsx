import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import TableObjectProduct from "./TableObjectProduct";
import { SearchOutlined } from "@ant-design/icons";
import qs from "qs";
import axios from "axios";
const FromObjectProduct = () => {
  const onFinish = async (values) => {
    const fromData = new FormData();

    const mToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmVhMDkwOTk5MDNlMTYzOWU0NzA1NSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTY4NTMyMTAsImV4cCI6MTY1OTQ0NTIxMH0.oWPE-BhmRbYJ8abDqGbmVmDaVQ-_iDLQRV6Kin0VIiY";

    fromData.append("titleTypeProduct", "ok");

    axios({
      url: "http://18.141.199.110:3000/api/type-product/create-type-product",
      method: "POST",
      headers: {
        token: `Bearer ${mToken} `,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(values),
    }).then(
      (res) => {
        console.log(res, "Dit me may ");
      },
      (err) => {
        console.log(err.response, "KKKKKKKKKKKKKKKKKKKKKKKKkk");
      }
    );
    console.log(values);
  };

  return (
    <div>
      <h3 style={{ fontSize: "24px" }}>Danh sách</h3>
      <p>Đối tượng sử dụng*</p>
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
            name="titleTypeProduct"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên !",
              },
            ]}
          >
            <Input
              name="titleTypeProduct"
              style={{ width: "750px", height: "48px" }}
              placeholder="Nhập : Nam, Nữ,........"
            />
          </Form.Item>

          <Form.Item style={{ marginLeft: "180px" }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "250px",
                height: "48px",
                marginLeft: "68px",
              }}
            >
              <span style={{ color: "black" }}>Thêm</span>
            </Button>

            <Form.Item style={{ marginTop: "29px" }}>
              <Input
                placeholder="Tìm kiếm"
                prefix={<SearchOutlined />}
                style={{ width: "250px", height: "48px", marginLeft: "70px" }}
              />
            </Form.Item>
          </Form.Item>
        </div>
      </Form>
      <TableObjectProduct />
    </div>
  );
};

export default FromObjectProduct;
