import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import TynimceProduct from "../../../../Components/products/TinymceProduct";
import "../bannerwonent/CreateBannerWoment.css";
import { Editor } from "@tinymce/tinymce-react";
import { add } from "../../../../API/ImageAPI";
import axios from "axios";
function CreateBannerMen(props) {
  const [nameLinkImage, setNameLinkImage] = useState();
  const [valueText, setValueText] = useState();
  const [data, setData] = useState({
    croppedImage: nameLinkImage,
    title_ads: "valueText",
    description_ads: "values.title_data",
    title_data: "nameLinkImage",

  });
  const upImage = (e) => {
    const namePhoto = document.getElementById("images").files[0].name;

    setNameLinkImage(namePhoto);
  };
  const onFinish = async (values) => {
    const data2 = {
      croppedImage: nameLinkImage,
      title_ads: "valueText",
      description_ads: "values.title_data",
      title_data: "nameLinkImage",
    };
    // console.log(data);
    // await add(data);
    // alert("thêm thành công");

    //setData(data2);
  };

  const submitFromData = () => {
    axios({
      method: "POST",
      url: "http://ec2-18-141-190-201.ap-southeast-1.compute.amazonaws.com:3000/img-first-images/creact-img",
      body: data,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjA0N2IwZmJlNDc1YTQxM2VjMzEzNSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTU4MDM4NjgsImV4cCI6MTY1ODM5NTg2OH0.zSPhrqq5Zkl2uZU56ED_7r15_yxvKyeMLepRAAPVbk4",
      },
    })
      .then((response) => alert(response.status))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="_Container_banner_name">
        <h3 className="_titile_add_wonent">Thêm banner nam</h3>
        {/* tên */}
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
          <Form.Item
            label="Tên"
            name="title_data"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Đối tượng"
            name="title_ads"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div className="_input_banner_name">
            <p className="_titile_add_">Thông tin chi tiết*</p>
            <Editor
              apiKey="your-api-key"
              onEditorChange={(newText) => console.log(newText)}
              initialValue=""
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
          </div>
          <div className="_input_banner_name">
            <p className="_titile_add_">Chọn ảnh*</p>
            {nameLinkImage !== undefined && (
              <>
                <span>{nameLinkImage}</span>
                <br />
                <Button
                  onClick={() => setNameLinkImage()}
                  style={{ margin: 25 }}
                >
                  Huỷ
                </Button>
              </>
            )}
            <br />
            <label htmlFor="images">
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.6)",
                  marginTop: -20,
                  height: 48,
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
          </div>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button onClick={submitFromData} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      {/* <div className="_Container_banner_name">
        <h3 className="_titile_add_wonent">Thêm banner nam</h3>
        {/* tên *
        <div className="_input_banner_name">
          <p className="_titile_add_">Tên*</p>
          <Input
            style={{
              borderRadius: 3,
            }}
            placeholder="Nhập tên"
          />
        </div>
        {/* Đối tượng *
        <div className="_input_banner_name">
          <p className="_titile_add_">Đối tượng*</p>
          <Input
            style={{
              borderRadius: 3,
            }}
            placeholder="Nhập đối tượng"
          />
        </div>
        {/* thông tin *
        <div className="_input_banner_name">
          <p className="_titile_add_">Thông tin chi tiết*</p>
          <TynimceProduct />
        </div>
        {/* Ảnh *
        <div className="_Button_im">
          <Button
            htmlType="reset"
            style={{
              backgroundColor: "#DCDFE8",
              width: "20%",
              height: 48,
              margin: "0 100px",
            }}
          >
            <p style={{ padding: 10 }}>Đặt lại</p>
          </Button>
          <Button
            htmlType="submit"
            href="/shop/banner_men"
            style={{
              width: "20%",
              height: 48,
              backgroundColor: "#87CEEB99",
            }}
          >
            <p style={{ padding: 10 }}>Thêm banner</p>
          </Button>
        </div>
      </div> */}
    </>
  );
}

export default CreateBannerMen;
