import React, { useState } from "react";
import { Avatar, Button, Dropdown, Input, Layout, Menu } from "antd";
import {
  MenuOutlined,
  SearchOutlined,
  PlusOutlined,
  BellOutlined,
  MailOutlined,
  LogoutOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Content, Header } from "antd/lib/layout/layout";
import "../Common/Styles/Layout.css";
import logo from "../Common//image/Logo.png";
import image2 from "../Common/image/image2.png";
import image4 from "../Common/image/image4.png";
import Vector from "../Common/image/Vector.png";
import image5 from "../Common/image/image5.png";
import image6 from "../Common/image/image6.png";
import image7 from "../Common/image/image7.png";
import image8 from "../Common/image/image8.png";
import image9 from "../Common/image/image9.png";
import imager10 from "../Common/image/imager10.png";

import Checkout from "../Common/image/Checkout.png";
import styles from "../Common/styles/Layout.module.css";
import { NavLink, Outlet } from "react-router-dom";
const { Sider } = Layout;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
function LayoutAdmin() {
  const [state, setState] = useState(false);
  const onClick = (e) => {};

  const menu = (
    <Menu className={styles.dropdown}>
      <div className="menu_chi">
        <div className={styles.logo_user}>
          <Avatar
            size={44}
            src={
              "https://cdn.nguyenkimmall.com/images/detailed/555/may-anh-cho-nguoi-moi.jpg"
            }
          />
        </div>
        <div className={styles.view_tt}>
          <div className="tt">NewYork Mỹ</div>
          <div>+998766546778 </div> <div> Adomitosws</div>
          <div style={{ justifyContent: "center", textAlign: "center" }}>
            <Button
              icon={<LogoutOutlined />}
              type="text"
              style={{
                border: "1px solid rgb(226, 226, 226)",
                marginLeft: 10,
              }}
            >
              Đăng xuất
            </Button>
          </div>
        </div>
      </div>
    </Menu>
  );
  const items = [
    getItem(
      ["Tổng Quan", <NavLink to="tong_quan" />],
      "1",
      <img style={{ width: "10%" }} src={image2} alt="" />
    ),
    getItem(
      "Sản Phẩm",
      "sub2",
      <img style={{ width: "10%" }} src={image4} alt="" />,
      [
        getItem(
          ["Danh sách sản phẩm", <NavLink to="danhSach_sanPham" />],
          "2",
          <img style={{ width: "10%" }} src={imager10} alt="" />
        ),
        getItem(
          ["Thêm sản phẩm", <NavLink to="them_sanPham" />],
          "11",
          <img style={{ width: "10%" }} src={imager10} alt="" />
        ),
      ]
    ),
    getItem(
      "Thể Loại",
      "sub3",
      <img style={{ width: "10%" }} src={Vector} alt="" />,
      [
        getItem(
          ["Đối tượng sử dụng", <NavLink to="doiTuong_SuDung" />],
          "3",
          <img style={{ width: "10%" }} src={imager10} alt="" />
        ),
        ,
        getItem(
          ["Thêm loại sản phẩm", <NavLink to="them_LoaiSanPham" />],
          "12",
          <img style={{ width: "10%" }} src={imager10} alt="" />
        ),
        getItem(
          ["Danh sách thể loại", <NavLink to="danhSach_LoaiSanPham" />],
          "333",
          <img style={{ width: "10%" }} src={imager10} alt="" />
        ),
      ]
    ),
    getItem(
      "Bán Hàng",
      "sub4",
      <img style={{ width: "10%" }} src={Checkout} alt="" />,
      [getItem("Option 4", "4"), getItem("Option 6", "13")]
    ),
    getItem(
      ["Khách hàng đặt hàng", <NavLink to="khachHang_DatHang" />],
      "sub5",
      <img style={{ width: "10%" }} src={image5} alt="" />
    ),
    getItem(
      "Lợi Nhuận",
      "sub6",
      <img style={{ width: "10%" }} src={image6} alt="" />,
      [
        getItem(
          ["Sản phẩm đã bán", <NavLink to="sanPham_DaBan" />],
          "6",
          <img style={{ width: "10%" }} src={imager10} alt="" />
        ),
        getItem(
          ["Thống kê lợi nhuận", <NavLink to="thongKe_loiNhuan" />],
          "15",
          <img style={{ width: "10%" }} src={imager10} alt="" />
        ),
      ]
    ),
    getItem(
      "Mạng xã hội",
      "sub8",
      <img style={{ width: "10%" }} src={image8} alt="" />,
      [
        getItem(
          ["Đăng bài viết", <NavLink to="themBai_Viet" />],
          "8",
          <img style={{ width: "10%" }} src={imager10} alt="" />
        ),
        getItem(
          ["Bài viết của bạn", <NavLink to="danhSach_baiViet" />],
          "17",
          <img style={{ width: "10%" }} src={imager10} alt="" />
        ),
      ]
    ),
    getItem(
      ["Người dùng", <NavLink to="danhSach_NguoiDung" />],
      "sub7",
      <img style={{ width: "10%" }} src={image7} alt="" />
    ),
    getItem(
      ["Thông tin cá nhân", <NavLink to="thongTin_shop" />],
      "sub9",
      <img style={{ width: "10%" }} src={image9} alt="" />
    ),
  ];
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={state}>
        <div className={styles.logo}>
          {state == false && (
            <div className="logo" style={{ width: "50%" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={logo}
                alt=""
              />
            </div>
          )}

          <MenuOutlined
            onClick={() => setState(!state)}
            style={
              state == false
                ? {
                    width: "50%",
                    fontSize: 20,
                    textAlign: "right",
                    marginRight: 10,
                  }
                : {
                    width: "100%",
                    fontSize: 20,
                    textAlign: "center",
                    margin: "20px 0",
                  }
            }
          />
        </div>
        <Menu
          onClick={onClick}
          mode="inline"
          items={items}
          defaultSelectedKeys={1}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className={styles.site_layout_background}>
          <div className="left">
            <Input
              size="middle"
              placeholder="Tìm kiếm"
              prefix={<SearchOutlined />}
            />
          </div>
          <div className="right">
            <Button
              type="primary"
              style={{ background: "#fff", color: "black" }}
              icon={<PlusOutlined />}
            >
              Thêm mới
            </Button>
            <BellOutlined style={{ fontSize: 20, margin: "0 10px" }} />
            <MailOutlined style={{ fontSize: 20, marginRight: 20 }} />
            <Dropdown overlay={menu} arrow>
              <Avatar
                size={44}
                src={
                  "https://cdn.nguyenkimmall.com/images/detailed/555/may-anh-cho-nguoi-moi.jpg"
                }
              />
            </Dropdown>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutAdmin;
