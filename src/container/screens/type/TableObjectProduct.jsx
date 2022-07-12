import {
  Alert,
  Button,
  Image,
  Input,
  message,
  Modal,
  Popconfirm,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../../screens/profit/Listproduct.css";
import {
  dellAllTypeProduct,
  delTypeProduct,
  getTypeProduct,
  upTypeProduct,
} from "../../../Redux/TypeProductSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const TableObjectProduct = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const typeproduct = useSelector((data) => data.typeproduct.value);
  useEffect(() => {
    dispatch(getTypeProduct());
  }, []);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRows);
    },
  };
  const hasSelected = selectedRowKeys.length > 0;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalDelALl, setisModalDelALl] = useState(false);
  const [dataEdit, setDataEdit] = useState();
  const [value, setValue] = useState();
  const showModal = async (item) => {
    console.log(item);
    await setDataEdit(item);
    setIsModalVisible(true);
  };

  const showmodaldell = () => {
    setisModalDelALl(true);
  };
  const handleOk = () => {
    const titleTypeProduct = document.getElementById("titleTypeProduct").value;
    let formdata = new FormData();
    formdata.append("titleTypeProduct", titleTypeProduct);
    dispatch(upTypeProduct({ id: dataEdit._id, data: titleTypeProduct }));
    setDataEdit();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setDataEdit();
    setIsModalVisible(false);
  };

  const handleXoa = () => {
    dispatch(dellAllTypeProduct());
    setisModalDelALl(false);
    message.success({
      content: "Xoá thành công",
      className: "custom-class",
      style: {
        color: "#52c41a",
      },
      icon: () => <CheckCircleTwoTone twoToneColor="#52c41a" />,
      duration: 2,
    });
  };
  const handleHuy = () => {
    setisModalDelALl(false);
  };
  const listDataa = () => {
    if (typeproduct !== undefined) {
      const deletee = (_id) => {
        dispatch(delTypeProduct(_id));
        message.success({
          content: "Xoá thành công",
          className: "custom-class",
          style: {
            color: "#52c41a",
          },
          icon: () => <CheckCircleTwoTone twoToneColor="#52c41a" />,
          duration: 2,
        });
      };
      const columns = [
        {
          title: "STT",
          dataIndex: "_id",
          render: (_id, data, index) => index + 1,
        },
        {
          title: "Đối tượng",
          dataIndex: "titleTypeProduct",
        },
        {
          title: "Hoạt động",
          dataIndex: "_id",
          render: (_id, data) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{ width: 50, cursor: "pointer", color: "blue" }}
                size={24}
                onClick={() => showModal(data)}
              >
                Sửa
              </p>

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
        <>
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
            columns={columns}
            dataSource={typeproduct}
            rowKey={(item) => item._id}
            className="table-list"
          />
        </>
      );
    }
  };

  return (
    <div>
      <Button
        type="primary"
        disabled={!hasSelected}
        style={{ margin: "10px 30px" }}
        onClick={showmodaldell}
      >
        Delete
      </Button>
      {listDataa()}
      <Modal
        title="Sửa đối tượng sử dụng"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          id="titleTypeProduct"
          value={value == undefined ? dataEdit?.titleTypeProduct : value}
          style={{ width: "90%" }}
        />
      </Modal>
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

export default TableObjectProduct;
