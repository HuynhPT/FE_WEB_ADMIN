import React from "react";
import Row from "../../../Components/overview/Row";
import img_tds from "../../../Common/Image/img_tds.png";
import img_tcp from "../../../Common/Image/img_tcp.png";
import img_spbc from "../../../Common/Image/img_spbc.png";
import styles from "./stylesrow.module.css";
import CardChart from "../../../Components/overview/CardChart";

const ScreenOverview = () => {
  return (
    <div className={styles.mContainer_ovew}>
      <div className={styles.container_item}>
        <div>
          <p className={styles.text_content}>
            {"Chào Graham, Buổi sáng tốt lành"}
          </p>
          <p className={styles.title_content}>
            {
              "Trang tổng quan của bạn cung cấp cho bạn các quan  điểm  về hiệu\n suất chính hoặc quy trình kinh doanh."
            }
          </p>
        </div>
        <div className={styles.row_container}>
          <div className={styles.row}>
            <Row
              img_ic={img_tds}
              title={"Tổng doanh số bán"}
              number={"$60.55"}
              color={"#87CEEB"}
              percent={50}
            />
          </div>
          <div className={styles.row}>
            <Row
              img_ic={img_tcp}
              title={"Tổng chi phí"}
              number={"$45.98"}
              color={"#FF69B4"}
              percent={70}
            />
          </div>
          <div>
            <Row
              img_ic={img_spbc}
              title={"Sản phẩm bán chạy"}
              number={"4589 triệu"}
              color={"#DDA0DD"}
              percent={55}
            />
          </div>
        </div>
      </div>
      <div className={styles.chartov}>
        <div>
          <CardChart title={"Tổng quát"} className={styles.charts} />
        </div>
        <div>
          <CardChart title={"Doanh thu so Chi phí"} />
        </div>
      </div>
    </div>
  );
};

export default ScreenOverview;
