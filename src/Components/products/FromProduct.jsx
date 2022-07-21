import { Button, Input, message } from "antd";
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
import { mToken } from "../../../token/TokenLogin";
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

  const [valueSale, setValueSale] = useState();

  const [valueMota, setValueMota] = useState();

  const [valueSoluong, setValueSoluong] = useState();

  const [dataSize, setDatasize] = useState();
  const [dataValueSize, setDatavaluesize] = useState();

  const [dataColor, setDataColor] = useState();
  const [dataValueColor, setDataValueColor] = useState();

  const [dataType, setDatatype] = useState();
  const [dataValueType, setDataValuetype] = useState();
  const dispatch = useDispatch();

  const handleResert = () => {
    setNameLinkImage([]);
    setNameImage([]);
    setValueTenSP("");
    setValueThuonghieu("");
    setValueMaso("");
    setValueChatlieu("");
    setValueChatlieu("");
    setValueChatlieu("");
    setValueGiaban("");
    setValueDongia("");
    setValueSale("");
    setValueMota("");
    setValueSoluong("");
    setDatavaluesize("");
    setDataValueColor("");
    setDataValuetype("");
  };

  // lấy ảnh
  const upImage = (e) => {
    const namePhoto = document.getElementById("images").files[0].name;
    const namePhotoLink = document.getElementById("images").files[0];
    if (nameImage.length > 0) {
      setNameImage([...nameImage, namePhoto]);
    } else {
      setNameImage([namePhoto]);
    }
    if (nameLinkImage.length == 0) {
      setNameLinkImage([namePhotoLink]);
    } else if (nameLinkImage.length > 0) {
      setNameLinkImage([...nameLinkImage, namePhotoLink]);
    }
  };

  // lấy data size
  useEffect(() => {
    const list = async () => {
      const { data: dataSize } = await getSize();
      const dataNew = [];
      dataSize.result.map((item) => {
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
      dataColor.result.map((item) => {
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
    fromdata.append("titleProduct", valueTensp);
    fromdata.append("trademark", valueThuonghieu);
    fromdata.append("descriptionProduct", valueMota);
    fromdata.append("code", valueMaso);
    // fromdata.append("flashSale", valueSale);
    fromdata.append("importPrice", Number(valueDongia));
    fromdata.append("price", Number(valueGiaban));
    fromdata.append("quantity_product", Number(valueSoluong));
    fromdata.append("material_product", valueChatlieu);
    for (let i = 0; i < nameLinkImage.length; i++) {
      fromdata.append("croppedImage", nameLinkImage[i]);
    }
    for (let i = 0; i < dataValueSize.length; i++) {
      console.log(`size_product[${i}]`, dataValueSize[i]);
      fromdata.append(`size_product[${i}]`, dataValueSize[i]);
    }
    for (let i = 0; i < dataValueColor.length; i++) {
      console.log(`color_product[${i}]`, dataValueColor[i]);
      fromdata.append(`color_product[${i}]`, dataValueColor[i]);
    }
    fromdata.append("idCategoryProduct", dataValueType);
    axios({
      url: "http://18.141.199.110:3000/api/product/create-product",
      method: "POST",
      headers: {
        token: mToken,
        "Content-Type": "multipart/form-data",
      },
      data: fromdata,
    }).then(
      (res) => {
        if (res.data.code === 200) {
          message.success({
            content: "Thêm sản phẩm thành công",
            style: { color: "green" },
          });
        } else {
          message.error({
            content: "Thêm sản phẩm thất bại",
            style: { color: "red" },
          });
        }
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
              value={valueTensp}
            />
          </div>
          {/* nhãn hiệu */}
          <div className="_nameInputrow1">
            <p className="_text_product">Thương hiệu*</p>
            <Input
              placeholder="Nhãn hiệu sản phẩm"
              onChange={(e) => setValueThuonghieu(e.target.value)}
              value={valueThuonghieu}
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
              value={valueMaso}
            />
          </div>
          {/* chất liệu */}
          <div className="_nameInputrow1">
            <p className="_text_product">Chất liệu*</p>
            <Input
              placeholder="Chất liệu"
              onChange={(e) => setValueChatlieu(e.target.value)}
              value={valueChatlieu}
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
              defaultValue={dataValueType}
            />
          </div>
          {/* Chọn size*/}
          <div className="_nameInputrow4">
            <p className="_text_product">Size*</p>
            <SelectOtionSze
              dataSize={dataSize}
              onChange={onChangeSize}
              defaultValue={dataValueSize}
            />
          </div>
          {/* Chọn màu */}
          <div className="_nameInputrow4">
            <p className="_text_product">Màu*</p>
            <SelectOptionColor
              dataColor={dataColor}
              onChange={handleChangeColor}
              defaultValue={dataValueColor}
            />
          </div>
          {/* số lượng */}
          <div className="_nameInputrow4">
            <p className="_text_product">Số lượng*</p>
            <Input
              placeholder="Số lượng"
              onChange={(e) => setValueSoluong(e.target.value)}
              value={valueSoluong}
            />
          </div>
        </div>
        {/* Hàng 4 */}
        <div className="_inputrow5From">
          {/* UP ảnh*/}
          <div className="_nameInputrow">
            <p className="_text_product">Chọn ảnh*</p>
            {nameImage.length == 0 ? (
              <span>{nameImage}</span>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {nameImage.map((item) => (
                    <>
                      <span>{item}</span>
                      <br />
                    </>
                  ))}
                </div>

                <div>
                  <Button
                    onClick={() => setNameImage([])}
                    style={{
                      marginTop: 85,
                      height: 20,
                      borderRadius: 3,
                    }}
                  >
                    <p style={{ marginTop: -8 }}>Huỷ</p>
                  </Button>
                </div>
              </div>
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
              style={{ display: "none", width: "70%" }}
              onChange={(e) => upImage(e)}
            />
          </div>
          {/* Đơn giá */}
          <div className="_nameInputrow4">
            <p className="_text_product">Đơn giá*</p>
            <Input
              placeholder="Đơn giá"
              onChange={(e) => setValueDongia(e.target.value)}
              value={valueDongia}
            />
          </div>
          {/* ok */}
          {/* giá bán */}
          <div className="_nameInputrow4">
            <p className="_text_product">Giá bán*</p>
            <Input
              placeholder="Giá bán"
              onChange={(e) => setValueGiaban(e.target.value)}
              value={valueGiaban}
            />
          </div>
          {/* Sale*/}
          {/* <div className="_nameInputrow4">
            <p className="_text_product">Sale*</p>
            <Input
              placeholder="Sale"
              onChange={(e) => setValueSale(e.target.value)}
              value={valueSale}
            />
          </div> */}
        </div>
        {/* Hàng 5 */}
        <div className="_inputrow3From">
          {/* mô tả */}
          <div className="_nameInputrow2">
            <p className="_text_product">Mô tả sản phẩm*</p>
            <TinymceProduct
              onChangeText={(e) => setValueMota(e)}
              initialValue={valueMota}
            />
          </div>
        </div>
        {/* Nút ấn bắt sự kiện */}
        <div className="_buttonClick_Product">
          <Button className="__buttonClick_Product_Res" onClick={handleResert}>
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
