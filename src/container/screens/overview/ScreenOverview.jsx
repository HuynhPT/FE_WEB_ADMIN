import React, { useEffect, useState } from "react";
import Row from "../../../Components/overview/Row";
import img_tds from "../../../Common/Image/img_tds.png";
import img_tcp from "../../../Common/Image/img_tcp.png";
import img_spbc from "../../../Common/Image/img_spbc.png";
import styles from "./stylesrow.module.css";
import CardChart from "../../../Components/overview/CardChart";
import { useDispatch, useSelector } from "react-redux";
import { getAllsel } from "../../../Redux/StatisticalSlice";
import { getAllimport, getAllsum } from "../../../API/StatisticalApi";

const ScreenOverview = () => {
  const [dataImport, setDataImport] = useState();
  const [dataSum, setDataSum] = useState();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.login.currentUser);
  const dataus = user.user;
  const data = useSelector((data) => data.statiscal.value);
  useEffect(() => {
    dispatch(getAllsel());
  }, []);

  useEffect(() => {
    const getDataImport = async () => {
      const { data: dataImports } = await getAllimport();
      setDataImport(dataImports.result);
    };
    getDataImport();
  }, []);
  useEffect(() => {
    const getDataSUM = async () => {
      const { data: dataSUM } = await getAllsum();
      setDataSum(dataSUM.result);
    };
    getDataSUM();
  }, []);
  //tổng giá trị mặc định
  const price = (1000000000)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  const quantity = (100000)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  //tổng tiền bán được
  const priceSel = data
    ?.map((item) => item?.count)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  const phantramsel = parseFloat(priceSel) / parseFloat(price);

  // tổng tiền nhập
  const priceImport = dataImport
    ?.map((item) => item?.count)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  const phantramimport = parseFloat(priceImport) / parseFloat(price);

  //tổng số lượng bán ra
  const sumSP = dataSum
    ?.map((item) => item?.count)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  const phantramquantity = parseFloat(sumSP) / parseFloat(quantity);

  return (
    <div className={styles.mContainer_ovew}>
      <div className={styles.container_item}>
        <div>
          <p className={styles.text_content}>
            {"Chào " + dataus?.userName + ", Ngày mới tốt lành"}
          </p>
          {/* <p className={styles.title_content}>
            {
              "Trang tổng quan của bạn cung cấp cho bạn các quan  điểm  về hiệu\n suất chính hoặc quy trình kinh doanh."
            }
          </p> */}
        </div>
        <div className={styles.row_container}>
          <div className={styles.row}>
            <Row
              img_ic={img_tds}
              title={"Tổng doanh thu bán"}
              number={priceSel + " vnđ"}
              color={"#87CEEB"}
              percent={phantramsel}
            />
          </div>
          <div className={styles.row}>
            <Row
              img_ic={img_tcp}
              title={"Tổng chi phí nhập"}
              number={priceImport + " vnđ"}
              color={"#FF69B4"}
              percent={phantramimport}
            />
          </div>
          <div>
            <Row
              img_ic={img_spbc}
              title={"Tổng sản phẩm bán"}
              number={sumSP + " chiếc"}
              color={"#DDA0DD"}
              percent={phantramquantity}
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
