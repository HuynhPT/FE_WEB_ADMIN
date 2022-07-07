import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import "./FromProduct.css";
import SelectMenWomen from "./SelectMenWomen";
import SelectOptionColor from "./SelectOptionColor";
import SelectOptionTypeProduct from "./SelectOptionTypeProduct";
import SelectOtionSze from "./SelectOptionSze";
import TinymceProduct from "./TinymceProduct";
import SelectOptionOpject from "./SelectOptionOpject";
import { getColor, getSize, getTheloai } from "../../API/ColorSize";
import { addAll } from "../../API/ProductAPI";
import axios from "axios";
import { useDispatch } from "react-redux";
function FromProduct(props) {
  const [nameLinkImage, setNameLinkImage] = useState([]);

  const [nameImage, setNameImage] = useState([]);

  const [valueTensp, setValueTenSP] = useState();

  const [valueThuonghieu, setValueThuonghieu] = useState();

  const [valueMaso, setValueMaso] = useState();

  const [valueChatlieu, setValueChatlieu] = useState();

  const [valueGiaban, setValueGiaban] = useState();

  const [valueDongia, setValueDongia] = useState();

  const [valueMota, setValueMota] = useState();

  const [valueSoluong, setValueSoluong] = useState();

  const [dataSize, setDatasize] = useState();
  const [dataValueSize, setDatavaluesize] = useState();

  const [dataColor, setDataColor] = useState();
  const [dataValueColor, setDataValueColor] = useState();

  const [dataType, setDatatype] = useState();
  const [dataValueType, setDataValuetype] = useState();
  const dispatch = useDispatch();
  // lấy ảnh
  const upImage = (e) => {
    const namePhoto = document.getElementById("images").files[0].name;
    if (nameImage.length > 0) {
      setNameImage([...nameImage, namePhoto]);
    } else {
      setNameImage([namePhoto]);
    }
    setNameLinkImage(e.target.files);
  };

  // lấy data size
  useEffect(() => {
    const list = async () => {
      const { data: dataSize } = await getSize();
      const dataNew = [];
      dataSize.data.map((item) => {
        dataNew.push({
          value: item.titleSize,
        });
      });
      setDatasize(dataNew);
    };
    list();
  }, []);
  const onChangeSize = (value) => {
    setDatavaluesize(value);
  };

  // lấy data color
  useEffect(() => {
    const listcolor = async () => {
      const { data: dataColor } = await getColor();
      const dataNewColor = [];
      dataColor.data.map((item) => {
        dataNewColor.push({ value: item.colorCode, label: item.titleColors });
      });
      setDataColor(dataNewColor);
    };
    listcolor();
  }, []);

  const handleChangeColor = (value) => {
    setDataValueColor(value);
  };
  // datatheloai
  useEffect(() => {
    const listcolor = async () => {
      const { data: dataType } = await getTheloai();
      const dataNewtype = [];
      dataType.data.map((item) => {
        dataNewtype.push({ value: item._id, label: item.titleCategoryProduct });
      });
      setDatatype(dataNewtype);
    };
    listcolor();
  }, []);

  const handleChangetype = (value) => {
    setDataValuetype(value);
  };
  const onHandleChnageSubmit = async () => {
    const fromdata = new FormData();
    fromdata.append("title_product", valueTensp);
    fromdata.append("trademark", valueThuonghieu);
    fromdata.append("descriptionProduct", valueMota);
    fromdata.append("code", valueMaso);
    fromdata.append("cost", Number(valueDongia));
    fromdata.append("price", Number(valueGiaban));
    fromdata.append("quantity_product", Number(valueSoluong));
    fromdata.append("material_product", valueChatlieu);
    for (let i = 0; i < nameLinkImage.length; i++) {
      fromdata.append("croppedImage", nameLinkImage[i]);
    }
    fromdata.append("size_product", dataValueSize);
    fromdata.append("color_product", dataValueColor);
    fromdata.append("idCategoryProduct", dataValueType);
    axios({
      url: "http://18.141.199.110:3000/api/product/create-product",
      method: "POST",
      headers: {
        token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmVhMDkwOTk5MDNlMTYzOWU0NzA1NSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTY2NjAxMjYsImV4cCI6MTY1OTI1MjEyNn0.PqKUaIH9CmbGKrbHE8ka0sIH7smSh249vGCALhRJSEY`,
        "Content-Type": "multipart/form-data",
      },
      data: fromdata,
    }).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err.response);
      }
    );
  };

  return (
    <div className="_Mcontainer_Fro">
      <div className="_Mcontainer_Frompr">
        <h3 className="_title_addproduct">Thêm sản phẩm</h3>
        <hr />
        {/* hàng 1 */}
        <div className="_inputrow1From">
          {/* tênSP */}
          <div className="_nameInputrow1">
            <p className="_text_product">Tên sản phẩm*</p>
            <Input
              placeholder="Tên sản phẩm"
              onChange={(e) => setValueTenSP(e.target.value)}
            />
          </div>
          {/* nhãn hiệu */}
          <div className="_nameInputrow1">
            <p className="_text_product">Thương hiệu*</p>
            <Input
              placeholder="Nhãn hiệu sản phẩm"
              onChange={(e) => setValueThuonghieu(e.target.value)}
            />
          </div>
        </div>
        {/* hàng 2 */}
        <div className="_inputrow1From">
          {/* mã số */}
          <div className="_nameInputrow1">
            <p className="_text_product">Mã số*</p>
            <Input
              placeholder="Mã số"
              onChange={(e) => setValueMaso(e.target.value)}
            />
          </div>
          {/* chất liệu */}
          <div className="_nameInputrow1">
            <p className="_text_product">Chất liệu*</p>
            <Input
              placeholder="Chất liệu"
              onChange={(e) => setValueChatlieu(e.target.value)}
            />
          </div>
        </div>

        {/* Hàng 3 */}
        <div className="_inputrow4From">
          {/* thể loại */}
          <div className="_nameInputrow4">
            <p className="_text_product">Thể loại*</p>
            <SelectOptionTypeProduct
              options={dataType}
              onChange={handleChangetype}
            />
          </div>
          {/* Chọn size*/}
          <div className="_nameInputrow4">
            <p className="_text_product">Size*</p>
            <SelectOtionSze dataSize={dataSize} onChange={onChangeSize} />
          </div>
          {/* Chọn màu */}
          <div className="_nameInputrow4">
            <p className="_text_product">Màu*</p>
            <SelectOptionColor
              dataColor={dataColor}
              onChange={handleChangeColor}
            />
          </div>
          {/* số lượng */}
          <div className="_nameInputrow4">
            <p className="_text_product">Số lượng*</p>
            <Input
              placeholder="Số lượng"
              onChange={(e) => setValueSoluong(e.target.value)}
            />
          </div>
        </div>
        {/* Hàng 4 */}
        <div className="_inputrow5From">
          {/* UP ảnh*/}
          <div className="_nameInputrow" style={{ width: "45%" }}>
            <p className="_text_product">Chọn ảnh*</p>
            {nameImage.length == 0 ? (
              <span>{nameImage}</span>
            ) : (
              <>
                {nameImage.map((item) => (
                  <>
                    <span>{item}</span>
                    <br />
                  </>
                ))}
                <Button
                  onClick={() => setNameImage([])}
                  style={{
                    marginLeft: 270,
                    marginBottom: 25,
                    height: 20,
                    borderRadius: 3,
                  }}
                >
                  <p style={{ marginTop: -8 }}>Huỷ</p>
                </Button>
              </>
            )}
            <br />
            <label htmlFor="images">
              <div
                style={{
                  border: "1px solid #DCDFE8",
                  marginTop: -20,
                  height: 30,
                  textAlign: "center",
                }}
              >
                Chọn ảnh
              </div>
            </label>
            <input
              id="images"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => upImage(e)}
            />
          </div>
          {/* giá bán */}
          <div className="_nameInputrow4">
            <p className="_text_product">Giá bán*</p>
            <Input
              placeholder="Giá bán"
              onChange={(e) => setValueGiaban(e.target.value)}
            />
          </div>
          {/* đơn giá */}
          <div className="_nameInputrow4">
            <p className="_text_product">Đơn giá*</p>
            <Input
              placeholder="Đơn giá"
              onChange={(e) => setValueDongia(e.target.value)}
            />
          </div>
        </div>
        {/* Hàng 5 */}
        <div className="_inputrow3From">
          {/* mô tả */}
          <div className="_nameInputrow2">
            <p className="_text_product">Mô tả sản phẩm*</p>
            <TinymceProduct onChangeText={(e) => setValueMota(e)} />
          </div>
        </div>
        {/* Nút ấn bắt sự kiện */}
        <div className="_buttonClick_Product">
          <Button className="__buttonClick_Product_Res">
            <p className="_Title_button_product">Đặt lại</p>
          </Button>
          <Button
            className="__buttonClick_Product_add"
            onClick={onHandleChnageSubmit}
          >
            <p className="_Title_button_product">Thêm sản phẩm</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FromProduct;
