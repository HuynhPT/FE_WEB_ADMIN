import { Button, Input } from "antd";
import React from "react";
import "./InputSC.css";

function InputSC(props) {
  return (
    <div className="input_Container">
      <Input
        className="input_sc"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <Button className="button_sc" onClick={props.onClick}>
        <p className="title_sc">{props.title_button}</p>
      </Button>
    </div>
  );
}

export default InputSC;
