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
          render: (size_product) =>
            size_product.map((item) => {
              return <p> {item}</p>;
            }),
        },
        {
          title: "Color",
          dataIndex: "color_product",
          render: (color_product) =>
            color_product.map((item) => {
              return (
                <div
                  style={{
                    backgroundColor: item,
                    width: 20,
                    height: 20,
                    border: "1px solid black",
                  }}
                ></div>
              );
            }),
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
          render: (descriptionProduct) => {
            <div
              dangerouslySetInnerHTML={{
                _html: descriptionProduct,
              }}
            ></div>;
          },
        },

        {
          title: "Hoạt động",
          dataIndex: "_id",
          render: (_id) => (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Link to="/edit_product">
                <EditOutlined style={{ width: 50 }} size={24} />
              </Link>
              <DeleteOutlined
                onClick={() => deletee(_id)}
                style={{ width: 50, marginTop: 5 }}
                size={24}
              />
              <FileSearchOutlined
                onClick={() => deletee(_id)}
                style={{ width: 50, marginTop: 5 }}
                size={24}
              />
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
