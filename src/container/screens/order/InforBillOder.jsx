import { Steps } from "antd";
import axios from "axios";
import QueryString from "qs";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mToken } from "../../../../token/TokenLogin";
import "./infro.css";
function InforBillOder() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [dataall, setDataAll] = useState();
  const [currentStep, setCurrentStep] = useState();
  const { Step } = Steps;
  useEffect(() => {
    axios({
      url: "http://18.141.199.110:3000/api/user-bill/get-bill-product",
      method: "GET",
      headers: {
        token: mToken,
      },
    }).then((resl) => {
      const newData = resl.data.bill.find((item) => item._id == id);
      setData(newData);
    });
  }, []);
  useEffect(() => {
    axios({
      url: "http://18.141.199.110:3000/api/user-detail-bill/get-detail-bill-product-byid",
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: QueryString.stringify({ idBill: id }),
    }).then((resl) => {
      setDataAll(resl.data.billDetails);
    });
  }, []);

  const onStepsChange = (newCurrentStep) => {
    console.log("onChange:", newCurrentStep);
    setCurrentStep(newCurrentStep);
  };
  const dataPrice = [];
  dataall?.map((item) => dataPrice.push(item.price * item.quantity));
  let sum = 0;
  for (let i = 0; i < dataPrice?.length; i++) {
    sum += dataPrice[i];
  }
  return (
    <div className="_allcontai">
      <div className="_cntai">
        <p className="_textHeader_m">Thông tin chi tiết hoá đơn</p>
        <div style={{ paddingTop: 10 }}>
          <p className="_title_m">Trạng thái đơn hàng:</p>
          <Steps
            current={currentStep == undefined ? data?.status : currentStep}
            onChange={onStepsChange}
            size="small"
            type="default"
          >
            <Step title="Đơn hàng" description="Chờ xác nhận" />
            <Step title="Đơn hàng" description="Chờ lấy hàng" />
            <Step title="Đơn hàng" description="Đang vận chuyển" />
            <Step title="Đơn hàng" description="Đang giao" />
            <Step title="Đơn hàng" description="Hoàn thành" />
          </Steps>
        </div>
        <hr />
        <div style={{}}>
          <p className="_title_m">Thông tin khách hàng</p>
          <p className="_title_c">
            {data?.firstName} {data?.lastName}
          </p>
          <p className="_title_c">{data?.numberPhone}</p>
          <div className="_all_d">
            <p className="_title_c">{data?.fullAddress},</p>

            <p className="_title_c">{data?.commune},</p>

            <p className="_title_c">{data?.district},</p>

            <p className="_title_c">{data?.cityProvince}</p>
          </div>
          <p className="_title_c">{data?.codeZip}</p>
          <hr />
        </div>

        <div>
          <p className="_title_m">Hình thức thanh toán</p>
          <p className="_title_c">{data?.payment}</p>
          <hr />
        </div>
        <p className="_title_m">Thông tin đơn hàng</p>

        {/* thông tin đơn hàng */}
        {dataall?.map((item) => {
          return (
            <>
              <div className="_all_m">
                <div className="_all_m">
                  <img
                    src={item?.imageProduct}
                    alt=""
                    style={{ width: 50, height: 70 }}
                  />

                  <div style={{ marginTop: 15 }}>
                    <p className="_title_l">{item?.titleProduct}</p>
                    <p className="_title_l">{item?.sizeProduct}</p>
                    <p className="_title_l">{item?.colorProduct}</p>
                  </div>
                </div>

                <div style={{ textAlign: "center" }}>
                  <p className="_title_l"> {item?.code}</p>

                  <p className="_title_l">{item?.trademark}</p>
                </div>

                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <p className="_title_l">x{item?.quantity}</p>
                  <p className="_title_l">
                    {item?.price
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
                    vnđ
                  </p>
                </div>
              </div>
            </>
          );
        })}
        <hr />
        <div className="_all_m">
          <p className=" _title_m">Thành tiền :</p>
          <span className="_title_l">
            {sum.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
            vnđ
          </span>
        </div>
      </div>
    </div>
  );
}

export default InforBillOder;
