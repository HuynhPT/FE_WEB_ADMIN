import { Card, Image } from "antd";
import React from "react";
import img_login from "../../Common/Image/img_login.png";
import "./stylesInfro.css";

const CardInfor = () => (
  <Card
    style={{
      width: 450,
      height: 380,
      marginTop: -100,
    }}
  >
    <div className="ava_container">
      <img src={img_login} className="avatar" />
      <div>
        <p>{"Name"}</p>
        <p>{"UI/UX design"}</p>
      </div>
    </div>
    <p>
      I’m a Ux/UI designer. I spend my whole day, practically every day,
      experimenting with new designs, making illustartion, and animation.
    </p>
    <p>Calefornia, U.S.A</p>
    <p>SMCE Corp. Lead UI/UX Designer</p>
    <p>March 25</p>
    <p>+91 01234 56789</p>
    <p>JoanDuo@property.com</p>
  </Card>
);

export default CardInfor;
