import BookingInfo from '../../components/BookingInfo/bookingInfo';
import Header from '../../components/HeaderScreen/Header';
import Seat from '../../components/Seats/Seat';
import styles from './bookingscreen.module.scss';
import { useState } from 'react';

function Booking() {
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"]
    const totalRows = 13;
    const seatsPerRow = 13;
    const coupleSeats = 8;

    const [seats, setSeats] = useState(generateInitialSeats());

    const [selectedSeats, setSelectedSeats] = useState([]);

    function generateInitialSeats() {
        const generatedSeats = [];
        var row = 0;
        for (row; row < totalRows; row++) {
          // Regular Seats
          for (let i = 1; i <= seatsPerRow; i++) {
            generatedSeats.push({ id: i.toString().length === 1 ? rows[row] + "0" + i : rows[row]  + i, booked: false, selected: false, isCouple: false});
          }
        }

        for (let i = 1; i <= coupleSeats; i++) {
            generatedSeats.push({ id: i.toString().length === 1 ? rows[row] + "0" + i : rows[row]  + i, booked: false, selected: false, isCouple: true});
        }
    
        return generatedSeats;
      }

      const toggleSeat = (seatId) => {
        const updatedSeats = seats.map((seat) =>
          seat.id === seatId ? { ...seat, selected: !seat.selected } : seat
        );
        setSeats(updatedSeats);
        updateSelectedSeats(seatId);
      };

      const updateSelectedSeats = (seatId) => {
        setSelectedSeats((prevSeats) =>
          prevSeats.includes(seatId)
            ? prevSeats.filter((id) => id !== seatId)
            : [...prevSeats, seatId]
        );
      };

  return (
    <div className={styles.container}>
      <div>
        <BookingInfo selectedSeats={selectedSeats}/>
      </div>

        <div className={styles.diagramContainer}>
            <div className={styles.screen}>Screen</div>
            <div className={styles.seatMap}>
                {seats.filter((seat) => (seat.isCouple === false)).map((seat) => (
                    <Seat seat={seat} onSeatClick={toggleSeat}/>
                ))}
            </div>
            <div className={styles.seatCoupleMap}>
                {seats.filter((seat) => (seat.isCouple === true)).map((seat) => (
                    <Seat seat={seat} onSeatClick={toggleSeat}/>
                ))}
            </div>
            
        </div>

        <button onClick={() => {
            console.log(selectedSeats)
        }}></button>


    </div>
  );
}

export default Booking;
