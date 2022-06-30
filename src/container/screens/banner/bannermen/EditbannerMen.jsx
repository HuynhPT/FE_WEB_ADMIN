import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import TynimceProduct from "../../../../Components/products/TinymceProduct";
import "../bannerwonent/CreateBannerWoment.css";
import { Editor } from "@tinymce/tinymce-react";
import { add } from "../../../../API/ImageAPI";
import axios from "axios";
import qs from "qs";
function EditbannerMen(props) {
  const [nameLinkImage, setNameLinkImage] = useState("");
  const [valueText, setValueText] = useState();

  const upImage = (e) => {
    setNameLinkImage(e.target.files[0].name);
  };
  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append("croppedImage", `${nameLinkImage}`);
    formData.append("title_ads", values.title_ads);
    formData.append("description_ads", valueText);
    formData.append("title_data", values.title_data);

    axios({
      url: "http://ec2-13-250-14-151.ap-southeast-1.compute.amazonaws.com:3000/img-first-images/creact-img",
      method: "POST",
      headers: {
        token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmFhOTk3ZjlhY2JmZDgyMmY2YTE5MCIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTY0NzU0NjcsImV4cCI6MTY1OTA2NzQ2N30.aAcVy5Bj1hredK6tTL0ijhe0v8JRwx9luqf4vIlC8UU`,
        "Content-Type": "application/form-data",
      },
      // data: qs.stringify(formData),
      data: formData,
    }).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err.response);
        // console.log(err.message);
        // console.log(err.request);
      }
    );
    console.log(values);
  };

  return (
    <div className="_Container_banner_name">
      <h3 className="_titile_add_wonent">Sửa banner nam</h3>
      <Form
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
        onFinish={onFinish}
        autoComplete="off"
      >
        {/* tên */}
        <Form.Item
          label="Sửa tên"
          name="title_ads"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên !",
            },
          ]}
        >
          <Input style={{ borderRadius: 3 }} />
        </Form.Item>
        {/* Đối tượng */}
        <Form.Item
          label="Sửa đối tượng"
          name="title_data"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập đối tượng !",
            },
          ]}
        >
          <Input style={{ borderRadius: 3 }} />
        </Form.Item>
        {/* Thông tin chi tiết */}
        <Form.Item
          label="Sửa thông tin chi tiết"
          name="description_ads"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập thông tin chi tiết",
            },
          ]}
        >
          <Editor
            apiKey="your-api-key"
            onEditorChange={(newText) => setValueText(newText)}
            value={valueText}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </Form.Item>
        {/* Chọn ảnh */}
        <Form.Item label="Chọn ảnh" name="croppedImage">
          {nameLinkImage !== undefined && (
            <div style={{ display: "flex" }}>
              <span style={{ margin: 10 }}>{nameLinkImage}</span>
              <br />
              <Button onClick={() => setNameLinkImage()} style={{ margin: 10 }}>
                Huỷ
              </Button>
            </div>
          )}
          <br />
          <label htmlFor="images">
            <div
              style={{
                border: "1px solid #d9d9d9",
                marginTop: -20,
                textAlign: "center",
                borderRadius: 3,
                width: "40%",
              }}
            >
              <p
                style={{
                  marginTop: 10,
                }}
              >
                Chọn ảnh
              </p>
            </div>
          </label>
          <input
            id="images"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => upImage(e)}
          />
        </Form.Item>
        {/* nút xử lý sự kiện */}
        <Form.Item
          wrapperCol={{
            offset: 15,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="reset"
            style={{
              margin: 10,
              width: 200,
              backgroundColor: "#DCDFE8",
              borderColor: "#DCDFE8",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "#000000",
                marginTop: -2,
              }}
            >
              Đặt lại
            </p>
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              margin: 10,
              width: 200,
              backgroundColor: "#87CEEB99",
              borderColor: "#87CEEB99",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "#000000",
                marginTop: -2,
              }}
            >
              Thêm banner
            </p>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default EditbannerMen;
