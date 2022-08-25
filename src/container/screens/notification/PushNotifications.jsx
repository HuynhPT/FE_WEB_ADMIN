import { Button, Form, Input, Select } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mAUTHORIZATION } from "../../../../token/TokenLogin";
import { URL_PUSH_NOTIFICATION } from "../../../API/ALLAPI";
import {
  getTokenNotifications,
  saveNotifices,
} from "../../../Redux/NotificationSlice";
import axios from "axios";

export default function PushNotifications() {
  const { Option } = Select;
  const dispatch = useDispatch();
  const tokenData = useSelector((data) => data.notification.value);
  const onFinish = (values) => {
    var data = JSON.stringify({
      data: {
        type: "nameScreen",
      },
      notification: {
        title: values.title,
        body: values.body,
      },
      //   registration_ids: tokenData.map((item) => item?.tokenPush),
      registration_ids: [
        "cAh2Doe9SuipudjDm-ivF3:APA91bEuKy_NTfX7pMblW8iYn9NnU4cLcJb2C2XWgqw11FiRjjW29NM893pz12V9K628KXRu5T06lpbEQgGBiKgB0ZFowr9v5WVAmQsuPqrZOemRSUz1mZPU9J7jQR0jdIUDXYglikhf",
      ],
    });
    var config = {
      method: "post",
      url: `${URL_PUSH_NOTIFICATION}`,
      headers: {
        Authorization: `${mAUTHORIZATION}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(response);
        if (response.data.success !== 0) {
          dispatch(
            saveNotifices({
              title: values.title,
              body: values.body,
            })
          );
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    dispatch(getTokenNotifications());
  }, []);
  //   console.log(
  //     tokenData.map((item) => item?.tokenPush),
  //     "tokennotifice"
  //   );
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Form
      name="nest-messages"
      onFinish={onFinish}
      style={{ margin: "50px 50px 0 50px" }}
    >
          <div
        style={{
          textAlign: "center",
          marginTop: 20,
          fontSize: 30,
          fontFamily: "initial",
        }}
      >
        Tạo thông báo
      </div>
      <div style={{ marginBottom: 10 }}>
        <a style={{ color: "black", fontSize: 16 }}>Màn hình thông báo</a>
      </div>
      <Form.Item name="select" 
      
      rules={[
        {
          required: true,
          message: "Vui lòng chọn",
        },
      ]}
      >
        <Select
          showSearch
          placeholder="Chọn màn hình muốn thông báo"
          onChange={onChange}
          style={{ backgroundColor: "#ffffff" }}
        >
          <Option value="homeScreen">Màn hình Trang chủ</Option>
          <Option value="notificationScreen">Màn hình Thông báo</Option>
          <Option value="cartScreen">Màn hình Giỏ hàng</Option>
        </Select>
      </Form.Item>
      <div style={{ marginBottom: 10 }}>
        <a style={{ color: "black", fontSize: 16 }}>Tiêu đề thông báo</a>
      </div>
      <Form.Item
        name="title"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập thông tin",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <div style={{ marginBottom: 10 }}>
        <a style={{ color: "black", fontSize: 16 }}>Nội dung thông báo</a>
      </div>
      <Form.Item
        name="body"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập thông tin",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item style={{ textAlign: "center" }}>
        <Button
          type="primary"
          htmlType="reset"
          style={{
            width: "20%",
            marginRight: 16,
            backgroundColor: "#DCDFE8",
            borderColor: "#DCDFE8",
            color: "#000",
          }}
        >
          Đặt lại
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            width: "20%",
            marginRight: 16,
            backgroundColor: "#87CEEB99",
            borderColor: "#87CEEB99",
            color: "#000",
          }}
        >
          Thông báo
        </Button>
      </Form.Item>
    </Form>
  );
}
