import React from "react";
import "./ScreenCreateProduct.css";
import { Input } from "antd";
// import Uploadproduct from "../../../Components/products/Uploadproduct";
const ScreenCreateProduct = () => {
  return (
    <div className="body">
      <div className="a1">
        <h3>Thêm Sản Phẩm</h3>
      </div>
      <div className="a2"></div>
      <div className="a3">
        <div className="b31">
          <p className="productName">Tên Sản Phẩm *</p>
          <Input type="text" id="input" placeholder="Nhập tên sản phẩm" />
        </div>
        <div className="b32">
          <p className="brandName">Nhãn hiệu *</p>
          <Input type="text" placeholder="Nhập nhãn hiệu" />
        </div>
      </div>
      <div className="a4">
        <div className="b41">
          <p className="code">Mã số *</p>
          <Input type="text" placeholder="Nhập mã số" />
        </div>
        <div className="b42">
          <p className="material">Chất liệu *</p>
          <Input type="text" placeholder="Nhập chất liệu" />
        </div>
      </div>
      <div className="a5">
        <p className="productDescription">Mô tả sản phẩm *</p>
        <textarea placeholder="Nhập mô tả"></textarea>
      </div>
      <div className="a6">
        <div className="b61">
          <p className="size">Size *</p>
          <select name="pickSize" id="pickSizeclothes">
            <option value="sizeS">Chọn Kích cỡ: Size S</option>
            <option value="sizeM">Chọn Kích cỡ: Size M</option>
            <option value="sizeL">Chọn Kích cỡ: Size L</option>
            <option value="sizeXL">Chọn Kích cỡ: Size XL</option>
          </select>
        </div>
        <div className="b62">
          <p className="color">Màu *</p>
          <select name="pickColor" id="pickColorClothes">
            <option value="white">Chọn màu: Trắng</option>
            <option value="black">Chọn màu: Đen</option>
            <option value="red">Chọn màu: Đỏ</option>
            <option value="pink">Chọn màu: Hồng</option>
            <option value="green">Chọn màu: Xanh lá cây</option>
            <option value="orange">Chọn màu: Cam</option>
          </select>
        </div>
        <div className="b63">
          <p className="price">Giá bán *</p>
          <Input type="text" placeholder="Nhập giá bán" />
        </div>
        <div className="b64">
          <p className="unitPrice">Đơn giá *</p>
          <Input type="text" placeholder="Nhập đơn giá" />
        </div>
      </div>
      <div className="a7">
        <div className="b71">
          <p className="photo">Hình ảnh *</p>
          <Input type="text" id="hinhanh" placeholder="Chọn hình ảnh" />
          <button type="button" onclick="alert('Hello world!')">
            Chọn Tệp
          </button>
          {/* <Uploadproduct /> */}
        </div>
        <div className="b72"></div>
        <div className="b73">
          <p className="object">Đối tượng *</p>
          <select name="pickObject" id="pickObjectForClothes">
            <option value="man">Chọn Giới tính : Nam</option>
            <option value="women">Chọn Giới tính : Nữ</option>
          </select>
        </div>
        <div className="b74">
          <p className="category">Thể loại *</p>
          <select name="pickCategory" id="pickCategoryForClothes">
            <option value="mu">Chọn Thể loại: Mũ</option>
            <option value="ao">Chọn Thể loại: Áo</option>
            <option value="quan">Chọn Thể loại: Quần</option>
            <option value="giay">Chọn Thể loại: Giầy</option>
            <option value="tat">Chọn Thể loại: Tất</option>
            <option value="vongco">Chọn Thể loại: Vòng cổ</option>
          </select>
        </div>
      </div>
      <div className="a8">
        <div></div>
        <div className="b82">
          <div className="c81">
            <button onClick={() => setVal(() => "")}>Đặt lại</button>
          </div>
          <div className="c82">
            <button type="button">Thêm sản phẩm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenCreateProduct;
