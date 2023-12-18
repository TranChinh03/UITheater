import React, {useState, useEffect} from 'react';
import styles from './paymentscreen.module.scss';
import {IM_Momo, IM_VNPay} from '../../assets/imgs';

function Payment() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.ticketInfo}>
            <div className={styles.img}></div>
            <div className={styles.infoC}>
              <div className={styles.movieTitle}>
                3DCG! SHIN CẬU BÉ BÚT CHÌ 2D LT (P): ĐẠI CHIẾN SIÊU NĂNG LỰC
                SUSHI BAY
              </div>
              <div className={styles.infoCont}>
                <div className={styles.textC}>
                  <div className={styles.text}>Customer: </div>
                  <div className={styles.textt}>Tran Khach Hang</div>
                </div>
                <div className={styles.textC}>
                  <div className={styles.text}>Date: </div>
                  <div className={styles.textt}>21 - 03 - 2024</div>
                </div>
                <div className={styles.textC}>
                  <div className={styles.text}>Theater: </div>
                  <div className={styles.textt}>Theater 1</div>
                </div>
                <div className={styles.textC}>
                  <div className={styles.text}>Hall: </div>
                  <div className={styles.textt}>Hall 2</div>
                </div>
                <div className={styles.textC}>
                  <div className={styles.text}>Showtime: </div>
                  <div className={styles.textt}>13:00</div>
                </div>
                <div className={styles.textC}>
                  <div className={styles.text}>Seat: </div>
                  <div className={styles.textt}>G63</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.textC1}>
              <div className={styles.text1}>Total: </div>
              <div className={styles.textt1}>1.200.000 VND</div>
            </div>
            <div className={styles.paymentContainer}>
              <div className={styles.title}>Payment Method:</div>
              <div style={{marginLeft: '100px', marginTop: '30px'}}>
                <img
                  src={IM_Momo}
                  alt="Momo"
                  width={'60px'}
                  height={'60px'}
                  style={{marginLeft: '10px', marginRight: '30px'}}
                  onClick={() => {
                    console.log('nhan duoc kh nhi');
                  }}></img>
                <img
                  src={IM_VNPay}
                  alt="Momo"
                  width={'60px'}
                  height={'60px'}
                  style={{marginLeft: '10px', marginRight: '30px'}}
                  onClick={() => {
                    console.log('nhan duoc kh nhi');
                  }}></img>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
