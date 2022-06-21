import { DeleteOutlined } from "@ant-design/icons";
import { Button, Input, Table } from "antd";
import React, { useEffect, useState } from "react";
import "../../../Components/sizecolor/InputSC.css";
function ColorSize() {
  const [sizeARR, setSizeARR] = useState();
  const [colorARR, setColorARR] = useState();
  // lấy màu
  const URLcolor =
    "http://ec2-18-141-190-201.ap-southeast-1.compute.amazonaws.com:3000/api/size-color/get-color";

  useEffect(() => {
    fetch(URLcolor)
      .then((res) => res.json())
      .then((colorARR) => setColorARR(colorARR));
  }, []);

  //lấy size
  const URLsize =
    "http://ec2-18-141-190-201.ap-southeast-1.compute.amazonaws.com:3000/api/size-color/get-size";
  useEffect(() => {
    fetch(URLsize)
      .then((res) => res.json())
      .then((sizeARR) => setSizeARR(sizeARR));
  }, [URLsize]);
  // show color
  const showDataColor = () => {
    if (colorARR !== undefined) {
      const deletee = (id) => {
        console.log(id);
      };
      const columncolor = [
        {
          title: "Tên màu",
          dataIndex: "titleColors",
        },
        {
          title: "Mã màu",
          dataIndex: "colorCode",
        },

        {
          title: "Hoạt động",
          dataIndex: "_id",
          render: (_id) => (
            <DeleteOutlined onClick={() => deletee(_id)} size={24} />
          ),
        },
      ];
      return (
        <Table
          columns={columncolor}
          dataSource={colorARR.data}
          rowKey={(item) => item._id}
          style={{ width: "45%" }}
        />
      );
    }
  };

  // show size
  const showDataSize = () => {
    if (sizeARR !== undefined) {
      const deletee = (id) => {
        console.log(id);
      };

      const columnsize = [
        {
          title: "Size",
          dataIndex: "titleSize",
        },

        {
          title: "Hoạt động",
          dataIndex: "_id",
          render: (_id) => (
            <DeleteOutlined onClick={() => deletee(_id)} size={24} />
          ),
        },
      ];
      return (
        <Table
          columns={columnsize}
          dataSource={sizeARR.data}
          rowKey={(item) => item._id}
        />
      );
    }
  };

  return (
    <>
      {/* thêm màu */}
      <div className="input_Container">
        <Input
          className="input_sc"
          placeholder="Thêm mã màu"
          value={colorARR}
          onChange={(val) => setColorARR(val.target.value)}
        />
        <Button
          className="button_sc"
          // onClick={handSubmitColor}
        >
          <p className="title_sc">Thêm Màu</p>
        </Button>
      </div>
      {/* thêm size */}
      <div className="input_Container">
        <Input
          className="input_sc"
          placeholder="Thêm size"
          value={sizeARR}
          onChange={(val) => setSizeARR(val.target.value)}
        />
        <Button
          className="button_sc"
          // onClick={handSubmitSize}
        >
          <p className="title_sc">Thêm Size</p>
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: 150,
        }}
      >
        {showDataColor()}
        {showDataSize()}
      </div>
    </>
  );
}

export default ColorSize;
