import React from 'react';
import '../BookingInfo/bookinginfoStyle.scss'
import { SVG_Close } from "../../assets/icons";

function BookingInfo() {
  return (
    <>
      <div className='container'>
        <div className='col-container'>
        </div>
        <div className='info-container'>
          <div className='title-container'>
            <div className='movie-title'>3DCG! SHIN CẬU BÉ BÚT CHÌ 2D LT (P): <br />ĐẠI CHIẾN SIÊU NĂNG LỰC SUSHI BAY</div>
          </div>
          <div className='info'>
            <div className='info1'>
              <div className='infofo' style={{ width: '230px' }}>
                <div className='info-title'>Showtime:</div>
                <div className='info-data'>13:00</div>
              </div>
              <div className='infofo' style={{ width: '350px' }}>
                <div className='info-title'>Date:</div>
                <div className='info-data'>31 - 02 - 2023</div>
              </div>
              <div className='infofo' style={{ width: '260px' }}>
                <div className='info-title'>Ticket:</div>
                <div className='info-data'>2 tickets</div>
              </div>
              <div className='infofo' style={{ width: '420px' }}>
                <div className='info-title'>Total:</div>
                <div className='info-data'>200.000 vnd</div>
              </div>
            </div>
            <div className='info2'>
              <div style={{ display: 'flex', flexDirection: 'column', width: '200px', backgroundColor: '#fffaf5', fontSize: '20px', color: '#0C0326', height: '100%', justifyContent: 'center', }}>Seat number:</div>
              <div></div>
            </div>
          </div>
        </div>
        <div className='col-container'>
          <button onClick={console.log('nhan duoc kh nhi?')} className='close-button'><img className="closeSVG" src={SVG_Close} alt="Close"></img></button>
        </div>
      </div>
    </>
  );
}

export default BookingInfo;
