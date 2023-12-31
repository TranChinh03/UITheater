import React, {useEffect, useState} from 'react';
import BookingInfo from '../../components/BookingInfo/bookingInfo';
import Header from '../../components/HeaderScreen/Header';
import Seat from '../../components/Seats/Seat';
import styles from './bookingscreen.module.scss';
import DetailSelect from '../../components/detailSelect/detailSelect';
import {useSearchParams} from 'react-router-dom';
import {Button} from '@mui/material';
import BookingSeats from '../../components/BookingSeats/BookingSeats';

function Booking() {
  const [tickets, setTickets] = useState(0);
  const [price, setPrice] = useState(0);
  const [seats, setSeats] = useState([]);
  const [search, setSearchParams] = useSearchParams();

  console.log(search.get('showTime'));

  return (
    <div className={styles.container}>
      <BookingInfo
        selectedSeats={seats}
        showTime={search.get('showTime')}
        ticket={tickets ?? undefined}
        price={price ?? undefined}
      />
      {tickets ? (
        <div style={{backgroundColor: '#231B5B'}}>
          <BookingSeats
            ticketNum={tickets}
            onChange={selectedSeats => setSeats(selectedSeats)}></BookingSeats>
          <div className={styles.btnContainer}>
            <button className={styles.btnReturn} onClick={() => {}}>
              Back
            </button>
            <button className={styles.btnNext} onClick={() => {}}>
              Pay
            </button>
          </div>
        </div>
      ) : (
        <DetailSelect
          onChange={(ticket, price) => {
            setTickets(ticket);
            setPrice(price);
          }}></DetailSelect>
      )}
    </div>
  );
}

export default Booking;
