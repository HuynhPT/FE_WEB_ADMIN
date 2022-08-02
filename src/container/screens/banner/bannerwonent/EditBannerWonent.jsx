import { Button, Checkbox, Form, Input } from "antd";
import React, { useState, useEffect } from "react";
import TynimceProduct from "../../../../Components/products/TinymceProduct";
import "../bannerwonent/CreateBannerWoment.css";
import { Editor } from "@tinymce/tinymce-react";

import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { LOCALHOST, URL_GET_ALL_IMG } from "../../../../API/ALLAPI";
function EditBannerWonent(props) {
  const { id } = useParams();
  const [nameLinkImage, setNameLinkImage] = useState();
  const [valueText, setValueText] = useState();
  const [dataEdit, setDataEdit] = useState();
  useEffect(() => {
    fetch(`${LOCALHOST}` + `${URL_GET_ALL_IMG}`)
      .then((response) => response.json())
      .then((data) => {
        const newData = data.data.find((item) => item._id == id);
        setDataEdit(newData);
      });
  }, []);
  const upImage = (e) => {
    setNameLinkImage(e.target.files);
    setNameImage(e.target.files[0].name);
  };
  const onFinish = async (values) => {
    console.log(values);
    const formData = new FormData();
    formData.append(
      "title_ads",
      values.title_ads == undefined ? dataEdit.title_ads : values.title_ads
    );
    formData.append(
      "croppedImage",
      nameLinkImage[0] == undefined ? dataEdit. imgbanner : nameLinkImage[0]
    );
    formData.append(
      "description_ads",
      values.description_ads == undefined ? dataEdit.description_ads : values.description_ads
    );
    formData.append(
      "title_data",
      values.title_data == undefined ? dataEdit.title_data : values.title_data
    );
    formData.append(
      "idIMG",
      dataEdit._id
    );
    await axios({
      uurl: `${LOCALHOST}` + `${URL_UPDATE_IMG}`,
      method: "POST",
      headers: {
        token: mToken,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    }).then(
      async (res) => {
        res.data.code === 200
          ? message.success({
              content: "Sửa thành công",
              className: "custom-class",
              style: {
                color: "#52c41a",
              },
              icon: () => <CheckCircleTwoTone twoToneColor="#52c41a" />,
              duration: 2,
            })
          : message.error({
              content: "Sửa thất bại",
              className: "custom-class",
              style: {
                color: "red",
              },
              icon: () => <CheckCircleTwoTone twoToneColor="red" />,
              duration: 2,
            });
      },
      (err) => {
        console.log(err.response, "?");
      }
    )
  };
  
  // console.log(dataEdit?.title_ads);

  return (
    dataEdit !== undefined && (
    <div className="_Container_banner_name">
      <h3 className="_titile_add_wonent">Sửa banner nữ</h3>
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
          >
            <Input
              type="text"
              style={{ borderRadius: 3 }}
              placeholder="dasad"
              defaultValue={`${dataEdit?.title_ads}`}
            />
          </Form.Item>
          {/* Đối tượng */}
          <Form.Item
            label="Sửa đối tượng"
            name="title_data"
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
            <Link to={"/shop/banner_women"}>
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
                margin: 20,
                width: 120,
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
    )
  );
}

export default EditBannerWonent;
