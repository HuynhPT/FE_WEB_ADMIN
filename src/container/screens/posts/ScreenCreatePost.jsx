import { Avatar, List, Select, Button, Divider, Row, Image } from 'antd';
import React from 'react';
import styles from "./ScreenCreatePost.module.css";
import anhone from '../../../Common/Image/anhone.png'
import avatar from '../../../Common/Image/avatar.png'
import hoidap from '../../../Common/Image/hoidap.png'
import TinymceProduct from '../../../Components/products/TinymceProduct';

const { Option } = Select;
const handleChange = (value) => {
  console.log(value);
};

const ScreenCreatePost = () => (

  <div className={styles._container_all}>

    <div >
      <div className={styles._avatar_1}>

        <img src={avatar} alt="" />

        <h3 className={styles._title_avatr}>Dân chơi xóm</h3>
      </div>
      <div className={styles._select_team}>

      </div>
      <hr className={styles._divider_1} />
    </div>
    <div className={styles._content_body}>
      <TinymceProduct />
      <hr className={styles._divider_2} />
    </div>
    <div className={styles._row_body}>
      <Row>
        <Row className={styles._row_1}>
          <div className={styles._image_1}>
            <img src={anhone} alt="" />
          </div>
          <div className={styles._title_1}>
            Ảnh/Video
          </div>
        </Row>
        <Row className={styles._row_1}>
          <div className={styles._image_2}>
            <img src={hoidap} alt="" />
          </div>
          <div className={styles._title_2}>
            Hỏi Đáp
          </div>
        </Row>
      </Row>
    </div>
    <div className={styles._divider_3}>
      <hr />
    </div>

    <Button className={styles._btn_posts}>
      <p className={styles._text_btn}>Chia sẻ</p>
    </Button>
  </div>

);

export default ScreenCreatePost;
