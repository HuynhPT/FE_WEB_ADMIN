import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselBanner = () => {
  const [state, setstate] = useState();
  useEffect(() => {
    fetch("http://18.141.199.110:3000/img-first-images/get-img")
      .then((res) => res.json())
      .then((state) => {
        const newData = state.data.map((item) => item.image_ads);
        setstate(newData);
      });
  }, []);

  return (
    state !== undefined && (
      <Carousel autoplay autoplaySpeed={2000}>
        <div>
          <img src={state[1]} alt="" style={{ width: "100%", height: 150 }} />
        </div>
        <div>
          <img src={state[2]} alt="" style={{ width: "100%", height: 150 }} />
        </div>
        <div>
          <img src={state[3]} alt="" style={{ width: "100%", height: 150 }} />
        </div>
        <div>
          <img src={state[4]} alt="" style={{ width: "100%", height: 150 }} />
        </div>
      </Carousel>
    )
  );
};

export default CarouselBanner;
