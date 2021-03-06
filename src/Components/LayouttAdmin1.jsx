import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Dropdown,
  Image,
  Input,
  Layout,
  Menu,
  message,
  Modal,
} from "antd";
import {
  MenuOutlined,
  SearchOutlined,
  PlusOutlined,
  BellOutlined,
  MailOutlined,
  LogoutOutlined,
  UserSwitchOutlined,
  ReloadOutlined,
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
import imagecos from "../Common/image/imagecos.png";
import imageads from "../Common/image/imageads.png";

import Checkout from "../Common/image/Checkout.png";
import styles from "../Common/styles/Layout.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { upBanner } from "../Redux/AllBanner";
import { upUser } from "../Redux/UserSlice";
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
export const Logout = () => {
  localStorage.removeItem("persist:root", "Token");
};
console.log("Đăng xuất", Logout);
function LayouttAdmin1() {
  const [state, setState] = useState(false);
  const [dataus, setData] = useState(null);

  const [ishow, setIshow] = useState(false);

  const [passold, setPassold] = useState();
  const [passnew, setPassnew] = useState();
  const [resetpass, setRessetpass] = useState();

  const onClick = () => {};

  const user = useSelector((state) => state.auth.login.currentUser);

  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    try {
      if (!user) {
        navigation("/");
      } else {
        setData(user.user);
      }
    } catch (error) {
      console.log("err");
    }
  }, []);
  // console.log(process);
  const xacnhan = () => {
    if (
      passold == undefined ||
      passnew == undefined ||
      resetpass == undefined
    ) {
      // if (passold !== dataus?.password)
      // message.error({
      //   content: "Không được để trống",
      // });
      alert("Không được để trống mật khẩu");
    } else {
      if (passnew !== resetpass || passnew.length < 6 || resetpass.length < 6) {
        alert(
          "Mật khẩu nhập lại không khớp , Mật khẩu mới phải lớn hơn 6 ký tự"
        );
      } else {
        dispatch(
          upUser({
            idAdmin: dataus?._id,
            password: passold,
            passwordNew: passnew,
            passwordNewConfirm: resetpass,
          })
        );
        setIshow(false);
        setPassnew("");
        setPassold("");
        setRessetpass("");
      }
    }
  };
  const huy = () => {
    setPassnew("");
    setPassold("");
    setRessetpass("");
    setIshow(false);
  };

  console.log(passnew, passold, resetpass);
  const menu = (
    <>
      <Menu className={styles.dropdown}>
        <div className="menu_chi">
          <div className={styles.logo_user}>
            <Image
              src={dataus?.image}
              style={{
                width: "100%",
                height: 100,
                padding: 5,
              }}
            >
              {/* <Avatar size={44} src={dataus?.image} /> */}
            </Image>
          </div>

          <div className={styles.view_tt}>
            <div
              style={{
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#000",
                  fontSize: 15,
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                {dataus?.userName}
              </p>
              <p>{dataus?.phone}</p>
              <p>{dataus?.email}</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                textAlign: "center",
                margin: 5,
              }}
            >
              <Button
                onClick={() => {
                  setIshow(true);
                }}
                // href="/"
                icon={<ReloadOutlined />}
                type="text"
                style={{
                  border: "1px solid rgb(226, 226, 226)",
                  fontSize: 11,
                }}
              >
                Đổi mật khẩu
              </Button>
              <Button
                onClick={Logout}
                href="/"
                icon={<LogoutOutlined />}
                type="text"
                style={{
                  border: "1px solid rgb(226, 226, 226)",
                  fontSize: 11,
                }}
              >
                Đăng xuất
              </Button>
            </div>
          </div>
        </div>
      </Menu>
      {/* modal */}
      <Modal
        title="Đổi mật khẩu"
        visible={ishow}
        footer={false}
        closable={false}
      >
        <div style={{}}>
          <div style={{ marginBottom: 20 }}>
            <div style={{ margin: 5 }}>
              <Input
                placeholder="Mật khẩu cũ"
                onChange={(e) => setPassold(e.target.value)}
                value={passold}
              />
            </div>
            <div style={{ margin: 5 }}>
              <Input
                placeholder="Mật khẩu mới"
                onChange={(e) => setPassnew(e.target.value)}
                value={passnew}
              />
            </div>
            <div style={{ margin: 5 }}>
              <Input
                placeholder="Nhập lại mật khẩu mới"
                onChange={(e) => setRessetpass(e.target.value)}
                value={resetpass}
              />
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <div>
                <Button
                  htmlType="button"
                  style={{
                    border: "1px solid rgb(226, 226, 226)",
                    fontSize: 11,
                    backgroundColor: "gray",
                    color: "#fff",
                  }}
                  onClick={huy}
                >
                  Huỷ
                </Button>
              </div>
              <div>
                <Button
                  htmlType="button"
                  style={{
                    border: "1px solid rgb(226, 226, 226)",
                    fontSize: 11,
                    backgroundColor: "red",
                    color: "#fff",
                  }}
                  onClick={xacnhan}
                >
                  Xác nhận
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
  const items = [
    getItem(
      ["Tổng Quan", <NavLink to="tong_quan" />],
      "1",
      <img style={{ width: "10%" }} src={image2} alt="" />
    ),
    getItem(
      "Thể Loại",
      "sub3",
      <img style={{ width: "10%" }} src={Vector} alt="" />,
      [
        getItem(
          ["Thể loại SP", <NavLink to="doiTuong_SuDung" />],
          "3",
          <img style={{ width: "10%" }} src={imager10} alt="" />
        ),
        ,
        getItem(
          ["Thêm loại SP", <NavLink to="them_LoaiSanPham" />],
          "12",
          <img style={{ width: "10%" }} src={imager10} alt="" />
        ),
        getItem(
          ["Danh sách loại SP", <NavLink to="danhSach_LoaiSanPham" />],
          "333",
          <img style={{ width: "10%" }} src={imager10} alt="" />
        ),
      ]
    ),
    getItem(
      "Sản Phẩm",
      "sub2",
      <img style={{ width: "10%" }} src={image4} alt="" />,
      [
        getItem(
          ["Thuộc tính sản phẩm", <NavLink to="mau_size" />],
          "sub10",
          <img style={{ width: "10%" }} src={imager10} alt="" />
        ),
        getItem(
          ["Thêm sản phẩm", <NavLink to="them_sanPham" />],
          "11",
          <img style={{ width: "10%" }} src={imager10} alt="" />
        ),
        getItem(
          ["Danh sách sản phẩm", <NavLink to="danhSach_sanPham" />],
          "2",
          <img style={{ width: "10%" }} src={imager10} alt="" />
        ),
      ]
    ),

    // getItem(
    //   "Bán Hàng",
    //   "sub4",
    //   <img style={{ width: "10%" }} src={Checkout} alt="" />,
    //   [getItem("Option 4", "4"), getItem("Option 6", "13")]
    // ),
    getItem(
      ["Danh sách đặt hàng", <NavLink to="khachHang_DatHang" />],
      "sub5",
      <img style={{ width: "10%" }} src={image5} alt="" />
    ),
    getItem(
      ["Người dùng", <NavLink to="danhSach_NguoiDung" />],
      "sub7",
      <img style={{ width: "10%" }} src={image7} alt="" />
    ),
    // getItem(
    //   "Thống kê",
    //   "sub6",
    //   <img style={{ width: "10%" }} src={image6} alt="" />,
    //   [
    // getItem(
    //   ["Sản phẩm đã bán", <NavLink to="sanPham_DaBan" />],
    //   "6",
    //   <img style={{ width: "10%" }} src={imager10} alt="" />
    // ),
    // getItem(
    //   ["Thống kê", <NavLink to="thongKe_loiNhuan" />],
    //   "15",
    //   <img style={{ width: "10%" }} src={image6} alt="" />
    // ),
    // ]
    // ),
    getItem(
      "Banner quảng cáo",
      "sub11",
      <img style={{ width: "10%" }} src={imageads} alt="" />,
      [
        getItem(
          ["Banner trang chủ", <NavLink to="banner_home" />],
          "122",
          <img style={{ width: "10%" }} src={imager10} alt="" />
        ),
        getItem(
          ["Banner Nam", <NavLink to="banner_men" />],
          "177",
          <img style={{ width: "10%" }} src={imager10} alt="" />
        ),
        getItem(
          ["Banner Nữ", <NavLink to="banner_women" />],
          "178",
          <img style={{ width: "10%" }} src={imager10} alt="" />
        ),
        getItem(
          ["Splash", <NavLink to="banner_splash" />],
          "179",
          <img style={{ width: "10%" }} src={imager10} alt="" />
        ),
      ]
    ),
    // getItem(
    //   ["Thông tin cá nhân", <NavLink to="thongTin_shop" />],
    //   "sub9",
    //   <img style={{ width: "10%" }} src={image9} alt="" />
    // ),
    // getItem(
    //   "Mạng xã hội",
    //   "sub8",
    //   <img style={{ width: "10%" }} src={image8} alt="" />,
    //   [
    // getItem(
    //   ["Đăng bài viết", <NavLink to="themBai_Viet" />],
    //   "8",
    //   <img style={{ width: "10%" }} src={imager10} alt="" />
    // ),
    getItem(
      ["Mạng xã hội", <NavLink to="danhSach_baiViet" />],
      "17",
      <img style={{ width: "10%" }} src={image8} alt="" />
    ),
    //   ]
    // ),
  ];
  return (
    <Layout style={{ height: "200vh" }}>
      <Sider trigger={true} collapsible collapsed={state}>
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
      <Layout
        className="site-layout"
        style={{ height: "200vh", overflow: "hidden" }}
      >
        <Header className={styles.site_layout_background}>
          <div className="left">
            {/* <Input
              size="middle"
              placeholder="Tìm kiếm"
              prefix={<SearchOutlined />}
            /> */}
          </div>
          <div className="right">
            {/* <Button
              type="primary"
              style={{ background: "#fff", color: "black" }}
              icon={<PlusOutlined />}
            >
              Thêm mới
            </Button> */}
            <BellOutlined style={{ fontSize: 20, margin: "0 10px" }} />
            <MailOutlined style={{ fontSize: 20, marginRight: 20 }} />
            <Dropdown overlay={menu} arrow>
              <Avatar size={44} src={dataus?.image} />
            </Dropdown>
          </div>
        </Header>
        <Outlet />
      </Layout>
    </Layout>
  );
}

export default LayouttAdmin1;
