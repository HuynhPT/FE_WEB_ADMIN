import { Space, Table, Radio, Divider } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import qs from "qs";
const columns = [
  {
    title: "Id",
    dataIndex: "name",
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
  },
  {
    title: "Đối tượng",
    dataIndex: "gender",
    filters: [
      {
        text: "Nam",
        value: "Nam",
      },
      {
        text: "Nữ",
        value: "Nữ",
      },
      {
        text: "Trẻ em",
        value: "Trẻ em",
      },
    ],
  },
  {
    title: "Hoạt động",
    dataIndex: "",
    key: "x",
    render: () => (
      <Space>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1860/1860115.png"
          style={{ width: 20, height: 20 }}
        />
        <img
          src="https://icons.veryicon.com/png/o/commerce-shopping/soft-designer-online-tools-icon/delete-77.png"
          style={{ width: 30, height: 30 }}
          onClick={imageClick}
        />
      </Space>
    ),
  },
];

const imageClick = () => {
  console.log("ngu");
  <Link to={"../auth/ScreenLogin.jsx"} />;
};

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
    pageSize: 6,
  });

  const fetchData = (params = {}) => {
    setLoading(true);
    fetch(
      `https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setPagination({
          ...params.pagination,
          total: 200, // 200 is mock data, you should read it from server
          // total: data.totalCount,
        });
      });
  };
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

  return (
    <>
      <Table
        columns={columns}
        rowKey={(record) => record.login.uuid}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
        style={{ width: "100%", height: "100%" }}
        rowSelection={rowSelection}
      />
    </>
  );
};

export default TableObjectProduct;
