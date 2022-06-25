import { Card, Image } from "antd";
import React from "react";
import img_avata from "../../Common/Image/avatainfo.png";
import "./stylesInfro.css";

const CardInfor = () => (
  <>
    <Card
      style={{
        width: 400,
        height: 400,
        marginTop: -100,
      }}
    >
      <div className="ava_container">
        <div style={{ flexDirection: "row", display: "flex" }}>
          <img src={img_avata} className="avatar" />
          <div style={{ marginLeft: 60, marginTop: 20 }}>
            <p>{"Name"}</p>
            <p>{"UI/UX design"}</p>
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <p>
            I’m a Ux/UI designer. I spend my whole day, practically every day,
            experimenting with new designs, making illustartion, and animation.
          </p>
          <p>Calefornia, U.S.A</p>
          <p>SMCE Corp. Lead UI/UX Designer</p>
          <p>March 25</p>
          <p>+91 01234 56789</p>
          <p>JoanDuo@property.com</p>
        </div>
      </div>
    </Card>

    <Card
      style={{
        width: 600,
        height: 400,
        marginTop: -100,
      }}
    >
      <div className="ava_container1">
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>Ux/UI designer</h1>
        </div>
        <div style={{ marginTop: 20 }}>
          <p>
            I’m a Ux/UI designer. I spend my whole day, practically every day,
            experimenting with new designs, making illustartion, and animation.
          </p>
        </div>
      </div>
    </Card>
  </>
);

export default CardInfor;
