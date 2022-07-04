import React, { useState } from "react";
import TextInput from "./TextInput";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";
const FormLogin = (props) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <h3>{props.title}</h3>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <TextInput
          name="username"
          message="Nhập tên đăng nhập"
          placeholder="Email..."
          Outlined={<UserOutlined className="site-form-item-icon" />}
        />
        <TextInput
          name="password"
          message="Nhập mật khẩu"
          placeholder="Mật khẩu..."
          type="password"
          Outlined={<LockOutlined className="site-form-item-icon" />}
        />

        <Form.Item>
          <a className="login-form-forgot" href="/shop_quen_mat_khau">
            Quên mật khẩu
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            // href="/shop/tong_quan"
          >
            <Link to="/shop/tong_quan">Đăng nhập</Link>
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormLogin;
