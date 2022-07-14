import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Alert } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/Api";
const FormLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispacth = useDispatch();
  const navigation = useNavigate();

  const onClickHandler = () => {
    const newUser = {
      email: email,
      password: password,
    };
    loginUser(newUser, dispacth, navigation);
    console.log(newUser.token, "Dit cu may");
  };
  return (
    <div>
      <h3>{props.title}</h3>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onClickHandler}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập email......",
            },
          ]}
        >
          <Input
            style={{ width: 340, height: 40 }}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email..."
            Outlined={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          type="password"
          name="password"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập password......",
            },
          ]}
        >
          <Input.Password
            style={{ width: 340, height: 40 }}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mật khẩu..."
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <div style={{ marginTop: 15 }}>
          <a className="login-form-forgot" href="/shop_quen_mat_khau">
            Quên mật khẩu
          </a>
        </div>

        <Form.Item style={{ marginTop: 15 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            // href="/shop/tong_quan"
          >
            <p>Đăng nhập</p>~
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormLogin;
