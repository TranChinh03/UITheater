import React from 'react';
import {SVG_Close} from '../../assets/icons';
import styles from './bookinginfo.module.scss';

function BookingInfo({selectedSeats}) {
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
                style={{width: '18vw', borderRight: 'white solid 1px'}}>
                <div className={styles.infoTitle}>Showtime:</div>
                <div className={styles.infoData}>13:00</div>
              </div>
              <div
                className={styles.infofo}
                style={{width: '22vw', borderRight: 'white solid 1px'}}>
                <div className={styles.infoTitle}>Date:</div>
                <div className={styles.infoData}>31 - 02 - 2023</div>
              </div>
              <div
                className={styles.infofo}
                style={{width: '22vw', borderRight: 'white solid 1px'}}>
                <div className={styles.infoTitle}>Ticket:</div>
                <div className={styles.infoData}>
                  {selectedSeats.length} tickets
                </div>
              </div>
              <div className={styles.infofo} style={{width: '20vw'}}>
                <div className={styles.infoTitle}>Total:</div>
                <div className={styles.infoData}>
                  {(200000 * selectedSeats.length).toLocaleString()} VND
                </div>
              </div>
            </div>
            <div className={styles.info2}>
              <div
                style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '18vw',
                  borderRight: '#0C0326 solid 1px',
                  height: '100%',
                  fontFamily: 'Lilita One',
                  fontSize: '40px',
                  textAlign: 'center',
                  lineHeight: '100%',
                }}>
                Seat number:
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  fontFamily: 'Lilita One',
                  fontSize: '40px',
                  textAlign: 'center',
                  lineHeight: '100%',
                  marginLeft: '10px',
                }}>
                {selectedSeats.length === 0
                  ? 'No seats selected!'
                  : selectedSeats.length <= 10 ? selectedSeats.slice(0, 10).map(seat => ` ${seat}`) + `` : selectedSeats.slice(0, 9).map(seat => ` ${seat}`) + `  +${selectedSeats.length-9} more` }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingInfo;
