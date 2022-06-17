import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../profit/Listproduct.css";
import Search from "antd/lib/input/Search";

const BannerHome = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://huynhpt.github.io/home.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  // const start = () => {
  //   setLoading(true); // ajax request after empty completing

  //   setTimeout(() => {
  //     setSelectedRowKeys([]);
  //     setLoading(false);
  //   }, 1000);
  // };

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
          title: "Tên",
          dataIndex: "title_ads",
        },
        {
          title: "Ads",
          dataIndex: "title_data",
        },
        {
          title: "Ảnh",
          dataIndex: "image_ads",
          render: (image_ads) => (
            <img src={image_ads} alt="" style={{ width: 200 }} />
          ),
        },
        {
          title: "Chi tiết",
          dataIndex: "description_ads",
        },

        {
          title: "Hoạt động",
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
        <>
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            rowKey={(item) => item._id}
            className="table-list"
          />
        </>
      );
    }
  };

  return (
    <div className="list-product">
      <div className="titlespb">
        <p className="text_titlespb">Danh sách BannerHome</p>
      </div>
      <div className="text_spb">
        <p className="texttitlespb">
          {
            " Danh sách sản phẩm đã bán được quyết định hiệu quả việc trình bày sản phẩm và cung cấp không gian \n để liệt kê các sản phẩm và dịch vụ của bạn theo cách hấp dẫn nhất."
          }
        </p>
        <Button href="/create_banner_men" className="add_text">
          <p className="_text_banner">+ Thêm mới</p>
        </Button>
      </div>
      <div
        className="button-list"
        style={{
          marginBottom: 16,
        }}
      >
        <Button
          type="primary"
          // onClick={start}
          disabled={!hasSelected}
          // loading={loading}
          style={{ margin: "10px 30px" }}
        >
          Delete
        </Button>
        <div className="search_prd">
          <p className="search_title">Tìm kiếm:</p>
          <Search type="text" placeholder="Tìm kiếm" />
        </div>
      </div>
      {listDataa()}
    </div>
  );
};

export default BannerHome;
