import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import qs from "qs";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmVhMDkwOTk5MDNlMTYzOWU0NzA1NSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTY2NjAxMjYsImV4cCI6MTY1OTI1MjEyNn0.PqKUaIH9CmbGKrbHE8ka0sIH7smSh249vGCALhRJSEY";

const SizeScr = () => {
  const onFinish = (values) => {
    axios({
      url: "http://ec2-18-141-199-110.ap-southeast-1.compute.amazonaws.com:3000/api/size-color/create-size",
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
    alert("Thêm size thành công");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      style={{ display: "flex", margin: 100, justifyContent: "space-between" }}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div style={{ width: "65%" }}>
        <p
          style={{
            color: "#000000",
            fontSize: 16,
            fontWeight: "700",
            fontFamily: "Open Sans",
          }}
        >
          Tên size
        </p>
        <Form.Item name="titleSize" style={{ width: "100%" }}>
          <Input placeholder="Thêm size" style={{ borderRadius: 3 }} />
        </Form.Item>
      </div>

      <Form.Item style={{ marginTop: 37 }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{
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
