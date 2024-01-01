import React, {useEffect, useState} from 'react';
import BookingInfo from '../../components/BookingInfo/bookingInfo';
import Header from '../../components/HeaderScreen/Header';
import Seat from '../../components/Seats/Seat';
import styles from './bookingscreen.module.scss';
import DetailSelect from '../../components/detailSelect/detailSelect';
import {useSearchParams} from 'react-router-dom';
import {Button} from '@mui/material';
import BookingSeats from '../../components/BookingSeats/BookingSeats';
import {useLocation} from 'react-router-dom';
import { getShowtimesFunction } from '../../apis/GetMethod/getShowtimes';
import {getTicketsFunction} from '../../apis/GetMethod/getTickets';
import { postProcessFunction } from '../../apis/PostMethod/postProcess';
import {useNavigate} from 'react-router-dom';
import { message } from 'antd';
import { postPaymentFunction } from '../../apis/PostMethod/postTicket';

function Booking() {
  const navigate = useNavigate();
  const [SHOWTIMES, setSHOWTIMES] = useState()
  const [SEAT, setSEAT] = useState()
  const [search, setSearchParams] = useSearchParams();

  useEffect(() => {
    getShowtimesFunction().then(res => {
      const temp = res.filter(value => value.id === Number(search.get('showTime')))[0]
      console.log("Temp", temp);
      setSHOWTIMES(temp);
    });

    getTicketsFunction().then(res => {
      const seatBooked = res.filter(value => value.showtimeId === Number(search.get('showTime'))).map(value => value.seatId)
      console.log("Seats booked:", seatBooked)
      setSEAT(seatBooked)
    })

  }, [search])

  const [ticketS, setTicketS] = useState(0);
  const [ticketD, setTicketD] = useState(0);
  const [price, setPrice] = useState(0);
  const [seats, setSeats] = useState([]);

  const paymentsFunction = () => {
    if (seats.length == 0) {
      message.error("Please choose your seats!")
      return
    }

    const data = seats.map((seatId, index) => ({
      ticketId: Math.floor(Math.random() * 9000) + 1000, 
      showtimeId: Number(search.get('showTime')), 
      seatId: seatId*SHOWTIMES.hallId,
      price: seatId <= 169 ? 75000 : 120000,
    }));

    console.log(data)
    postProcessFunction(data)
    postPaymentFunction(data).then(res => window.open(res.payUrl, "_blank", "noreferrer"));
  }



  return (
    <div className={styles.container}>
      <BookingInfo
        selectedSeats={seats}
        showTime={search.get('showTime')}
        ticket={ticketS + ticketD ?? undefined}
        price={price ?? undefined}
      />
      {ticketS || ticketD ? (
        <div style={{backgroundColor: '#231B5B'}}>
          <BookingSeats
            ticketSNum={ticketS}
            ticketDNum={ticketD}
            bookedSeats={SEAT}
            onChange={selectedSeats => setSeats(selectedSeats)}>
          </BookingSeats>
          <div className={styles.btnContainer}>

            <button className={styles.btnReturn} onClick={() => {navigate(-1)}}>
              Back
            </button>
            <button className={styles.btnNext} onClick={() => {paymentsFunction()}}>
              Pay
            </button>
          </div>
        </div>
      ) : (
        <DetailSelect
          onChange={(ticketS, ticketD, price) => {
            setTicketS(ticketS);
            setTicketD(ticketD);
            setPrice(price);
          }}></DetailSelect>
      )}
    </div>
  );
}

export default Booking;
