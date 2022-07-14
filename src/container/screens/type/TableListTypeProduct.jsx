import { Space, Table, Radio, Divider, Input, Image } from "antd";
import { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOpject } from "../../../Redux/OjectProductslice";

const TableObjectProduct = () => {
  const [data, setData] = useState();
  const [dataId, setDataId] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const dispatch = useDispatch();
  const opjectproduct = useSelector((data) => data.opjectproduct);

  useEffect(() => {
    fetch(
      "http://ec2-18-141-199-110.ap-southeast-1.compute.amazonaws.com:3000/api/type-product/get-type-product"
    )
      .then((res) => res.json())
      .then((dataId) => setDataId(dataId.data));
  }, []);

  useEffect(() => {
    dispatch(getOpject());
  }, []);
  console.log(opjectproduct);
  const columns = [
    {
      title: "Tên thể loại",
      dataIndex: "titleCategoryProduct",
    },
    {
      title: "Đối tượng",
      dataIndex: "idTypeProduct",
    },
    {
      title: "Ảnh",
      dataIndex: "categoryImgProduct",
      render: (categoryImgProduct) => (
        <Image src={categoryImgProduct} alt="" style={{ width: 100 }} />
      ),
    },
    {
      title: "Hoạt động",
      key: "x",
      render: () => (
        <Space>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Link to="/edit_list_type">
              <EditOutlined style={{ width: 50 }} size={24} />
            </Link>
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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  // const fetchData = (params = {}) => {
  //   setLoading(true);
  //   fetch(
  //     `https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`
  //   )
  //     .then((res) => res.json())
  //     .then(({ results }) => {
  //       setData(results);
  //       setLoading(false);
  //       setPagination({
  //         ...params.pagination,
  //         total: 10, // 200 is mock data, you should read it from server
  //         // total: data.totalCount,
  //       });
  //     });
  // };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  useEffect(() => {
    // fetchData({
    //   // pagination,
    // });
  }, []);

  // const handleTableChange = (newPagination, filters, sorter) => {
  //   fetchData({
  //     sortField: sorter.field,
  //     sortOrder: sorter.order,
  //     pagination: newPagination,
  //     ...filters,
  //   });
  // };

  return (
    <>
      <Table
        columns={columns}
        rowKey={(item) => item._id}
        dataSource={data}
        loading={loading}
        style={{
          marginBottom: 100,
        }}
        rowSelection={rowSelection}
      />
    </>
  );
};

export default TableObjectProduct;
