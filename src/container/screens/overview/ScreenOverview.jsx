import React, { useEffect, useState } from "react";
import Row from "../../../Components/overview/Row";
import img_tds from "../../../Common/Image/img_tds.png";
import img_tcp from "../../../Common/Image/img_tcp.png";
import img_spbc from "../../../Common/Image/img_spbc.png";
import styles from "./stylesrow.module.css";
import CardChart from "../../../Components/overview/CardChart";
import { useDispatch, useSelector } from "react-redux";
import { getAllsel } from "../../../Redux/StatisticalSlice";
import {
  getAllCon,
  getAllHet,
  getAllimport,
  getAllloinhuan,
  getAllnewImport,
  getAllsum,
} from "../../../API/StatisticalApi";
import CardStatid from "../../../Components/statils/CardStatid";

const ScreenOverview = () => {
  const [dataImport, setDataImport] = useState();
  const [dataSum, setDataSum] = useState();
  const [dataloinhuan, setDataloinhuan] = useState();
  const [dataus, setData] = useState(null);

  const [conhang, setConhang] = useState();
  const [hethang, setHethang] = useState();
  const [moinhap, setMoinhap] = useState();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.login.currentUser);
  const data = useSelector((data) => data.statiscal.value);
  useEffect(() => {
    dispatch(getAllsel());
  }, []);
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
  useEffect(() => {
    const getData = async () => {
      const { data: dataSUM } = await getAllloinhuan();

      setDataloinhuan(dataSUM.totalPrice);
    };
    getData();
  }, []);
  //tổng giá trị mặc định
  const price = (1000000000)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  const prices = (100000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  const quantity = (100000)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  //tổng tiền bán được
  const priceSel = data
    ?.map((item) => item?.count)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  const phantramsel = parseFloat(priceSel) / parseFloat(prices);

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
  //lợi nhuận

  const sumloinhuan = dataloinhuan
    ?.toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  const phantramloinhuan = parseFloat(sumloinhuan) / parseFloat(price);
  useEffect(() => {
    const getDataCOn = async () => {
      const { data: dataImports } = await getAllCon();
      setConhang(dataImports.totalItems);
    };
    getDataCOn();
  }, []);
  useEffect(() => {
    const getDataHet = async () => {
      const { data: dataImports } = await getAllHet();
      setHethang(dataImports.totalItems);
    };
    getDataHet();
  }, []);
  useEffect(() => {
    const getDataHet = async () => {
      const { data: dataImports } = await getAllnewImport();
      setMoinhap(dataImports.totalItems);
    };
    getDataHet();
  }, []);
  const datas = [
    { type: "Sản phẩm còn ", value: conhang },
    { type: "Sản phẩm hết ", value: hethang },
  ];
  const nhapxuat = [
    { type: "Sản phẩm bán ", value: parseInt(sumSP) },

    { type: "Sản phẩm nhập ", value: moinhap },
  ];
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
              title={"Tổng lợi nhuận"}
              number={sumloinhuan + " vnđ"}
              color={"#87CEEB"}
              percent={phantramloinhuan}
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
              title={"Tổng doanh thu bán"}
              number={priceSel + " vnđ"}
              color={"#DDA0DD"}
              percent={phantramsel}
            />
          </div>
        </div>
      </div>
      <div className={styles.chartov}>
        <div>
          <CardStatid title={"Biểu đồ thống kê sản phẩm"} datas={datas} />
        </div>
        <div>
          <CardStatid title={"Biểu đồ thống kê nhập xuất"} datas={nhapxuat} />
        </div>
      </div>
    </div>
  );
};

export default ScreenOverview;
