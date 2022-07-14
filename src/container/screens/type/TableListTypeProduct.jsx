import {
  Space,
  Table,
  Radio,
  Divider,
  Input,
  Image,
  Button,
  Popconfirm,
  Modal,
} from "antd";
import { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  delallopjectCategori,
  delopjectCategori,
  getOpjectCategori,
  searchopjectCategori,
} from "../../../Redux/OjectCategoriSlice";
const TableObjectProduct = () => {
  const [opject, setopject] = useState();
  const [dataId, setDataId] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalDelALl, setisModalDelALl] = useState(false);


  const { Search } = Input;


  const dispatch = useDispatch();
  const ListOpject = useSelector((data) => data.categoris.value);
  const onSearch = (value) => {
    dispatch(searchopjectCategori({ titleCategoryProduct: value }));
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const hasSelected = selectedRowKeys.length > 0;
  const showmodaldell = () => {
    setisModalDelALl(true);
  };
  const handleXoa = () => {
    dispatch(delallopjectCategori());
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
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  useEffect(() => {
    fetch(
      "http://ec2-18-141-199-110.ap-southeast-1.compute.amazonaws.com:3000/api/type-product/get-type-product"
    )
      .then((res) => res.json())
      .then((dataId) => setDataId(dataId.data));
  }, []);

  useEffect(() => {
    dispatch(getOpjectCategori());
  }, []);
  const lisdata = () => {
    if (ListOpject !== undefined) {
      const deletee = (data) => {
        dispatch(delopjectCategori({ idCategoryProduct: data }));
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
          title: "Tên thể loại",
          dataIndex: "titleCategoryProduct",
        },
        // {
        //   title: "Đối tượng",
        //   dataIndex: "idTypeProduct",
        // },
        {
          title: "Ảnh",
          dataIndex: "categoryImgProduct",
          render: (categoryImgProduct) => (
            <Image src={categoryImgProduct} alt="" style={{ width: 50 }} />
          ),
        },
        {
          title: "Hoạt động",
          dataIndex: "_id",
          render: (_id, data) => (
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Link to={`/edit_list_type/${_id}`}>
                <p style={{ color: "blue" }}>Sửa</p>
              </Link>

              <Popconfirm
                title="Bạn có chắc chắn muốn xoá không?"
                onConfirm={() => deletee(data)}
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
            columns={columns}
            rowKey={(item) => item._id}
            dataSource={ListOpject}
            loading={loading}
            style={{
              height: "100%",
            }}
            rowSelection={rowSelection}
          />
        </>
      );
    }
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          type="primary"
          onClick={showmodaldell}
          disabled={!hasSelected}
          style={{ margin: "10px 0px" }}
        >
          Delete
        </Button>

        <Search
          placeholder="Tìm kiếm theo tên"
          onSearch={onSearch}
          enterButton
          style={{ width: "30%", borderRadius: 3, marginTop: 8 }}
        />
      </div>
      {lisdata()}
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
    </>
  );
};

export default TableObjectProduct;
