import React from "react";

function ScreenForgotPassword() {
  return (
    <div className="_forgot_container">
      <p className="_forgot_title">Đổi mật khẩu mới</p>
      <div className="_forgotInputnew_container">
        <Input prefix={<LockOutlined />} className="_forgotInputnew" />
        <Input prefix={<LockOutlined />} className="_forgotInputnewres" />
      </div>
      <div>
        <Button className="_forgotbuttonnew">Xác Nhận</Button>
      </div>
    </div>
  );
}

export default ScreenForgotPassword;
