import { Card, Image } from "antd";
import React from "react";
import img_login from "../../Common/Image/img_login.png";
import "./stylesInfro.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const CardInfor = () => {
  const dispatch = useDispatch();
  const user = useSelector((data) => console.log(data.auth.login, "info"));
  // useEffect(() => {
  //   dispatch();
  // }, []);
  return (
    <Card
      style={{
        width: 350,
        height: 150,
        marginTop: -100,
      }}
    >
      <div className="__ava_container">
        <img src={user?.image} className="__avatar" />
        <div style={{ marginLeft: 50 }}>
          <p>{user?.userName}</p>
          <p>{user?.phone}</p>
          <p>{user?.email}</p>
        </div>
      </div>
    </Card>
  );
};

export default CardInfor;
