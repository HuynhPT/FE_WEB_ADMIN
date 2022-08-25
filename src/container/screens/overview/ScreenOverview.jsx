import React, { useEffect, useState } from "react";
import Row from "../../../Components/overview/Row";
import img_tds from "../../../Common/Image/img_tds.png";
import img_tcp from "../../../Common/Image/img_tcp.png";
import img_spbc from "../../../Common/Image/img_spbc.png";
import styles from "./stylesrow.module.css";
import CardChart from "../../../Components/overview/CardChart";
import { useDispatch, useSelector } from "react-redux";
import { getAllloinhuan, getAllsum } from "../../../API/StatisticalApi";
import CardStatid from "../../../Components/statils/CardStatid";
import { getimportPriceSlice } from "../../../Redux/importPriceSlice";
import { getexportPriceSlice } from "../../../Redux/exportPriceSlice";
import { gettongDonhang } from "../../../Redux/tongDonhang";
import { gettongDonhangdagiao } from "../../../Redux/tongDonhangdagiao";
import { gettongDonhangdanggiao } from "../../../Redux/tongDonhangdanggiao";
import { gettongDonhangdangxuLy } from "../../../Redux/tongDonhangdangxuLy";
import { gettongDonhangchoxacnhan } from "../../../Redux/tongDonhangchoxacnhan";
import { getsanphamConhang } from "../../../Redux/sanphamConhang";
import { getsanphamHethang } from "../../../Redux/sanphamHethang";

const ScreenOverview = () => {
  // const [dataSum, setDataSum] = useState();
  const [dataloinhuan, setDataloinhuan] = useState();
  const [dataus, setData] = useState(null);
  //tổng giá trị mặc định
  const price = (100000000)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  const prices = (100000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.login.currentUser);
  const importsPrice = useSelector((data) => data.importPrice.value);
  const exportPrices = useSelector((data) => data.exportPrice.value);
  const sanphamnhap = useSelector((data) => data.tongnhapsanpham.value);
  const dataallbill = useSelector((data) => data.allbill.value);
  const billComplete = useSelector((data) => data.allbillcomplete.value);
  const vanchuyen = useSelector((data) => data.danggiao.value);
  const xulyly = useSelector((data) => data.dangxuly.value);
  const choxacnhannhan = useSelector((data) => data.choxacnhan.value);
  const sanphamcon = useSelector((data) => data.conhang.value);
  const sanphamhet = useSelector((data) => data.hethang.value);

  useEffect(() => {
    try {
      if (!user) {
        navigation("/");
      } else {
        setData(user.user);
        dispatch(getexportPriceSlice());

        dispatch(getimportPriceSlice());

        // dispatch(gettongDonhang());

        dispatch(gettongDonhangdagiao());

        dispatch(gettongDonhangdanggiao());

        dispatch(gettongDonhangdangxuLy());

        dispatch(gettongDonhangchoxacnhan());

        // dispatch(getsanphamConhang());

        // dispatch(getsanphamHethang());
      }
    } catch (error) {
      console.log("err");
    }
  }, []);
  // console.log(sanphamhet, 'het');
  // console.log(sanphamnhap ,'nhap')
  // useEffect(() => {
  //   const getDataSUM = async () => {
  //     const { data: dataSUM } = await getAllsum();
  //     setDataSum(dataSUM.result);
  //   };
  //   getDataSUM();
  // }, []);
  // useEffect(() => {
  //   const getData = async () => {
  //     const { data: dataSUM } = await getAllloinhuan();
  //     setDataloinhuan(dataSUM.totalPrice);
  //   };
  //   getData();
  // }, []);

  //tổng tiền bán được
  const priceSel = exportPrices
    ?.map((item) => item?.count)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  const phantramsel = (parseInt(priceSel) / parseInt(price)) * 100;
  // tổng tiền nhập
  const priceImport = importsPrice
    ?.map((item) => item?.count)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  const phantramimport = (parseInt(priceImport) / parseInt(price)) * 100;

  // console.log(importProductss, "slnhap");

  //tổng số lượng bán ra
  // const sumSP = dataSum
  //   ?.map((item) => item?.count)
  //   .toString()
  //   .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  //lợi nhuận
  const sumloinhuan = dataloinhuan
    ?.toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  const phantramloinhuan = parseFloat(sumloinhuan) / parseFloat(price);

  const datas = [
    { type: "Sản phẩm còn ", value: 3333 },
    { type: "Sản phẩm hết ", value: 3333 },
  ];
  const nhapxuat = [
    { type: "Sản phẩm bán ", value: 11111},
    { type: "Sản phẩm nhập ", value: 222 },
  ];
  const datadon = [
    { number: dataallbill, name: "Tổng hóa đơn" },
    { number: billComplete, name: "Tổng hóa đơn đã giao " },
    { number: vanchuyen, name: "Tổng hóa đơn đang vận chuyển" },
    { number: xulyly, name: "Tổng hóa đơn đang xử lý" },
    { number: choxacnhannhan, name: "Tổng hóa đơn chờ xác nhận" },
  ];
  return (
    <div className={styles.mContainer_ovew}>
      <div className={styles.container_item}>
        <div>
          <p className={styles.text_content}>
            {"Chào " + dataus?.userName + ", Ngày mới tốt lành"}
          </p>
          {/* <div style={{ alignItems:'center', justifyContent:'center'}}>
          <DateSelect />
        </div> */}
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
              number={
                importsPrice.length === 0 ? 0 + " vnđ" : priceImport + " vnđ"
              }
              color={"#FF69B4"}
              percent={phantramimport}
            />
          </div>
          <div>
            <Row
              img_ic={img_spbc}
              title={"Tổng doanh thu bán"}
              number={
                exportPrices.length === 0 ? 0 + " vnđ" : priceSel + " vnđ"
              }
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
      <div style={{ margin: 30 }}>
        <CardChart datas={datadon} />
      </div>
    </div>
  );
};

export default ScreenOverview;
