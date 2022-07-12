import { Button, Checkbox, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import "../banner/bannerwonent/CreateBannerWoment.css";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import SelectMenWoment from "../../../Components/products/SelectMenWomen";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { upopjectCategori } from "../../../Redux/OjectCategoriSlice";
// truyền prammas

function FromUpdateTypeProduct(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [dataEdit, setDataEdit] = useState();
  const [nameImage, setNameImage] = useState();
  useEffect(() => {
    fetch(
      "http://18.141.199.110:3000/api/category-product/get-category-product"
    )
      .then((res) => res.json())
      .then((data) => {
        const newData = data.data.find((item) => item._id == id);
        setDataEdit(newData);
      });
  }, []);
  const [nameLinkImage, setNameLinkImage] = useState("");
  const [valueText, setValueText] = useState("");
  const [dataOp, setDataOp] = useState("");

  // lấy dữ liệu id của đối tượng
  const [dataLable, setDataLable] = useState("");
  const handleChange = (checkedValues) => {
    "checked = ", setDataLable(checkedValues.target.value);
  };

  useEffect(() => {
    fetch(
      "http://ec2-18-141-199-110.ap-southeast-1.compute.amazonaws.com:3000/api/type-product/get-type-product"
    )
      .then((res) => res.json())
      .then((dataOp) => {
        const otpn = [];
        dataOp.data.map((item) => {
          otpn.push({ label: item.titleTypeProduct, value: item._id });
        });
        setDataOp(otpn);
      });
  }, []);
  const upImage = (e) => {
    const image = document.getElementById("images").files[0];
    setNameImage(image);
  };
  const onFinish = async (values) => {
    console.log(values);
    const formData = new FormData();
    formData.append("titleCategoryProduct", values.titleCategoryProduct);
    formData.append("croppedImage", nameImage);
    formData.append("idTypeProduct", values.idTypeProduct);
    dispatch({ id: dataEdit._id, data: formData });
  };

  return (
    dataEdit !== undefined && (
      <>
        <div
          style={{
            overflow: "none",
            backgroundColor: "#fff",
            margin: 100,
            height: 500,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          }}
        >
          <h3 className="_titile_add_wonent">Sửa thể loại sản phẩm</h3>
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
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "70%" }}>
                {/* tên */}
                <Form.Item
                  label="Tên"
                  name="titleCategoryProduct"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập tên !",
                    },
                  ]}
                >
                  <Input
                    style={{ borderRadius: 3 }}
                    defaultValue={dataEdit?.titleCategoryProduct}
                  />
                </Form.Item>
                {/* Đối tượng */}
                <Form.Item
                  label=" Đối tượng"
                  name="idTypeProduct"
                  style={{ display: "flex" }}
                >
                  <SelectMenWoment
                    dataOP={dataOp}
                    onChange={handleChange}
                    defaultValue={dataEdit?.idTypeProduct}
                  />
                  {/* <ModalTypeProduct /> */}
                </Form.Item>
              </div>
              <div style={{ width: "50%" }}>
                {/* thêm ảnh */}
                <Form.Item
                  label="Chọn ảnh"
                  name="croppedImage"
                  style={{ marginLeft: 20 }}
                >
                  {nameImage !== undefined && (
                    <div style={{ display: "flex" }}>
                      <span style={{ margin: 5 }}>{nameImage.name}</span>
                      <br />
                      <Button
                        onClick={() => setNameImage()}
                        style={{ margin: 5, marginBottom: 10 }}
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
                        marginTop: -25,
                        textAlign: "center",
                        borderRadius: 3,
                        width: "40%",
                        height: 40,
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
                    style={{ display: "none", width: 200 }}
                    onChange={(e) => upImage(e)}
                  />
                </Form.Item>
                {dataEdit?.categoryImgProduct}
              </div>
            </div>
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
                  width: 190,
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
                  width: 190,
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
                  Sửa thể loại
                </p>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </>
    )
  );
}

export default FromUpdateTypeProduct;
