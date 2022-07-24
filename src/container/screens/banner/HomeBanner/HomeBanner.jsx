import { AutoComplete, Button, Image, message, Modal, Popconfirm, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../profit/Listproduct.css";
import Search from "antd/lib/input/Search";
import { useDispatch, useSelector } from "react-redux";
import { delallBanner, delBanner, getBanner, getBannertitle } from "../../../../Redux/AllBanner";
import { ReloadOutlined } from "@ant-design/icons";

const BannerHomee = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalDelALl, setisModalDelALl] = useState(false);


  const dispatch = useDispatch();
  const databanner = useSelector(data => data.banners.value)


  useEffect(() => {
    dispatch(getBannertitle({
      title_data: 'Home'
    }))
  }, []);

  const showmodaldell = () => {
    setisModalDelALl(true);
  };
  const handleXoa = () => {
    dispatch(delallBanner());
    setisModalDelALl(false);
    message.success({
      content: "Xoá thành công",
      className: "custom-class",
      style: {
        color: "#52c41a",
      },
      duration: 2,
    });
  };
  const handleHuy = () => {
    setisModalDelALl(false);
  };

  const deletee = (_id) => {
    console.log(_id);
    dispatch(delBanner({ id: _id }));
    alert("Xóa thành công");
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

          <Popconfirm
            title="Bạn có chắc chắn muốn xoá không?"
            onConfirm={() => deletee(_id)}
            okText="Xoá"
            cancelText="Huỷ"
          >
            <p
              style={{ width: 50, cursor: "pointer", color: "blue" }}
              size={24}
            >
              Xoá
            </p>
          </Popconfirm>
        </div>
      ),
    },
  ];




  return (
    <div className="list-product">
      <div className="titlespb">
        <p className="text_titlespb">Danh sách banner home</p>
      </div>
      <div className="text_spb">
        {/* <p className="texttitlespb">
          {
            " Danh sách sản phẩm đã bán được quyết định hiệu quả việc trình bày sản phẩm và cung cấp không gian \n để liệt kê các sản phẩm và dịch vụ của bạn theo cách hấp dẫn nhất."
          }
        </p> */}
        <Button className="add_text" >
          <Link to="/create_banner_home" className="text_buttonsss">
            {" +  Thêm mới"}
          </Link>
        </Button>
        {/* <Button href="/create_banner_men" className="add_text">
          <p className="_text_banner">+ Thêm mới</p>
        </Button> */}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Button
            type="primary"
            style={{
              margin: "0 0 0 30px",
              backgroundColor: "#D9D9D9",
              border: "1px solid #D9D9D9 ",
            }}
            onClick={() => {
              dispatch(getBannertitle({
                title_data: 'Home'
              }));
              // setSearchtitle("");
            }}
          >
            <ReloadOutlined />
          </Button>

          <Button
            type="primary"
            style={{
              margin: "0 10px",
              backgroundColor: "#D9D9D9",
              border: "1px solid #D9D9D9 ",
            }}
            onClick={showmodaldell}
          >
            <p style={{ color: "#000" }}>Xoá tất cả</p>
          </Button>
        </div>
        <AutoComplete
          // onSearch={onsearchtype}
          style={{ width: "21%", marginRight: 30 }}
        >
          <Search
            // onChange={(e) => setSearchtitle(e.target.value)}
            placeholder="Tìm kiếm theo tên"
          // value={searchtitle}
          />
        </AutoComplete>
      </div>
      <Table
        columns={columns}
        dataSource={databanner}
        rowKey={(item) => item._id}
        className="table-list"
      />
      <Modal title="Cảnh báo !" visible={isModalDelALl} footer={null}>
        <p>Bạn có chắc chắn muốn xoá hay không?</p>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <button
            style={{
              backgroundColor: "#fff",
              border: "1px solid #000",
              margin: 10,
              padding: " 8px 16px",
              borderRadius: 3,
            }}
            onClick={handleHuy}
          >
            Huỷ
          </button>
          <button
            style={{
              backgroundColor: "red",
              border: "1px solid #000",
              margin: 10,
              padding: " 8px 16px",
              color: "#fff",
              borderRadius: 3,
            }}
            onClick={handleXoa}
          >
            Xoá
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BannerHomee;
