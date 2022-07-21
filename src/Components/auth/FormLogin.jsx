import React, { useState } from "react";
import { Form, Input, Button, message, Alert } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import {
  CheckCircleTwoTone,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import Validate from "./Validate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/Api";
import { color } from "@mui/system";
const FormLogin = (props) => {
  const [errors, setErrors] = useState({});

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const dispacth = useDispatch();
  const navigation = useNavigate();

  const onClickHandler = async () => {
    // setErrors(Validate(values));
    loginUser(values, dispacth, navigation);
  };
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  console.log(values);

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
              message: "Xin mời nhập Email!",
            },
            {
              message: "Email sai định dạng",
              pattern:
                /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            name="email"
            style={{
              width: 340,
              height: 40,
              // borderColor: errors.email ? "red" : "#DCDCDC",
            }}
            onChange={handleChange}
            placeholder="Email..."
            value={values.email}
            Outlined={<UserOutlined className="site-form-item-icon" />}
          />
          {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Xin mời nhập mật khẩu!" },
            { min: 5, message: "Mật khẩu tối thiếu 5 ký tự!" },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            name="password"
            style={{
              width: 340,
              height: 40,
              // borderColor: errors.password ? "red" : "	#DCDCDC",
            }}
            onChange={handleChange}
            value={values.password}
            placeholder="Mật khẩu..."
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          {/* {errors.password && <p style={{ color: "red" }}>{errors.password}</p>} */}
        </Form.Item>

        <div style={{ marginTop: 15 }}>
          <p className="login-form-forgot" href="/shop_quen_mat_khau">
            Quên mật khẩu
          </p>
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
