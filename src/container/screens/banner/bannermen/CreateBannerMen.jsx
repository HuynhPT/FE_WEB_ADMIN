import { Button, Input } from "antd";
import React, { useState } from "react";
import TynimceProduct from "../../../../Components/products/TinymceProduct";
import "../bannerwonent/CreateBannerWoment.css";
function CreateBannerMen(props) {
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
    <div className="_Container_banner_name">
      <h3 className="_titile_add_wonent">Thêm banner nam</h3>
      {/* tên */}
      <div className="_input_banner_name">
        <p className="_titile_add_">Tên*</p>
        <Input
          style={{
            borderRadius: 3,
          }}
          placeholder="Nhập tên"
        />
      </div>
      {/* Đối tượng */}
      <div className="_input_banner_name">
        <p className="_titile_add_">Đối tượng*</p>
        <Input
          style={{
            borderRadius: 3,
          }}
          placeholder="Nhập đối tượng"
        />
      </div>
      {/* thông tin */}
      <div className="_input_banner_name">
        <p className="_titile_add_">Thông tin chi tiết*</p>
        <TynimceProduct />
      </div>
      {/* Ảnh */}
      <div className="_input_banner_name">
        <p className="_titile_add_">Chọn ảnh*</p>
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
            <Button onClick={() => setNameLinkImage([])} style={{ margin: 25 }}>
              Huỷ
            </Button>
          </>
        )}
        <br />
        <label htmlFor="images">
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.6)",
              marginTop: -20,
              height: 48,
              textAlign: "center",

              borderRadius: 3,
              width: "40%",
            }}
          >
            <p
              style={{
                marginTop: 10,
              }}
            >
              Chọn ảnh
            </p>
          </div>
        </label>
        <input
          id="images"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => upImage(e)}
        />
      </div>
      <div className="_Button_im">
        <Button
          htmlType="reset"
          style={{
            backgroundColor: "#DCDFE8",
            width: "20%",
            height: 48,
            margin: "0 100px",
          }}
        >
          <p style={{ padding: 10 }}>Đặt lại</p>
        </Button>
        <Button
          htmlType="submit"
          href="/shop/banner_men"
          style={{
            width: "20%",
            height: 48,
            backgroundColor: "#87CEEB99",
          }}
        >
          <p style={{ padding: 10 }}>Thêm banner</p>
        </Button>
      </div>
    </div>
  );
}

export default CreateBannerMen;
