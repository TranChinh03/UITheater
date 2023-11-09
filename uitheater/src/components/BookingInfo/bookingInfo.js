import React from 'react';
import {SVG_Close} from '../../assets/icons';
import styles from './bookinginfo.module.scss';

function BookingInfo() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.colContainer}></div>
        <div className={styles.infoContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.movieTitle}>
              3DCG! SHIN CẬU BÉ BÚT CHÌ 2D LT (P): <br />
              ĐẠI CHIẾN SIÊU NĂNG LỰC SUSHI BAY
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.info1}>
              <div
                className={styles.infofo}
                style={{width: '230px', borderRight: 'white solid 1px'}}>
                <div className={styles.infoTitle}>Showtime:</div>
                <div className={styles.infoData}>13:00</div>
              </div>
              <div
                className={styles.infofo}
                style={{width: '350px', borderRight: 'white solid 1px'}}>
                <div className={styles.infoTitle}>Date:</div>
                <div className={styles.infoData}>31 - 02 - 2023</div>
              </div>
              <div
                className={styles.infofo}
                style={{width: '260px', borderRight: 'white solid 1px'}}>
                <div className={styles.infoTitle}>Ticket:</div>
                <div className={styles.infoData}>2 tickets</div>
              </div>
              <div className={styles.infofo} style={{width: '420px'}}>
                <div className={styles.infoTitle}>Total:</div>
                <div className={styles.infoData}>200.000 VND</div>
              </div>
            </div>
            <div className={styles.info2}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '200px',
                  fontSize: '20px',
                  color: '#0C0326',
                  height: '100%',
                  justifyContent: 'center',
                  borderRight: '#0C0326 solid 1px',
                }}>
                Seat number:
              </div>
              <div>seat de do day ne</div>
            </div>
          </div>
        </div>
        <div className={styles.colContainer}>
          <button
            onClick={console.log('nhan duoc kh nhi?')}
            className={styles.closeButton}>
            <img className={styles.closeSVG} src={SVG_Close} alt="Close"></img>
          </button>
        </div>
      </div>
    </>
  );
}

export default BookingInfo;
