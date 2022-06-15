import { Button, Input, Table } from "antd";
import React, { useState } from "react";
import "../../../Components/sizecolor/InputSC.css";
function ColorSize() {
  const [id, setId] = useState();
  const [sizeARR, setSizeARR] = useState("");
  const [colorARR, setColorARR] = useState("");
  const [arrayColor, setArrayColor] = useState([]);
  const [arraySize, setArraySize] = useState([]);

  const handSubmitColor = () => {
    setArrayColor([
      ...arrayColor,
      {
        colorARR,
      },
    ]);
  };
  const handSubmitSize = () => {
    setArraySize([
      ...arraySize,
      {
        sizeARR,
      },
    ]);
  };

  const columncolor = [
    {
      title: "Mã màu",
      dataIndex: "colorARR",
    },
  ];
  const columnsize = [
    {
      title: "Size",
      dataIndex: "sizeARR",
    },
  ];
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
        <Button className="button_sc" onClick={handSubmitColor}>
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
        <Button className="button_sc" onClick={handSubmitSize}>
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
        <Table
          dataSource={arrayColor}
          columns={columncolor}
          style={{ width: "45%" }}
        />
        <Table
          dataSource={arraySize}
          columns={columnsize}
          style={{ width: "45%" }}
        />
      </div>
    </>
  );
}

export default ColorSize;
