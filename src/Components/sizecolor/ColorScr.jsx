import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import qs from "qs";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjA0N2IwZmJlNDc1YTQxM2VjMzEzNSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTU4NjgyNzIsImV4cCI6MTY1ODQ2MDI3Mn0.FHlAcgS9XU0eVz8hn6Nq1TeI4qob_F_DjH5poEpEpY8";

const ColorScr = () => {
  const onFinish = (values) => {
    axios({
      url: "http://ec2-18-141-190-201.ap-southeast-1.compute.amazonaws.com:3000/api/size-color/create-color",
      method: "POST",
      headers: {
        token: `Bearer ${token}`,
        // "Content-Type": "multipart/form-data",
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(values),
      // data: "ok",
    }).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err.response);
        console.log(err.message);
        console.log(err.request);
      }
    );
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      style={{ display: "flex", margin: 100, justifyContent: "space-between" }}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item name="titleColors" style={{ width: "40%" }}>
        <Input placeholder="Thêm màu" style={{ borderRadius: 3 }} />
      </Form.Item>
      <Form.Item name="colorCode" style={{ width: "40%" }}>
        <Input placeholder="Thêm mã màu" style={{ borderRadius: 3 }} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          style={{
            // marginLeft: -200,
            width: 250,
            backgroundColor: "#87CEEB",
            color: "#000000",
            fontSize: 16,
            fontWeight: "700",
            fontFamily: "Open Sans",
            borderRadius: 3,
          }}
        >
          Thêm màu
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ColorScr;
