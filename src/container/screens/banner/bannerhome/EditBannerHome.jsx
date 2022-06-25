import React from 'react'
import { useState } from "react";
import "./EditBannerHome.css"
import { Button,Input } from 'antd';
import TynimceProduct from "../../../../Components/products/TinymceProduct";
import { flushSync } from 'react-dom';
function EditBannerHome() {
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
    <div className="_editbanner_home_container">
      <div className="_editbanner_home_body">
          <div className="_editbanner_home_title">
            <p>Sửa banner</p>
          </div>
          <div className="_editbanner_home_inputname">
           <p>Tên *</p>
           <Input placeholder="Nhập tên" />
          </div>
          <div className="_editbanner_home_inputobject">
           <p>Đối tượng *</p>
           <Input placeholder="Nhập đối tượng" />
          </div>
          <div className="_editbanner_home_detail">
          <p>Thông tin chi tiết *</p>
            <div className="_editbanner_home_detail_inside">
              
             <TynimceProduct /> 
            </div>
          </div>
          <div className="_editbanner_home_chooseimage">
            <p className="_editbanner_home_chooseimage_title">Hình ảnh *</p>
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
        {/* <br /> */}
        <label htmlFor="images">
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.6)",
              marginLeft:28,
              paddingLeft:20,
              height: 48,
              borderRadius: 3,
              display:'flex',
              alignItems:'center',
              width: "438px",
            }}
          >
            <label for='images'> Chọn hình ảnh</label>
            <input
          id="images"
          type="file"
          style={{display:'none' }}
          onChange={(e) => upImage(e)}
        />
          </div>
        </label>
        
          </div>
          <div className="_editbanner_home_btn">
            <Button
             htmlType="reset"
              style={{
              backgroundColor: "#DCDFE8",
              width: 200,
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
                width: 200,
                height: 48,
                backgroundColor: "#87CEEB99",
              }}
              >
              <p style={{ padding: 10 }}>Sửa banner</p>
            </Button>
          </div>
      </div>
    </div>
  )
}

export default EditBannerHome