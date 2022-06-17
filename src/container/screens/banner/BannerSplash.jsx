import { Button, Table,Pagination   } from "antd";
import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../profit/Listproduct.css";
import Search from "antd/lib/input/Search";

const BannerSplash = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [setData] = useState();
  useEffect(() => {
    fetch("http://192.168.1.7:3000/img-first-images/get-first-splash")
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
  // interface DataType {
  //   key: React.Key;
  //   name: string;
  //   age: number;
  //   address: string;
  // }
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRows);
    },
  };
  const hasSelected = selectedRowKeys.length > 0;
  const data = [
    {
      key: '1',
      title_ads: 'Y',
      title_data: 20,
      description_ads: "From the search bar, you can now view what you searched for recently and explore popular searches",
    },
    {
      key: '2',
      title_ads: 'Nhu Y',
      title_data: 21,
      description_ads: "From the search bar, you can now view what you searched for recently and explore popular searches",
    },
  ];
  const listDataa = () => {
    if (data !== undefined) {
      const deletee = (id) => {
        console.log(id);
      };
      const columns = [
        // {
        //   title: "Tên",
        //   dataIndex: "title_ads",
        // },
        // {
        //   title: "Ads",
        //   dataIndex: "title_data",
        // },
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
              <Link to="/shop/edit_banner">
                <EditOutlined style={{ width: 50 }} size={24} />
              </Link>
              <Link to="/shop/edit_banner">
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
        <div>
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
        </div>
      );
    }
  };
    
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
        <Link to="/shop/add_banner">
          <button className="add_text">{" +  Thêm mới"}</button>
        </Link>
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

export default BannerSplash;
