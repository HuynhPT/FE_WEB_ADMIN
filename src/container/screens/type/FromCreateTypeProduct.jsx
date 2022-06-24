import React from "react";
import { Input, Button, Form } from "antd";
import { useState } from "react";

export default function FromCreateTypeProduct() {
  const [nameLinkImage, setNameLinkImage] = useState([]);
  const upImage = (e) => {
    const namePhoto = document.getElementById("images").files[0].name;
    if (nameLinkImage.length > 0) {
      setNameLinkImage([...nameLinkImage, namePhoto]);
    } else {
      setNameLinkImage([namePhoto]);
    }
  };
  return (
    <div style={{ backgroundColor: "white", height: 879, width: 1200 }}>
      <h3 style={{ fontSize: "24px", marginTop: 30 }}>Thêm thể loại</h3>
      <hr />
      <Form style={{ marginTop: 20 }}>
        <Form.Item>
          <span style={{ fontWeight: "bold" }}>Tên *</span>
          <Input
            placeholder="Nhập tên thể loại"
            style={{ width: 1190, height: 48, marginTop: 10 }}
          />
        </Form.Item>
        <Form.Item>
          <span style={{ fontWeight: "bold" }}>Tình trạng thể loại*</span>
          <Input
            placeholder="Nhập tên thể loại"
            style={{ width: 1190, height: 48, marginTop: 10 }}
          />
        </Form.Item>
        <div style={{ marginTop: "20px", flexDirection: "column" }}>
          <p style={{ fontWeight: "bold" }}>Hình ảnh*</p>
          <div style={{ display: "flex" }}>
            {nameLinkImage.length == 0 ? (
              <span>{nameLinkImage}</span>
            ) : (
              <>
                {nameLinkImage.map((item) => (
                  <>
                    <span>{item}</span>
                    <br />
                  </>
                ))}
                <Button
                  onClick={() => setNameLinkImage([])}
                  style={{ margin: 25 }}
                >
                  Huỷ
                </Button>
              </>
            )}
          </div>
          <label htmlFor="images">
            <div
              style={{
                border: "1px solid #00000099",
                marginTop: 5,
                height: 30,
                textAlign: "center",
                width: 438,
              }}
            >
              Chọn ảnh
            </div>
          </label>
          <input
            id="images"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => upImage(e)}
          />
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
