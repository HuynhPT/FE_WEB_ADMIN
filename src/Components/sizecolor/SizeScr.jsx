import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import qs from "qs";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmFhOTk3ZjlhY2JmZDgyMmY2YTE5MCIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTY0MDAyOTQsImV4cCI6MTY1ODk5MjI5NH0.nODFZ705Tyt4F6nrOK55VhKJXF1wPSESIkEBrP40P6";

const SizeScr = () => {
  const onFinish = (values) => {
    axios({
      url: "http://ec2-13-250-14-151.ap-southeast-1.compute.amazonaws.com:3000/api/size-color/create-size",
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
      style={{ display: "flex", margin: 100, justifyContent: "space-evenly" }}
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
      <Form.Item name="titleSize" style={{ width: "100%" }}>
        <Input
          placeholder="Thêm size"
          style={{ borderRadius: 3, width: "100%" }}
        />
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
            marginLeft: 10,
            width: 250,
            backgroundColor: "#87CEEB",
            color: "#000000",
            fontSize: 16,
            fontWeight: "700",
            fontFamily: "Open Sans",
            borderRadius: 3,
          }}
        >
          Thêm Size
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SizeScr;