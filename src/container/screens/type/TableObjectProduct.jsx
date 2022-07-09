import { Button, Image, Input, Modal, Table } from "antd";
import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../../screens/profit/Listproduct.css";
import {
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
  const [dataEdit, setDataEdit] = useState();
  const [value, setValue] = useState();
  const showModal = async (item) => {
    console.log(item);
    await setDataEdit(item);
    setIsModalVisible(true);
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
  const listDataa = () => {
    if (typeproduct !== undefined) {
      const deletee = (_id) => {
        console.log(_id);
        dispatch(delTypeProduct(_id));
        alert("Xoá thành công");
      };
      const columns = [
        {
          title: "Đối tượng",
          dataIndex: "titleTypeProduct",
        },
        {
          title: "Hoạt động",
          dataIndex: "_id",
          render: (_id, data) => (
            <div
              style={{ display: "flex", flexDirection: "row", marginLeft: 450 }}
            >
              <EditOutlined
                style={{ width: 50 }}
                size={24}
                onClick={() => showModal(data)}
              />
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
        // onClick={start}
        disabled={!hasSelected}
        // loading={loading}
        style={{ margin: "10px 30px" }}
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
        {/* <Input
          defaultValue={dataEdit !== undefined && dataEdit.titleTypeProduct}
        /> */}
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          id="titleTypeProduct"
          value={value == undefined ? dataEdit?.titleTypeProduct : value}
        />
      </Modal>
    </div>
  );
};

export default TableObjectProduct;
