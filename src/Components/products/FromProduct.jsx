import { Button, Input } from "antd";
import React, { useState } from "react";
import "./FromProduct.css";
import SelectMenWomen from "./SelectMenWomen";
import SelectOptionProduct from "./SelectOptionProduct";
import TinymceProduct from "./TinymceProduct";
function FromProduct(props) {
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
        <h3 className="_title_addproduct">Thêm sản phẩm</h3>
        <hr />
        {/* hàng 1 */}
        <div className="_inputrow1From">
          {/* tênSP */}
          <div className="_nameInputrow1">
            <p className="_text_product">Tên sản phẩm*</p>
            <Input placeholder="Tên sản phẩm" />
          </div>
          {/* nhãn hiệu */}
          <div className="_nameInputrow1">
            <p className="_text_product">Nhãn hiệu*</p>
            <Input placeholder="Nhãn hiệu sản phẩm" />
          </div>
        </div>
        {/* hàng 2 */}
        <div className="_inputrow1From">
          {/* mã số */}
          <div className="_nameInputrow1">
            <p className="_text_product">Mã số*</p>
            <Input placeholder="Mã số" />
          </div>
          {/* chất liệu */}
          <div className="_nameInputrow1">
            <p className="_text_product">Chất liệu*</p>
            <Input placeholder="Chất liệu" />
          </div>
        </div>

        {/* Hàng 3 */}
        <div className="_inputrow4From">
          {/* Chọn size*/}
          <div className="_nameInputrow4">
            <p className="_text_product">Size*</p>
            <SelectOptionProduct
              Option1={"S"}
              Option2={"M"}
              Option3={"L"}
              Option4={"XL"}
              Option5={"XXL"}
              Option6={"XXXL"}
            />
          </div>
          {/* Chọn màu */}
          <div className="_nameInputrow4">
            <p className="_text_product">Màu*</p>
            <SelectOptionProduct
              Option1={"Trắng"}
              Option2={"Đen"}
              Option3={"Đỏ"}
              Option4={"Vàng"}
              Option5={"Xanh"}
              Option6={"Be"}
            />
          </div>
          {/* giá bán */}
          <div className="_nameInputrow4">
            <p className="_text_product">Giá bán*</p>
            <Input placeholder="Giá bán" />
          </div>
          {/* đơn giá */}
          <div className="_nameInputrow4">
            <p className="_text_product">Đơn giá*</p>
            <Input placeholder="Đơn giá" />
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
          <div className="_nameInputrow4">
            <p className="_text_product">Đối tượng*</p>
            <SelectMenWomen Option1={"Nam"} Option2={"Nữ"} />
          </div>
          {/* đơn giá */}
          <div className="_nameInputrow4">
            <p className="_text_product">Thể loại*</p>
            <SelectOptionProduct
              Option1={"Đầm"}
              Option2={"Bra"}
              Option3={"Quần"}
              Option4={"Áo"}
              Option5={"Trang sức"}
              Option6={"Váy"}
            />
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
            <p className="_Title_button_product">Thêm sản phẩm</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FromProduct;
