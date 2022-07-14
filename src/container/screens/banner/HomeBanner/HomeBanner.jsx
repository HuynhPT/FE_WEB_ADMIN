import { Button, Image, Table } from "antd";
import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../../profit/Listproduct.css";
import Search from "antd/lib/input/Search";
import { getAll } from "../../../../API/ImageAPI";
import { delImg } from "../../../../Redux/Bannner";
import { useDispatch } from "react-redux";

const BannerHomee = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(
      "http://ec2-18-141-199-110.ap-southeast-1.compute.amazonaws.com:3000/img-first-images/get-img"
    )
      .then((response) => response.json())
      .then((data) => {
        const newData = data.data.filter((item) => item.title_data == "Home");
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
      const deletee = (_id) => {
        console.log(_id);
        dispatch(delImg(_id));
        alert("Xóa thành công");
        location.reload();
      };
      const columns = [
        {
          title: "STT",
          dataIndex: "_id",
          render: (_id, data, index) => index + 1,
        },
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
            <Image src={image_ads} alt="" style={{ width: 200 }} />
          ),
        },
        {
          title: "Chi tiết",
          dataIndex: "description_ads",
          render: (description_ads) => (
            <p
              dangerouslySetInnerHTML={{
                __html: description_ads,
              }}
            ></p>
          ),
          width: 200,
        },

        {
          title: "Hoạt động",
          dataIndex: "_id",
          render: (_id) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to={`/edit_banner_home/${_id}`}>
                <p style={{ width: 50, color: "blue" }} size={24}>
                  Sửa
                </p>
              </Link>
              <p
                onClick={() => deletee(_id)}
                style={{
                  width: 50,
                  color: "blue",
                  cursor: "pointer",
                }}
                size={24}
              >
                Xoá
              </p>
            </div>
          ),
        },
      ];
      return (
        <>
          <Table
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
        <p className="text_titlespb">Danh sách banner home</p>
      </div>
      <div className="text_spb">
        <p className="texttitlespb">
          {
            " Danh sách sản phẩm đã bán được quyết định hiệu quả việc trình bày sản phẩm và cung cấp không gian \n để liệt kê các sản phẩm và dịch vụ của bạn theo cách hấp dẫn nhất."
          }
        </p>
        <Button className="add_text">
          <Link to="/create_banner_home" className="text_buttonsss">
            {" +  Thêm mới"}
          </Link>
        </Button>
        {/* <Button href="/create_banner_men" className="add_text">
          <p className="_text_banner">+ Thêm mới</p>
        </Button> */}
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
            marginLeft: 30,
            marginTop: 20,
            backgroundColor: "#D9D9D9",
            border: "1px solid #D9D9D9 ",
          }}
          // onClick={showmodaldell}
        >
          <p style={{ color: "#000" }}>Xoá tất cả</p>
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

export default BannerHomee;
