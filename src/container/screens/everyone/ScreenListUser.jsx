import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../profit/Listproduct.css";

const ScreenListUser = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  // useEffect(() => {
  //   fetch("http://192.168.1.4:3000/account-user/get-allUsers")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);

  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const listDataa = () => {
    if (data !== undefined) {
      const deletee = (id) => {
        console.log(id);
      };
      const columns = [
        {
          title: "Tên",
          dataIndex: "name",
        },
        {
          title: "Ảnh",
          dataIndex: "photoUrl",
          render: (photoUrl) => (
            <img src={photoUrl} alt="" style={{ width: 100 }} srcset="" />
          ),
        },
        {
          title: "Số điện thoại",
          dataIndex: "phone",
          // render: (description_ads) => {
          //   <p style={{ width: 200, height: 30 }}>{description_ads}</p>;
          // },
        },
        {
          title: "Email",
          dataIndex: "email",
          // render: (description_ads) => {
          //   <p style={{ width: 200, height: 30 }}>{description_ads}</p>;
          // },
        },

        {
          title: "Action",
          dataIndex: "_id",
          render: (_id) => (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Link to="/shop/thongKe_loiNhuan">
                <EditOutlined style={{ width: 50 }} size={24} />
              </Link>
              <DeleteOutlined
                onClick={() => deletee(_id)}
                style={{ width: 50, marginTop: 5 }}
                size={24}
              />
            </div>
          ),
        },
      ];
      return (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          className="table-list"
        />
      );
    }
  };

  return (
    <div className="list-product">
      <div
        className="button-list"
        style={{
          marginBottom: 16,
        }}
      >
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
          style={{ margin: "10px 30px" }}
        >
          Reload
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
        {listDataa()}
      </div>
    </div>
  );
};

export default ScreenListUser;
