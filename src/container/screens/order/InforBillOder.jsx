import { Modal, Steps } from "antd";
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
  const [curent, setCurrent] = useState(0);
  const [isModal, setisModal] = useState(false);
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
  const Showmodal = (index) => {
    setCurrentStep(index);
    setisModal(true);
  };
  const handleHuy = () => {
    if (currentStep === 0) {
      setCurrent(0);
      setisModal(false);
    } else if (currentStep === 1) {
      setCurrent(0);
      setisModal(false);
    } else if (currentStep === 2) {
      setCurrent(1);
      setisModal(false);
    } else if (currentStep === 3) {
      setCurrent(2);
      setisModal(false);
    } else if (currentStep === 4) {
      setCurrent(3);
      setisModal(false);
    } else if (currentStep === 5) {
      setCurrent(4);
      setisModal(false);
    }
  };
  const handleXacnhan = () => {
    // setisModal(false);

    if (currentStep === 0) {
      setCurrent(0);
      setisModal(false);
    } else if (currentStep === 1) {
      setCurrent(1);
      setisModal(false);
    } else if (currentStep === 2) {
      setCurrent(2);
      setisModal(false);
    } else if (currentStep === 3) {
      setCurrent(3);
      setisModal(false);
    } else if (currentStep === 4) {
      setCurrent(4);
      setisModal(false);
    } else if (currentStep === 5) {
      setCurrent(5);
      setisModal(false);
    }
  };
  console.log(curent);
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
            current={curent == undefined ? data?.status : curent}
            // onChange={onStepsChange}
            size="small"
            type="default"
          >
            <Step
              title="Đơn hàng"
              description="Đang xử lý"
              onStepClick={Showmodal}
            />
            <Step
              title="Đơn hàng"
              description="Đã xử lý"
              onStepClick={Showmodal}
            />
            <Step
              title="Đơn hàng"
              description="Xác nhận"
              onStepClick={Showmodal}
            />
            <Step
              title="Đơn hàng"
              description="Đang vận chuyển"
              onStepClick={Showmodal}
            />
            <Step
              title="Đơn hàng"
              description="Hoàn thành"
              onStepClick={Showmodal}
            />
          </Steps>
        </div>

        <Modal title="Cảnh báo !" visible={isModal} footer={null}>
          <p>Bạn có chắc chắn muốn xác nhận đơn hàng này</p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <button
              style={{
                backgroundColor: "#fff",
                border: "1px solid #000",
                margin: 10,
                padding: " 8px 16px",
                borderRadius: 3,
              }}
              onClick={handleHuy}
            >
              Huỷ
            </button>
            <button
              style={{
                backgroundColor: "red",
                border: "1px solid #000",
                margin: 10,
                padding: " 8px 16px",
                color: "#fff",
                borderRadius: 3,
              }}
              onClick={handleXacnhan}
            >
              Đồng ý
            </button>
          </div>
        </Modal>
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

                  <div style={{ marginTop: 15, width: 300 }}>
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
