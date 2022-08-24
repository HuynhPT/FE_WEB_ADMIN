import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../../profit/Listproduct.css";
import Search from "antd/lib/input/Search";

const BannerHome = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      "http://ec2-18-141-199-110.ap-southeast-1.compute.amazonaws.com:3000/img-first-images/get-img"
    )
      .then((response) => response.json())
      .then((data) => {
        const newData = data.data.filter((item) => item.title_data);
        setData(newData);
      });
  }, []);


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
          render: (description_ads) => (
            <div
              dangerouslySetInnerHTML={{
                __html: description_ads,
              }}
            ></div>
          ),
        },

        {
          title: "Hoạt động",
          dataIndex: "_id",
          render: (_id) => (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Link to="/edit_banner_home">
                <EditOutlined style={{ width: 50 }} size={24} />
              </Link>
              <Link to="/edit_banner_home">
              <DeleteOutlined
                onClick={() => deletee(_id)}
                style={{ width: 50, marginTop: 5 }}
                size={24}
              />
              </Link>
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
//ffd
  return (
    <div className="list-product">
      <div className="titlespb">
        <p className="text_titlespb">Danh sách sản phẩm bán được</p>
      </div>
      <div className="text_spb">
        <p className="texttitlespb">
          {
            " Danh sách sản phẩm đã bán được quyết định hiệu quả việc trình bày sản phẩm và cung cấp không gian \n để liệt kê các sản phẩm và dịch vụ của bạn theo cách hấp dẫn nhất."
          }
        </p>
        <Button href="/create_banner_home" className="add_text">
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