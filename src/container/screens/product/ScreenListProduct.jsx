import { AutoComplete, Button, Image, Table } from "antd";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "../profit/Listproduct.css";
import Search from "antd/lib/input/Search";
import { getAll } from "../../../API/ProductAPI";
import { ReloadOutlined } from "@ant-design/icons";
import SelectFilter from "../../../Components/type/SelectFilter";

const ScreenListProduct = () => {
  const [products, setProducts] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    const list = async () => {
      const { data: products } = await getAll();
      setProducts(products.result);
    };
    list();
  }, []);

  const listDataa = () => {
    if (products !== undefined) {
      const deletee = (id) => {
        console.log(id);
      };
      const columns = [
        {
          title: "STT",
          dataIndex: "_id",
          render: (_id, data, index) => index + 1,
        },

        {
          title: "Mã code",
          dataIndex: "code",
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
          title: "Đơn giá",
          dataIndex: "importPrice",
          render: (importPrice) => (
            <p>
              {importPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
              đ
            </p>
          ),
        },
        {
          title: "Giá bán",
          dataIndex: "price",
          render: (price) => (
            <p>{price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}đ</p>
          ),
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
                marginLeft: 10,
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
      </div>
      <div
        className="button-list"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex" }}>
          <Button
            type="primary"
            style={{
              margin: "0 0 0 30px",
              backgroundColor: "#D9D9D9",
              border: "1px solid #D9D9D9 ",
            }}
            // onClick={() => {
            //   dispatch(getTypeProduct());
            //   setSearchtitle("");
            // }}
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
            // onClick={showmodaldell}
          >
            <p style={{ color: "#000" }}>Xoá tất cả</p>
          </Button>
          <div style={{ width: "50%", margin: "0 0 0 5px" }}>
            <SelectFilter
              options={data}
              // onChange={handleChange}
              // value={dataLable}
            />
          </div>
        </div>
        <AutoComplete className="search_prd">
          <Search type="text" placeholder="Tìm kiếm sản phẩm" />
        </AutoComplete>
      </div>
      {listDataa()}
    </div>
  );
};

export default ScreenListProduct;
