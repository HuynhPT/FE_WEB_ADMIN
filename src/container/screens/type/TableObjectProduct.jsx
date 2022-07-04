import { Space, Table, Radio, Divider, Input } from "antd";
import { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";
import qs from "qs";

const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const TableObjectProduct = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [pagination, setPagination] = useState({
    current: 2,
    pageSize: 8,
    width: 1000,
  });

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const fetchData = (params = {}) => {
    setLoading(true);
    fetch("http://18.141.199.110:3000/api/type-product/get-type-product")
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          setData(data.data);
          setLoading(false);
          setPagination({
            ...params.pagination,
            total: 50, // 200 is mock data, you should read it from server
            // total: data.totalCount,
          });
        }
      });
  };
  console.log(data);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  useEffect(() => {
    fetchData({
      pagination,
    });
  }, []);

  const handleTableChange = (newPagination, filters, sorter) => {
    fetchData({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination: newPagination,
      ...filters,
    });
  };

  const columns = [
    {
      title: "Đối tượng",
      dataIndex: "titleTypeProduct",
    },
    {
      title: "Hoạt động",
      dataIndex: "_id",
      key: "x",
      render: (_id) => (
        <Space>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <EditOutlined
              style={{ width: 50 }}
              size={24}
              onClick={handleClickOpen}
            />
            <DeleteOutlined
              onClick={() => deletee(_id)}
              style={{ width: 50, marginTop: 5 }}
              size={24}
            />
          </div>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        // rowKey={(record) => record.login.uuid}
        dataSource={data}
        pagination={pagination}
        onChange={handleTableChange}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          marginRight: 100,
        }}
        rowSelection={rowSelection}
      />
      <div style={{ width: 548, height: 497 }}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Sửa đối tượng sử dụng</DialogTitle>
          <DialogContent>
            <Input
              placeholder="Nhập : Nam, Nữ, Trẻ em"
              style={{ width: 300, height: 29 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Hủy</Button>
            <Button onClick={handleClose}>Sửa</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default TableObjectProduct;
