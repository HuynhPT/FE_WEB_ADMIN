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
        <Form.Item>
          <Input
            style={{ width: "750px", height: "48px" }}
            placeholder="Nhập : Nam, Nữ,........"
          />
        </Form.Item>
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
