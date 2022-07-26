import {
  AutoComplete,
  Button,
  Input,
  Modal,
  Popconfirm,
  Select,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
import "../profit/Listproduct.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Search from "antd/lib/input/Search";
import {
  delAllBill,
  FilterIdus,
  getBillOderNew,
  getBillOderOld,
  getBillProduct,
  removeBillOder,
} from "../../../Redux/BillSlice";
import { ReloadOutlined } from "@ant-design/icons";
import SelectFilter from "../../../Components/type/SelectFilter";
import axios from "axios";
import { mToken } from "../../../../token/TokenLogin";

const ScreenListOrder = () => {
  const [data, setData] = useState();
  const [isModalDelALl, setisModalDelALl] = useState();
  const [dataLable, setDataLable] = useState("Lọc theo người dùng");

  const dispatch = useDispatch();
  const billdata = useSelector((data) => data.bills.value);

  const { Option } = Select;
  useEffect(() => {
    dispatch(getBillProduct());
  }, []);

  useEffect(() => {
    axios({
      url: "http://18.141.199.110:3000/account-user/get-allUsers",
      method: "GET",
      headers: {
        token: mToken,
      },
    }).then((dataOp) => {
      const otpn = [];
      dataOp.data.result.map((item) => {
        otpn.push({ label: item.name, value: item._id });
      });
      setData(otpn);
    });
  }, []);

  const handleChangefilter = (value) => {
    if (value == "new") {
      dispatch(getBillOderNew());
    } else {
      dispatch(getBillOderOld());
    }
  };
  const handleChange = (values) => {
    console.log(values);
    setDataLable(values);
    dispatch(FilterIdus({ idUser: values }));
  };

  const showmodaldell = () => {
    setisModalDelALl(true);
  };
  const handleXoa = () => {
    dispatch(delAllBill());
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

  const deletee = (id) => {
    dispatch(
      removeBillOder({
        idBill: id,
      })
    );
  };
  const columns = [
    {
      title: "Họ",
      dataIndex: "firstName",
    },
    {
      title: "Tên",
      dataIndex: "lastName",
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
                border: "1px solid orange ",
                color: "#fff",
                backgroundColor: "orange",
                fontStyle: "italic",
                borderRadius: 20,
                opacity: 0.7,
              }}
            >
              Chờ lấy hàng
            </div>
          );
        } else if (status.toString() == 2) {
          return (
            <div
              style={{
                border: "1px solid yellow ",
                color: "#fff",
                backgroundColor: "yellow",
                fontStyle: "italic",
                borderRadius: 20,
                opacity: 0.7,
              }}
            >
              Đang vận chuyển
            </div>
          );
        } else if (status.toString() == 3) {
          return (
            <div
              style={{
                border: "1px solid yellowgreen ",
                color: "#fff",
                backgroundColor: "yellowgreen",
                fontStyle: "italic",
                borderRadius: 20,
                opacity: 0.7,
              }}
            >
              Đang giao
            </div>
          );
        } else {
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
              Hoàn thành
            </div>
          );
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
          <Link to={`/chitietBill/${_id}`}>
            <p
              style={{
                width: 50,
                color: "blue",
                cursor: "pointer",
              }}
              size={24}
            >
              Chi tiết
            </p>
          </Link>
        </div>
      ),
    },
  ];

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
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", width: "100%" }}>
          <Button
            type="primary"
            style={{
              margin: "0 0 0 30px",
              backgroundColor: "#D9D9D9",
              border: "1px solid #D9D9D9 ",
            }}
            onClick={() => {
              dispatch(getBillProduct());
              // setSearchtitle("");
            }}
          >
            <ReloadOutlined />
          </Button>
          <Button
            type="primary"
            style={{
              margin: "0 0 0 5px",
              backgroundColor: "#D9D9D9",
              border: "1px solid #D9D9D9 ",
            }}
            onClick={showmodaldell}
          >
            <p style={{ color: "#000" }}>Xoá tất cả</p>
          </Button>
          <div style={{ margin: "0 0 0 5px", width: "14%" }}>
            <SelectFilter
              options={data}
              onChange={handleChange}
              value={dataLable}
            />
          </div>
          <div style={{ width: "13%", margin: "0 0 0 5px" }}>
            <Select
              defaultValue={"Sắp xếp"}
              style={{
                width: "100%",
                backgroundColor: "#D9D9D9",
                border: "1px solid #D9D9D9 ",
              }}
              onChange={handleChangefilter}
            >
              <Option value="new">Mới nhất theo ngày</Option>
              <Option value="old">Cũ nhất theo ngày</Option>
            </Select>
          </div>
        </div>
        <AutoComplete
          className="search_prd"
          style={{}}
          //  onSearch={onsearchtype}
        >
          <Search
            type="text"
            placeholder="Tìm kiếm hoá đơn"
            // style={{ marginLeft: 30 }}
          />
        </AutoComplete>
      </div>
      <Table
        columns={columns}
        dataSource={billdata}
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

export default ScreenListOrder;
