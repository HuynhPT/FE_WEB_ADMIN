import React from "react";
import { Input, Button, Form } from "antd";

export default function FromCreateTypeProduct() {
  return (
    <div style={{ backgroundColor: "white", height: 10000 }}>
      <h3 style={{ fontSize: "24px" }}>Thêm thể loại</h3>
      <hr />
      <Form>
        <Form.Item style={{ marginTop: 30 }}>
          <span style={{ fontWeight: "bold" }}>Tên *</span>
          <Input
            placeholder="Nhập tên thể loại"
            style={{ width: 1275, height: 48, marginTop: 10 }}
          />
        </Form.Item>
        <Form.Item>
          <span style={{ fontWeight: "bold" }}>Tình trạng thể loại*</span>
          <Input
            placeholder="Nhập tên thể loại"
            style={{ width: 1275, height: 48, marginTop: 10 }}
          />
        </Form.Item>
        <div style={{ marginTop: "20px", flexDirection: "column" }}>
          <p style={{ fontWeight: "bold" }}>Hình ảnh*</p>
          <Input
            style={{ width: "438px", height: "48px" }}
            placeholder="Chọn hình ảnh"
          />
        </div>
        <div>
          <Button
            style={{
              width: 150,
              height: 32,
              marginTop: 20,
              backgroundColor: "#DCDFE8",
            }}
          >
            <span>Chọn tệp</span>
          </Button>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            style={{
              width: 200,
              height: 48,
              marginRight: 80,
              backgroundColor: "#DCDFE8",
            }}
          >
            <span>Đặt lại</span>
          </Button>
          <Button
            style={{
              width: 200,
              height: 48,
              backgroundColor: "#87CEEB",
              marginRight: 30,
            }}
          >
            <span>Thêm thể loại</span>
          </Button>
        </div>
      </Form>
    </div>
  );
}
