import { Button, Image, Table } from "antd";
import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../../screens/profit/Listproduct.css";
import { getTypeProduct } from "../../../Redux/TypeProductSlice";
import { useDispatch, useSelector } from "react-redux";
const TableObjectProduct = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const typeproduct = useSelector((data) => data.typeproduct.value);
  useEffect(() => {
    dispatch(getTypeProduct());
  }, []);
  console.log(data);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRows);
    },
  };

  const hasSelected = selectedRowKeys.length > 0;

  const listDataa = () => {
    if (typeproduct !== undefined) {
      const deletee = (id) => {
        console.log(id);
      };
      const columns = [
        {
          title: "Đối tượng",
          dataIndex: "titleTypeProduct",
        },
        {
          title: "Hoạt động",
          dataIndex: "_id",
          render: (_id) => (
            <div
              style={{ display: "flex", flexDirection: "row", marginLeft: 450 }}
            >
              <Link to={`/edit_banner_men/${_id}`}>
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
    </div>
  );
};

export default TableObjectProduct;
