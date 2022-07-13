import { Button, Image, Table } from "antd";
import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../profit/Listproduct.css";
import Search from "antd/lib/input/Search";
import { getAll } from "../../../API/ProductAPI";

const ScreenListProduct = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [products, setProducts] = useState();
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    const list = async () => {
      const { data: products } = await getAll();
      setProducts(products.data);
    };
    list();
  }, []);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRows);
    },
  };
  const hasSelected = selectedRowKeys.length > 0;

  const listDataa = () => {
    if (products !== undefined) {
      const deletee = (id) => {
        console.log(id);
      };
      const columns = [
        {
          title: "Mã code",
          dataIndex: "code",
        },
        {
          title: "Tên",
          dataIndex: "title_product",
        },
        {
          title: "Thương hiệu",
          dataIndex: "trademark",
        },
        {
          title: "Size",
          dataIndex: "size_product",
          render: (size_product) => (
            <div style={{ display: "flex" }}>
              {size_product.map((item) => {
                return <p style={{ marginRight: 10 }}> {item}</p>;
              })}
            </div>
          ),
        },
        {
          title: "Color",
          dataIndex: "color_product",
          render: (color_product) => (
            <div style={{ display: "flex" }}>
              {color_product.map((item) => {
                return (
                  <div
                    style={{
                      backgroundColor: item,
                      width: 20,
                      height: 20,
                      border: "1px solid black",
                      marginRight: 5,
                    }}
                  ></div>
                );
              })}
            </div>
          ),
        },
        {
          title: "Ảnh",
          dataIndex: "imageProduct",
          render: (imageProduct) =>
            imageProduct.map((item) => {
              return <Image src={item} alt="" style={{ width: 50 }} />;
            }),
        },
        {
          title: "Chi tiết",
          dataIndex: "descriptionProduct",
          render: (descriptionProduct) => (
            <p
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: 100,
                height: 50,
              }}
              dangerouslySetInnerHTML={{
                __html: descriptionProduct,
              }}
            />
          ),
        },
        {
          title: "Đơn giá",
          dataIndex: "importPrice",
        },
        {
          title: "Giá bán",
          dataIndex: "price",
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
                marginLeft:10
              }}
            >
              <Link to={`/edit_product/${_id}`}>
                <p style={{ color: "blue" }} size={24}>
                  Sửa
                </p>
              </Link>
              <p
                onClick={() => deletee(_id)}
                style={{ width: 50, color: "blue", cursor: "pointer" }}
                size={24}
              >
                Xoá
              </p>
              <Link to={`/infor_product/${_id}`}>
                <p
                  onClick={() => deletee(_id)}
                  style={{ width: 50, color: "blue" }}
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
        <Table
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          columns={columns}
          dataSource={products}
          rowKey={(item) => item._id}
          className="table-list"
          style={{ width: "100%" }}
        />
      );
    }
  };

  return (
    <div className="list-product">
      <div className="titlespb">
        <p className="text_titlespb">Danh sách sản phẩm </p>
      </div>
      <div className="text_spb">
        <p className="texttitlespb">
          {
            " Danh sách sản phẩm được quyết định hiệu quả việc trình bày sản phẩm và cung cấp không gian \n để liệt kê các sản phẩm và dịch vụ của bạn theo cách hấp dẫn nhất."
          }
        </p>
        <Button href="/shop/them_sanPham" className="add_text">
          <p className="text_buttonsss">{" +  Thêm mới"}</p>
        </Button>
      </div>
      <div
        className="button-list"
        style={{
          marginBottom: 16,
        }}
      >
        <Button
          type="primary"
          // onClick={start}
          disabled={!hasSelected}
          // loading={loading}
          style={{ margin: "10px 30px" }}
        >
          Delete
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

export default ScreenListProduct;
