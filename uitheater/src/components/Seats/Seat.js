import DoubleSeat from "./seatImg/DoubleSeat";
import SingleSeat from "./seatImg/SingleSeat";

export default function Seat({seat, onSeatClick}) {
    return (
        <div style={{ position: 'relative', textAlign: 'center', cursor: seat.booked ? 'not-allowed' : 'pointer' }} 
            onClick={() => {
                if (!seat.booked) {
                    onSeatClick(seat.id);
                }
            }}>
                {!seat.isCouple && <SingleSeat color={seat.booked ? 'gray' : seat.selected ? '#38FE17' : '#FFFAF5'}/>}
                {seat.isCouple && <DoubleSeat color={seat.booked ? 'gray' : seat.selected ? '#38FE17' : '#FFFAF5'}/>}
            <div
                style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontFamily: "InterBold",
                color: '#1A1444',
                textShadow: '2px 2px 4px rgba(26, 20, 68, 0.8)',
                fontSize: '12px'
                }}
            >
                {seat.id}
            </div>
            </div>
    )
}