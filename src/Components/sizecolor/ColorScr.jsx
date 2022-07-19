import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, Table } from "antd";
import axios from "axios";
import qs from "qs";
import { mToken } from "../../../token/TokenLogin";
import { useDispatch, useSelector } from "react-redux";
import { getColorsize } from "../../Redux/ColorSlice";

const ColorScr = () => {
  const dispash = useDispatch();
  const selector = useSelector((data) => data.colorsize.value);
  useEffect(() => {
    dispash(getColorsize());
  }, []);
  const onFinish = (values) => {
    axios({
      url: "http://18.141.199.110:3000/api/size-color/create-color",
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(values),
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
    alert("Thêm màu thành công");
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "_id",
      render: (_id, data, index) => index + 1,
    },
    {
      title: "Tên màu",
      dataIndex: "titleColors",
    },
    {
      title: "Mã màu",
      dataIndex: "colorCode",
    },
  ];

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      style={{
        display: "flex",
        margin: 100,
        justifyContent: "space-between",
        alignItems: "center",
      }}
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
      <div style={{ width: "100%" }}>
        <p
          style={{
            color: "#000000",
            fontSize: 16,
            fontWeight: "700",
            fontFamily: "Open Sans",
          }}
        >
          Tên màu
        </p>
        <Form.Item name="titleColors" style={{ width: "100%" }}>
          <Input placeholder="Thêm màu" style={{ borderRadius: 3 }} />
        </Form.Item>
      </div>
      <div style={{ width: "100%" }}>
        <p
          style={{
            color: "#000000",
            fontSize: 16,
            fontWeight: "700",
            fontFamily: "Open Sans",
          }}
        >
          Mã màu
        </p>
        <Form.Item name="colorCode" style={{ width: "100%" }}>
          <Input
            placeholder="Thêm mã màu"
            style={{ borderRadius: 3 }}
            type="color"
          />
        </Form.Item>
      </div>

      <div>
        <Form.Item style={{ marginTop: 40 }}>
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

        <Table
          columns={columns}
          dataSource={selector}
          rowKey={(item) => `${item._id}`}
        />
      </div>
    </Form>
  );
};

export default ColorScr;
