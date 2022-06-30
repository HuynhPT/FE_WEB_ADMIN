import React from "react";
import { Button, Form, Input, Modal } from "antd";
import TableObjectProduct from "./TableObjectProduct";
import { SearchOutlined } from "@ant-design/icons";
const FromListTypeProduct = () => {
  return (
    <div style={{ flex: 1 }}>
      <h3 style={{ fontSize: "24px" }}>Danh sách thể loại</h3>
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <p>
            Sử dụng danh sách thể loại để mô tả hoạt động kinh doanh cốt lõi
            tổng thể của bạn từ danh sách được cung cấp.
            <br /> Bấm vào tên của danh mục mà bạn muốn thêm một mục danh sách
          </p>
          <Button
            style={{
              width: 150,
              height: 32,
              backgroundColor: "#D9D9D9",
              marginTop: 50,
              flex: 1,
            }}
          >
            Xóa
          </Button>
        </div>
        <Form.Item style={{ marginLeft: "300px" }}>
          <Button
            type="primary"
            style={{
              width: "250px",
              height: "48px",
            }}
          >
            <span style={{ color: "black" }}>Thêm</span>
          </Button>

          <Form.Item style={{ marginTop: "29px" }}>
            <Input
              placeholder="Tìm kiếm"
              prefix={<SearchOutlined />}
              style={{ width: "250px", height: "48px" }}
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

export default FromListTypeProduct;
