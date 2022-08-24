import { Button, Form, Input } from "antd";
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
  const dispatch = useDispatch();
  const tokenData = useSelector((data) => data.notification.value);
  const onFinish = (values) => {
    var data = JSON.stringify({
      data: {},
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
  return (
    <Form
      name="nest-messages"
      onFinish={onFinish}
      style={{ margin: "50px 50px 0 50px" }}
    >
      <a>Tiêu đề thông báo</a>
      <Form.Item name="title">
        <Input />
      </Form.Item>
      <a>Nội dung thông báo</a>
      <Form.Item name="body">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          đặt lại
        </Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
