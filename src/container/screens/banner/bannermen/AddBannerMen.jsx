import { Button, Input } from "antd";
import React, { useState } from "react";
import "./AddBannerMen.css"
function AddBannerMen(props) {
    const [nameLinkImage, setNameLinkImage] = useState([]);
    const upImage = (e) => {
        const namePhoto = document.getElementById("images").files[0].name;
        if (nameLinkImage.length > 0) {
            setNameLinkImage([...nameLinkImage, namePhoto]);
        } else {
            setNameLinkImage([namePhoto]);
        }
    };
    return (
        <div className="_Mcontainer_Fro">
            <div className="_Mcontainer_Frompr">
                <h3 className="_title_addproduct">Thêm Banner</h3>
                <hr />
                <div className="_nameInputrow1">
                    <p className="_text_product">Tên*</p>
                    <Input placeholder="Nhập Tên" />
                </div>

                <div className="_nameInputrow1">
                    <p className="_text_product">Thông tin chi tiết*</p>
                    <Input placeholder="Nhập thông tin" />
                </div>

                {/* UP ảnh*/}
                <div className="_nameInputrow">
                    <p className="_text_product">Hình ảnh*</p>
                    {nameLinkImage.length == 0 ? (
                        <span>{nameLinkImage}</span>
                    ) : (
                        <>
                            {nameLinkImage.map((item) => (
                                <>
                                    <span>{item}</span>
                                    <br />
                                </>
                            ))}
                            <Button
                                onClick={() => setNameLinkImage([])}
                                style={{ margin: 25 }}
                            >
                                Huỷ
                            </Button>
                        </>
                    )}
                    <br />
                    <label htmlFor="images">
                        <div
                            style={{
                                border: "1px solid #00000099",
                                marginTop: -20,
                                height: 30,
                                textAlign: "center",
                            }}
                        >
                            Chọn hình ảnh
                        </div>
                    </label>
                    <input
                        id="images"
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => upImage(e)}
                    />
                </div>


                {/* Nút ấn bắt sự kiện */}
                <div className="_buttonClick_Product">
                    <Button className="__buttonClick_Product_Res">
                        <p className="_Title_button_product">Đặt lại</p>
                    </Button>
                    <Button className="__buttonClick_Product_add">
                        <p className="_Title_button_product">Thêm Banner</p>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AddBannerMen;
