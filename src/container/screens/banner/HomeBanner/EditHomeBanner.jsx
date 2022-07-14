import { Button, Checkbox, Form, Input } from "antd";
import React, { useState, useEffect } from "react";
import TynimceProduct from "../../../../Components/products/TinymceProduct";
import "../bannerwonent/CreateBannerWoment.css";
import { Editor } from "@tinymce/tinymce-react";
import { add } from "../../../../API/ImageAPI";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function EditbannerHomee(props) {
  const { id } = useParams();
  const [nameLinkImage, setNameLinkImage] = useState();
  const [valueText, setValueText] = useState();
  const [dataEdit, setDataEdit] = useState();
  useEffect(() => {
    fetch(
      "http://ec2-18-141-199-110.ap-southeast-1.compute.amazonaws.com:3000/img-first-images/get-img"
    )
      .then((response) => response.json())
      .then((data) => {
        const newData = data.data.find((item) => item._id == id);
        setDataEdit(newData);
      });
  }, []);
  const upImage = (e) => {
    setNameLinkImage(e.target.files[0].name);
  };
  const onFinish = async (values) => {
    console.log(values);
    
  };
  console.log(dataEdit?.title_ads);

  return (
    <div className="_Container_banner_name">
      <h3 className="_titile_add_wonent">Sửa banner home</h3>
      {dataEdit !== undefined && (
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
            <Input
              type="text"
              style={{ borderRadius: 3 }}
              placeholder="dasad"
              defaultValue={dataEdit?.title_ads}
            />
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
            <Input
              style={{ borderRadius: 3 }}
              defaultValue={`${dataEdit?.title_data}`}
            />
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
              initialValue={`${dataEdit?.description_ads}`}
              
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
            {(nameLinkImage !== undefined || dataEdit.image_ads) && (
              <div style={{ display: "flex" }}>
                <span style={{ margin: 10 }}>
                  {nameLinkImage !== undefined
                    ? nameLinkImage
                    : dataEdit.image_ads}
                </span>
                <br />
                <Button
                  onClick={() => setNameLinkImage()}
                  style={{ margin: 10 }}
                >
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
            <Link  to='/shop/banner_home'>
            <Button
              type="primary"
              htmlType="reset"
              style={{
                margin: 20,
                width: 120,
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
                Quay lại
              </p>
            </Button>
            </Link>
            
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
                Sửa banner
              </p>
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
}

export default EditbannerHomee;
