import { Button, Checkbox, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import "../banner/bannerwonent/CreateBannerWoment.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import SelectMenWoment from "../../../Components/products/SelectMenWomen";
import { mToken } from "../../../../token/TokenLogin";
function FromCreateTypeProduct(props) {
  // khai báo state
  const [nameLinkImage, setNameLinkImage] = useState("");
  const [nameImage, setNameImage] = useState();
  const [valueText, setValueText] = useState("");
  const [dataOp, setDataOp] = useState("");

  // tham chiếu redux
  const dispatch = useDispatch();

  // lấy dữ liệu id của đối tượng
  const [dataLable, setDataLable] = useState("");
  const handleChange = (checkedValues) => {
    "checked = ", setDataLable(checkedValues.target.value);
  };

  useEffect(() => {
    fetch("http://18.141.199.110:3000/api/type-product/get-type-product")
      .then((res) => res.json())
      .then((dataOp) => {
        const otpn = [];
        dataOp.result.map((item) => {
          otpn.push({ label: item.titleTypeProduct, value: item._id });
        });
        setDataOp(otpn);
      });
  }, []);

  // lấy file
  const upImage = (e) => {
    setNameLinkImage(e.target.files);
    setNameImage(e.target.files[0].name);
  };

  // thực hiện truy vấn
  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append("titleCategoryProduct", values.titleCategoryProduct);
    formData.append("croppedImage", nameLinkImage[0]);
    formData.append("idTypeProduct", dataLable);

    axios({
      url: "http://18.141.199.110:3000/api/category-product/create-category-product",
      method: "POST",
      headers: {
        token: mToken,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    }).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err.response);
      }
    );
    if (!values) {
      console.log("Mời nhập đối tượng");
    }
    message.success({
      content: "Thêm thể loại thành công",
      className: "custom-class",
      style: {
        color: "#52c41a",
      },
      duration: 2,
    });
    setValueText("");
  };

  return (
    <div style={{ overflow: "none" }}>
      <h3 className="_titile_add_wonent">Thêm thể loại sản phẩm</h3>
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
              <Input style={{ borderRadius: 3 }} defaultValue={valueText} />
            </Form.Item>
            {/* Đối tượng */}
            <Form.Item
              label=" Đối tượng"
              name="idTypeProduct"
              style={{ display: "flex" }}
            >
              <SelectMenWoment dataOP={dataOp} onChange={handleChange} />
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
                  <span style={{ margin: 5 }}>{nameImage}</span>
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
              width: 150,
              backgroundColor: "#DCDFE8",
              borderColor: "#DCDFE8",
              textAlign: "center",
            }}
            onClick={() => setNameImage()}
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
              width: 150,
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
              Thêm thể loại
            </p>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FromCreateTypeProduct;
