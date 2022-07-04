import { Button, Input } from "antd";
import React, { useState } from "react";
import "../../../Components/products/FromProduct.css";
import SelectMenWomen from "../../../Components/products/SelectMenWomen";
import SelectOptionColor from "../../../Components/products/SelectOptionColor";
import SelectOptionTypeProduct from "../../../Components/products/SelectOptionTypeProduct";
import SelectOtionSze from "../../../Components/products/SelectOptionSze";
import TinymceProduct from "../../../Components/products/TinymceProduct";
function EditProduct(props) {
  const [nameLinkImage, setNameLinkImage] = useState([]);
  const upImage = (e) => {
    const namePhoto = document.getElementById("images").files[0].name;
    if (nameLinkImage.length > 0) {
      setNameLinkImage([...nameLinkImage, namePhoto]);
    } else {
      setNameLinkImage([namePhoto]);
    }
  };
  return (
    <div className="_Mcontainer_Fro">
      <div className="_Mcontainer_Frompr">
        <h3 className="_title_addproduct">Sửa sản phẩm</h3>
        <hr />
        {/* hàng 1 */}
        <div className="_inputrow1From">
          {/* tênSP */}
          <div className="_nameInputrow1">
            <p className="_text_product">Tên sản phẩm*</p>
            <Input placeholder="Sửa tên sản phẩm" />
          </div>
          {/* nhãn hiệu */}
          <div className="_nameInputrow1">
            <p className="_text_product">Nhãn hiệu*</p>
            <Input placeholder="Sửa nhãn hiệu sản phẩm" />
          </div>
        </div>
        {/* hàng 2 */}
        <div className="_inputrow1From">
          {/* mã số */}
          <div className="_nameInputrow1">
            <p className="_text_product">Mã số*</p>
            <Input placeholder="Sửa mã số" />
          </div>
          {/* chất liệu */}
          <div className="_nameInputrow1">
            <p className="_text_product">Chất liệu*</p>
            <Input placeholder="Sửa chất liệu" />
          </div>
        </div>

        {/* Hàng 3 */}
        <div className="_inputrow4From">
          {/* Chọn size*/}
          <div className="_nameInputrow4">
            <p className="_text_product">Size*</p>
            <SelectOtionSze />
          </div>
          {/* Chọn màu */}
          <div className="_nameInputrow4">
            <p className="_text_product">Màu*</p>
            <SelectOptionColor />
          </div>
          {/* giá bán */}
          <div className="_nameInputrow4">
            <p className="_text_product">Giá bán*</p>
            <Input placeholder="Sửa giá bán" />
          </div>
          {/* đơn giá */}
          <div className="_nameInputrow4">
            <p className="_text_product">Đơn giá*</p>
            <Input placeholder="Sửa đơn giá" />
          </div>
        </div>
        {/* Hàng 4 */}
        <div className="_inputrow5From">
          {/* UP ảnh*/}
          <div className="_nameInputrow">
            <p className="_text_product">Chọn ảnh*</p>
            {nameLinkImage.length == 0 ? (
              <span>{nameLinkImage}</span>
            ) : (
              <>
                {nameLinkImage.map((item) => (
                  <>
                    <span>{item}</span>
                    <br />
                  </>
                ))}
                <Button
                  onClick={() => setNameLinkImage([])}
                  style={{ margin: 25 }}
                >
                  Huỷ
                </Button>
              </>
            )}
            <br />
            <label htmlFor="images">
              <div
                style={{
                  border: "1px solid #00000099",
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
          {/* Đối tượng */}
          <div className="_nameInputro">
            <p className="_text_product">Đối tượng*</p>
            <SelectMenWomen Option1={"Nam"} Option2={"Nữ"} />
          </div>
          {/* đơn giá */}
          <div className="_nameInputrow4">
            <p className="_text_product">Thể loại*</p>
            <SelectOptionTypeProduct />
          </div>
        </div>
        {/* Hàng 5 */}
        <div className="_inputrow3From">
          {/* mô tả */}
          <div className="_nameInputrow2">
            <p className="_text_product">Mô tả sản phẩm*</p>
            <TinymceProduct />
          </div>
        </div>
        {/* Nút ấn bắt sự kiện */}
        <div className="_buttonClick_Product">
          <Button className="__buttonClick_Product_Res">
            <p className="_Title_button_product">Đặt lại</p>
          </Button>
          <Button className="__buttonClick_Product_add">
            <p className="_Title_button_product">Sửa sản phẩm</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
