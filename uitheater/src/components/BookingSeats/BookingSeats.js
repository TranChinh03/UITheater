import BookingInfo from '../BookingInfo/bookingInfo';
import Header from '../HeaderScreen/Header';
import Seat from '../Seats/Seat';
import styles from './bookingseats.module.scss';
import {useState} from 'react';

function BookingSeats(props) {
  const rows = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
  ];
  const totalRows = 13;
  const seatsPerRow = 13;
  const coupleSeats = 8;


  const [bookedSeats, setBookedSeats] = useState(props.bookedSeats)
  const [seats, setSeats] = useState(generateInitialSeats());

  function generateInitialSeats() {

    const generatedSeats = [];
    var row = 0;
    for (row; row < totalRows; row++) {
      // Regular Seats
      for (let i = 1; i <= seatsPerRow; i++) {
        generatedSeats.push({
          id: i.toString().length === 1 ? rows[row] + '0' + i : rows[row] + i,
          booked: false,
          selected: false,
          isCouple: false,
        });
      }
    }

    for (let i = 1; i <= coupleSeats; i++) {
      generatedSeats.push({
        id: i.toString().length === 1 ? rows[row] + '0' + i : rows[row] + i,
        booked: false,
        selected: false,
        isCouple: true,
      });
    }

    bookedSeats.forEach(x => {
      const index = Number(x%177-1)
      generatedSeats[index].booked = true;
    })

    return generatedSeats;
  }

  const toggleSeat = seatId => {
    const updatedSeats = seats.map(seat =>
      seat.id === seatId ? {...seat, selected: !seat.selected} : seat,
    );
    if (props.ticketNum >= updatedSeats.filter(seat => seat.selected).length) {
      setSeats(updatedSeats);
      updateSelectedSeats(seatId);
    }
  };

  const updateSelectedSeats = seatId => {
    props.onChange(prevSeats =>
      prevSeats.includes(seatId)
        ? prevSeats.filter(id => id !== seatId)
        : [...prevSeats, seatId],
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.diagramContainer}>
        <div className={styles.screen}>Screen</div>
        <div className={styles.seatMap}>
          {seats
            .filter(seat => seat.isCouple === false)
            .map(seat => (
              <Seat seat={seat} onSeatClick={toggleSeat} />
            ))}
        </div>
        <div className={styles.seatCoupleMap}>
          {seats
            .filter(seat => seat.isCouple === true)
            .map(seat => (
              <Seat seat={seat} onSeatClick={toggleSeat} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default BookingSeats;
