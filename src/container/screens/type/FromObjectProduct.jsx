import React from "react";
import { Button, Form, Input, Modal } from "antd";
import TableObjectProduct from "./TableObjectProduct";
import { SearchOutlined } from "@ant-design/icons";
const FromObjectProduct = () => {
  return (
    <div>
      <h3 style={{ fontSize: "24px" }}>Danh sách</h3>
      <p>Đối tượng sử dụng*</p>
      <div
        style={{
          display: "flex",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Input
            style={{ width: "750px", height: "48px" }}
            placeholder="Nhập : Nam, Nữ,........"
          />
          <Button
            style={{
              width: 150,
              height: 32,
              backgroundColor: "#D9D9D9",
              marginTop: 50,
            }}
          >
            Xóa
          </Button>
        </div>
        <Form.Item style={{ marginLeft: "180px" }}>
          <Button
            type="primary"
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
      <div>
        <TableObjectProduct />
      </div>
    </div>
  );
};

export default FromObjectProduct;
