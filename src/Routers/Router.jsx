import React from "react";
import { Route, Routes } from "react-router-dom";

import LayoutAdmin from "../components/LayoutAdmin";

//auth
import ScreenLogin from "../container/screens/auth/ScreenLogin";
import ScreenForgotPassword from "../container/screens/auth/ScreenForgotPassword";

//Tổng quan
import ScreenOverview from "../container/screens/overview/ScreenOverview";

//Sản Phẩm
import ScreenCreateProduct from "../container/screens/product/ScreenCreateProduct";
import ScreenListProduct from "../container/screens/product/ScreenListProduct";

//Thể loại sản phẩm
import ScreenCreateTypeProduct from "../container/screens/type/ScreenCreateTypeProduct";
import ScreenListTypeProduct from "../container/screens/type/ScreenListTypeProduct";
import ScreenObjectProduct from "../container/screens/type/ScreenObjectProduct";

//Danh sách sản phẩm order
import ScreenListOrder from "../container/screens/order/ScreenListOrder";

//Lợi nhuận
import ScreenListProductProfit from "../container/screens/profit/ScreenListProductProfit";
import ScreenStatistical from "../container/screens/profit/ScreenStatistical";

//Mọi người
import ScreenInfoAdmin from "../container/screens/everyone/ScreenInfoAdmin";
import ScreenListUser from "../container/screens/everyone/ScreenListUser";

//bài viết
import ScreenCreatePost from "../container/screens/posts/ScreenCreatePost";
import ScreenListPost from "../container/screens/posts/ScreenListPost";
import FromObjectProduct from "../container/screens/type/FromObjectProduct";
import FormLogin from "../components/auth/FormLogin";
import FromUpdateTypeProduct from "../container/screens/type/FromUpdateTypeProduct";
import FromCreateTypeProduct from "../container/screens/type/FromCreateTypeProduct";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ScreenLogin />}></Route>
      <Route
        path="/shop_quen_mat_khau"
        element={<ScreenForgotPassword />}
      ></Route>
      <Route path="/shop" element={<LayoutAdmin />}>
        <Route path="tong_quan" element={<ScreenOverview />} />

        <Route path="them_sanPham" element={<ScreenCreateProduct />} />

        <Route path="danhSach_sanPham" element={<ScreenListProduct />} />

        <Route path="them_LoaiSanPham" element={<ScreenCreateTypeProduct />} />

        <Route
          path="danhSach_LoaiSanPham"
          element={<ScreenListTypeProduct />}
        />

        <Route path="doiTuong_SuDung" element={<ScreenObjectProduct />} />
        <Route path="them_the_loai" element={<FromCreateTypeProduct />} />

        <Route path="khachHang_DatHang" element={<ScreenListOrder />} />

        <Route path="sanPham_DaBan" element={<ScreenListProductProfit />} />

        <Route path="thongKe_loiNhuan" element={<ScreenStatistical />} />

        <Route path="thongTin_shop" element={<ScreenInfoAdmin />} />

        <Route path="danhSach_NguoiDung" element={<ScreenListUser />} />

        <Route path="themBai_Viet" element={<ScreenCreatePost />} />

        <Route path="danhSach_baiViet" element={<ScreenListPost />} />
      </Route>
    </Routes>
  );
};

export default Router;
