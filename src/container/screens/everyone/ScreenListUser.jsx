import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";

import "../profit/Listproduct.css";
import Search from "antd/lib/input/Search";
import axios from "axios";

const ScreenListUser = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState();
  useEffect(() => {
    const mToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzU5NmUwMzgyYzMyY2M1MTIzNTkzMiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTc4MTMyMTEsImV4cCI6MTY2MDQwNTIxMX0.g8hsX21tAggQf5niesMc3AJ-DQLmnptO2jMvF0LWuCQ";

    axios({
      url: `http://18.141.199.110:3000/account-user/get-allUsers`,
      method: "GET",
      headers: {
        token: `Bearer ${mToken} `,
      },
    }).then(
      (res) => {
        setData(res.data.result);
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
  }, []);
  console.log(data);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRows);
    },
  };
  const hasSelected = selectedRowKeys.length > 0;

  const listDataa = () => {
    if (data !== undefined) {
      const deletee = (id) => {
        console.log(id);
      };
      const columns = [
        {
          title: "STT",
          dataIndex: "_id",
          render: (_id, data, index) => index + 1,
        },
        {
          title: "Ảnh",
          dataIndex: "photoUrl",
          render: (photoUrl) => (
            <img src={photoUrl} alt="" style={{ width: 80, height: 80 }} />
          ),
        },

        {
          title: "Tên",
          dataIndex: "name",
        },
        {
          title: "SĐT",
          dataIndex: "phone",
        },

        {
          title: "Email",
          dataIndex: "email",
        },
      ];
      return (
        <Table
          columns={columns}
          dataSource={data}
          rowKey={(item) => item._id}
          className="table-list"
        />
      );
    }
  };

  return (
    <div className="list-product">
      <div className="titlespb">
        <p className="text_titlespb">Danh sách người dùng</p>
      </div>
      <div className="text_spb">
        <p className="texttitlespb">
          {
            " Danh sách quyết định hiệu quả việc trình bày sản phẩm và cung cấp không gian \n để liệt kê các sản phẩm và dịch vụ của bạn theo cách hấp dẫn nhất."
          }
        </p>
      </div>
      <div
        className="button-list"
        style={{
          marginBottom: 16,
        }}
      >
        <Button
          type="primary"
          style={{
            margin: "10px 30px",
            backgroundColor: "#D9D9D9",
            border: "1px solid #D9D9D9 ",
          }}
        >
          <p style={{ color: "#000" }}>Xoá tất cả</p>
        </Button>
      </div>
      {listDataa()}
    </div>
  );
};

export default ScreenListUser;
