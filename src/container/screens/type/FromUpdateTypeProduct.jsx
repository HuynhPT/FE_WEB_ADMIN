import React from "react";
import { Input, Button, Form } from "antd";

export default function FromUpdateTypeProduct() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "3px",
          width: "1300px",
          height: "600px",
          border: "1px solid black",
          boxShadow: "1px 3px 1px #000000",
        }}
      >
        <div style={{ margin: 20 }}>
          <h3 style={{ fontSize: "24px" }}>Sửa thể loại</h3>
          <hr />
          <Form>
            <Form.Item style={{ marginTop: 30 }}>
              <p style={{ fontWeight: "bold" }}>Tên *</p>
              <Input
                placeholder="Sửa tên thể loại"
                style={{ width: 1260, height: 48, marginTop: 10 }}
              />
            </Form.Item>
            <Form.Item>
              <p style={{ fontWeight: "bold" }}>Tình trạng thể loại*</p>
              <Input
                placeholder="Sửa tình trạng thể loại"
                style={{ width: 1260, height: 48, marginTop: 10 }}
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
                <span>Sửa thể loại</span>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
