import React, {useState, useEffect} from 'react';
import styles from './bookingfilter.module.scss';
import {SVG_SelectDown} from '../../assets/icons';
import {getScheduleFunction} from '../../apis/GetMethod/getSchedule';
import {getTheatersFunction} from '../../apis/GetMethod/getTheaters';
import { message } from 'antd';
import {useNavigate} from 'react-router-dom';

const rotation = isRotated => {
  return {
    transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.25s ease-in-out', // Adjust transition duration as needed
  };
};

function BookingFilter({movieName=null}) {
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState([]);
  const [showtimeId, setShowtimeId] = useState();

  const [isRotated, setIsRotated] = useState([false, false, false, false]);
  const catagories = ['movies', 'theaters', 'dates', 'showTime'];
  const [selectedFilterInfo, setSelectedFilterInfo] = useState({
    movies: movieName ? movieName : 'Choose Movie',
    theaters: 'Choose Theater',
    dates: 'Choose Date',
    showTime: 'Choose Showtime',
  });

  const Info = {
    movies: [...new Set(schedule.map(x=>x.movie[0].title))],
    theaters: [...new Set(schedule.filter(x=>x.movie[0].title === selectedFilterInfo['movies']).map(x=>x.theater[0].name))],
    dates: [...new Set(schedule.filter(x=>x.movie[0].title === selectedFilterInfo['movies'] && x.theater[0].name === selectedFilterInfo['theaters']).map(x=>x.date))],
    showTime: [...new Set(schedule.filter(x=>x.movie[0].title === selectedFilterInfo['movies'] && x.theater[0].name === selectedFilterInfo['theaters'] && x.date === selectedFilterInfo['dates']).map(x=>x.time))],
  };

  
  const handleBookingNow = () => {
    navigate('/booking?showTime=' + schedule.filter(x=>x.movie[0].title === selectedFilterInfo['movies'] && x.theater[0].name === selectedFilterInfo['theaters'] && x.date === selectedFilterInfo['dates'])[0].id);
  }



  // useEffect(() => {
  //     if (!disabledButtons[1]) {
  //       Info['theaters'] = [... new Set(schedule.filter(x=>x.movie[0].title === selectedFilterInfo['movies']).map(x=>x.theater[0].name))];
  //       console.log(Info)
  //       console.log("theater:", schedule.filter(x=>x.movie[0].title === selectedFilterInfo['movies']).map(x=>x.theater[0].name))
  //     }
  // }, [selectedFilterInfo])

  useEffect(() => {
    getScheduleFunction().then(res => {
      setSchedule(res);
    });
  }, []);


  const [isOpen, setIsOpen] = useState([false, false, false, false]);


  const [disabledButtons, setDisabledButtons] = useState([false, false, true, true, true]);

  const handleSelection = (index, value) => {
    if (disabledButtons[index]) {
      console.log("can not choose")
      return
    }
    const updatedFilterInfo = { ...selectedFilterInfo };
    updatedFilterInfo[catagories[index]] = value;
    setSelectedFilterInfo(updatedFilterInfo);

    const updatedDisabledButtons = [...disabledButtons];
    updatedDisabledButtons[index] = false;
    if (index < catagories.length - 1) {
      updatedDisabledButtons[index + 1] = false;
    }
    else {
      handleBookingNow()
    }
    setDisabledButtons(updatedDisabledButtons);
  };
  return (
    <>
      <div
        className={styles.bookingContainer}
        style={{
          background:
            'linear-gradient(to right, #C70039, #E06F84, #C1ADB1, #312849)',
          height: '160px',
        }}>
        <div className={styles.bannerContent}>
          BOOK THE
          <br />
          TICKET NOW!
        </div>
        <div className={styles.boxGridContainer}>
          {isRotated.map((value, index) => (
            <div id="drop">
              <div
                onClick={() => {
                  isRotated.forEach((value, idx) => {
                    if (disabledButtons[idx]) {
                      return}
                    isRotated[idx] = index !== idx ? false : !value;
                    isOpen[idx] = index !== idx ? false : !value;
                  });
                  setIsRotated(isOpen);
                  setIsOpen(isRotated);
                }}
                className={`${styles.dropDown} ${disabledButtons[index] ? styles.disabled : ''}`}>
                <button className={styles.dropBtn}>
                  <div className={styles.dropText}>
                    {selectedFilterInfo[catagories[index]]}
                  </div>
                  <img
                    className={styles.dropIcon}
                    src={SVG_SelectDown}
                    alt="Select Icon"
                    style={rotation(value)}
                  />
                </button>
                {isOpen[index] && (
                  <div className={styles.dropDownContent}>
                    {Info[catagories[index]].map(option => (
                      <div
                        onClick={() => handleSelection(index, option)}
                        className={`${styles.dropDownItem} ${disabledButtons[index] ? styles.disabled : ''}`}
                        key={option}>
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BookingFilter;
