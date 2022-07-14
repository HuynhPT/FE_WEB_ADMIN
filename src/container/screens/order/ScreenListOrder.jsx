import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../profit/Listproduct.css";
import Search from "antd/lib/input/Search";

const ScreenListOrder = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "token",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzU5NmUwMzgyYzMyY2M1MTIzNTkzMiIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTczNzMxODksImV4cCI6MTY1OTk2NTE4OX0.ReGLUCX8Pf0HFCTrQ8hChRG5TdKI_sXus3K-liwWMhw"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "http://18.141.199.110:3000/api/user-bill/get-bill-product",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result.bill))
      .catch((error) => console.log("error", error));
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
          title: "Họ",
          dataIndex: "lastName",
        },
        {
          title: "Tên",
          dataIndex: "firstName",
        },
        {
          title: "SĐT",
          dataIndex: "numberPhone",
        },
        {
          title: "Địa chỉ",
          dataIndex: "fullAddress",
        },
        {
          title: "Thành phố",
          dataIndex: "cityProvince",
        },
        {
          title: "Mã code",
          dataIndex: "codeZip",
        },
        {
          title: "Trạng thái",
          dataIndex: "status",
          render: (status) => {
            if (status.toString() == 0) {
              return (
                <div
                  style={{
                    border: "1px solid red ",
                    color: "#fff",
                    backgroundColor: "red",
                    fontStyle: "italic",
                    borderRadius: 20,
                    opacity: 0.7,
                  }}
                >
                  Chờ xác nhận
                </div>
              );
            } else if (status.toString() == 1) {
              return (
                <div
                  style={{
                    border: "1px solid green ",
                    color: "#fff",
                    backgroundColor: "green",
                    fontStyle: "italic",
                    borderRadius: 20,
                    opacity: 0.7,
                  }}
                >
                  Xác nhận
                </div>
              );
            } else if (status.toString() == 2) {
              return (
                <div
                  style={{
                    border: "1px solid green ",
                    color: "#fff",
                    backgroundColor: "green",
                    fontStyle: "italic",
                    borderRadius: 20,
                    opacity: 0.7,
                  }}
                >
                  Đang vận chuyển
                </div>
              );
            } else {
              <div
                style={{
                  border: "1px solid green ",
                  color: "#fff",
                  backgroundColor: "green",
                  fontStyle: "italic",
                  borderRadius: 20,
                  opacity: 0.7,
                }}
              >
                Hoàn thành
              </div>;
            }
          },
        },
        {
          title: "Hoạt động",
          dataIndex: "_id",
          render: (_id) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                onClick={() => deletee(_id)}
                style={{ width: 50, marginTop: 5, color: "blue" , cursor:'pointer'}}
                size={24}
              >
                Xoá
              </p>
            </div>
          ),
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
        <p className="text_titlespb">Danh sách khách hàng đặt hàng</p>
      </div>
      <div className="text_spb">
        <p className="texttitlespb">
          {
            " Danh sách quyết định hiệu quả việc trình bày sản phẩm và cung cấp không gian \n để liệt kê các sản phẩm và dịch vụ của bạn theo cách hấp dẫn nhất."
          }
        </p>
        {/* <Button href="/shop/them_sanPham" className="add_text">
          <p className="text_buttonsss">{" +  Thêm mới"}</p>
        </Button> */}
      </div>
      <div className="button-list" style={{}}>
        <Button
          type="primary"
          style={{
            marginLeft: 30,
            marginTop: 25,
            backgroundColor: "#D9D9D9",
            border: "1px solid #D9D9D9 ",
          }}
          // onClick={showmodaldell}
        >
          <p style={{ color: "#000" }}>Xoá tất cả</p>
        </Button>
        <div
          className="search_prd"
          style={{
            marginTop: 15,
          }}
        >
          <p className="search_title">Tìm kiếm:</p>
          <Search type="text" placeholder="Tìm kiếm" />
        </div>
      </div>
      {listDataa()}
    </div>
  );
};

export default ScreenListOrder;
