import { Button, Form, Input, Modal } from "antd";
import axios from "axios";
import QueryString from "qs";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ModalTypeProduct = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataTL, setDataTL] = useState();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append("titleTypeProduct", values.titleTypeProduct);
    axios({
      url: "http://ec2-18-141-199-110.ap-southeast-1.compute.amazonaws.com:3000/api/type-product/create-type-product",
      method: "POST",
      headers: {
        token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmVhMDkwOTk5MDNlMTYzOWU0NzA1NSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTY5NDU2NjcsImV4cCI6MTY1OTUzNzY2N30.fqXBpRDQCYzpR3VPlXpEWScuJWpv9Ckvssmy7xvQyMM`,
        "content-type": "application/x-www-form-urlencoded",
      },
      // mColor: QueryString.stringify(formData),
      data: QueryString.stringify(values),
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
    setIsModalVisible(false);
    setDataTL("");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{
          background: "#FFFFFF",
          borderColor: "#d9d9d9",
          margin: 10,
        }}
      >
        <p style={{ color: "#000000" }}> Thêm mới</p>
      </Button>
      <Modal
        title="Thêm đối tượng sử dụng"
        visible={isModalVisible}
        footer={null}
      >
        <Form
          name="basic"
          onFinish={onFinish}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Tên đối tượng"
            name="titleTypeProduct"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên !",
              },
            ]}
          >
            <Input
              name="titleTypeProduct"
              style={{ borderRadius: 3 }}
              value={dataTL}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 10,
              span: 11,
            }}
          >
            <Button
              type="primary"
              htmlType="reset"
              style={{
                margin: 10,
                width: 70,
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
                Huỷ
              </p>
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                margin: 10,
                width: 70,
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
                Thêm
              </p>
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalTypeProduct;
