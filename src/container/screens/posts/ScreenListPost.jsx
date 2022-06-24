import { Input, Row, Divider, Select } from 'antd';
import styles from "./ScreenListPost.module.css";
import avatar from '../../../Common/Image/avatar.png'
import anh from '../../../Common/Image/anh.png'
import img_login from '../../../Common/Image/img_login.png'


const ScreenListPost = () => (
  <div className={styles.all}>
    <div className={styles._container_top}>
      <div className={styles.hrone}>
        <Divider />
      </div>
      <div className={styles._avatar_top}>
        <img src={avatar} alt="" />
      </div>
      <div className={styles.input_one}>
        <Input className={styles.input_text} placeholder="bạn đang nghĩ gì" style={{ height: 100 }} />
      </div>
      <div className={styles.update_anh_body}>
        <img className={styles.update_anh} src={anh} alt="" />
      </div>
    </div>

    <div className={styles._container_top2}>

      <div >
        <div className={styles._avatar_1}>

          <img src={avatar} alt="" />

          <h3 className={styles._title_avatr}>Dân chơi xóm</h3>
        </div>

        <div className={styles.body_title1}>MINIGAME: THẢ ẢNH VITAMINSEA, NHẬN QUÀ HẾT Ý ⛱ Ve ve ve,
          hè về rồi các bạn ơiiiiiiiiii! Để chào đón một mùa hè thật sôi động,
          tham gia ngay Minigame VitaminSea để có cơ hội rinh về những phần
          quà HOT hơn cả mùa hè nhó! 😉 Thời g...
        </div>
        <div className={styles.body_title2}>
          Xem thêm
        </div>
        <Row>
          <div className={styles.anh1_title}>
            <img src={img_login} alt="" style={{ width: 240, height: 314 }} />
          </div>
          <div className={styles.anh2_title}>
            <img src={img_login} alt="" style={{ width: 240, height: 314 }} />
          </div>
          <div className={styles.anh3_title}>
            <img src={img_login} alt="" style={{ width: 240, height: 314 }} />
          </div>
          <div className={styles.anh4_title}>
            <img src={img_login} alt="" style={{ width: 240, height: 314 }} />
          </div>
        </Row>
        <div className={styles.hrone1}>
          <Divider />
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
);
export default ScreenListPost;
