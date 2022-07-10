import React from "react";
import { Button, Form, Input, Modal } from "antd";
import TableListTypeProduct from "./TableListTypeProduct";
import { SearchOutlined } from "@ant-design/icons";
const FromListTypeProduct = () => {
  return (
    <div style={{ margin: 50 }}>
      <h3 style={{ fontSize: 24 }}>Danh sách thể loại</h3>
      <div
        style={{
          display: "flex",
        }}
      >
        <p style={{}}>
          Sử dụng danh sách thể loại để mô tả hoạt động kinh doanh cốt lõi tổng
          thể của bạn từ danh sách được cung cấp.
          <br /> Bấm vào tên của danh mục mà bạn muốn thêm một mục danh sách
        </p>
        <Form.Item style={{ marginLeft: "230px" }}>
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
        <TableListTypeProduct />
      </div>
    </div>
  );
};

export default FromListTypeProduct;
