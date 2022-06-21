import { Button, Input } from "antd";
import React, { useState } from "react";
import styles from "./AddBanner.module.css";
import TynimceProduct from "../../../../Components/products/TinymceProduct";

function EditBanner(props) {
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
    <div className={styles._Mcontainer_Fro}>
      <div className={styles._Mcontainer_Frompr}>
        <h3 className={styles._title_addproduct}>Thêm Banner</h3>
        <hr />
        <div className={styles._nameInputrow1}>
          <p className={styles._text_product}>Tên*</p>
          <Input placeholder="Nhập Tên" />
        </div>
        {/* Đối tượng */}
        <div className={styles._nameInputrow1}>
          <p className={styles._text_product}>Đối tượng*</p>
          <Input
            style={{
              borderRadius: 3,
            }}
            placeholder="Nhập đối tượng"
          />
        </div>
        {/* thông tin */}
        <div className={styles._nameInputrow1}>
          <p className={styles._text_product}>Thông tin chi tiết*</p>
          <TynimceProduct />
        </div>
        {/* <div className="_nameInputrow1">
                  <p className="_text_product">Thông tin chi tiết*</p>
                  <Input placeholder="Nhập thông tin" />
              </div> */}

        {/* UP ảnh*/}
        <div className={styles._nameInputrow}>
          <p className={styles._text_product}>Hình ảnh*</p>
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
              Chọn hình ảnh
            </div>
          </label>
          <input
            id="images"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => upImage(e)}
          />
        </div>

        {/* Nút ấn bắt sự kiện */}
        <div className={styles._buttonClick_Product}>
          <Button className={styles.__buttonClick_Product_Res}>
            <p className={styles._Title_button_product}>Đặt lại</p>
          </Button>
          <Button className={styles.__buttonClick_Product_add}>
            <p className={styles._Title_button_product}>Sửa Banner</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditBanner;
