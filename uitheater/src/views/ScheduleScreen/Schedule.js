import React, {useState, useEffect} from 'react';
import MovieInfoS from '../../components/MovieInfoS/movieInfoS';
import styles from './schedulescreen.module.scss';
import {Grid} from '@mui/material';
import {IM_Banner, IM_Banner1, IM_Banner2, IM_Banner3} from '../../assets/imgs';
import BookingFilter from '../../components/BookingFilter/bookingFilter';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import {getScheduleFunction} from '../../apis/GetMethod/getSchedule';
import {getTheatersFunction} from '../../apis/GetMethod/getTheaters';

import {SVG_SelectDown} from '../../assets/icons';

function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const [theaterList, setTheaterList] = useState([]);
  const [selectedInfo, setSelectedInfo] = useState(-1);
  const [combinedDate, setCombinedDate] = useState([]);
  useEffect(() => {
    const result = [];
    schedule.forEach((value, _) => {
      if (selectedInfo == -1 || value.theaterId == selectedInfo) {
        if (
          result.filter((movie, index) => movie.movieId == value.movieId)
            .length == 0
        )
          result.push({
            movieId: value.movieId,
            showTime: {},
            ...value.movie[0],
          });

        if (
          !(
            value.date in
            result.find((movie, index) => movie.movieId == value.movieId)
              .showTime
          )
        )
          if (selectedInfo == -1 || value.theaterId == selectedInfo)
            result.find(
              (movie, index) => movie.movieId == value.movieId,
            ).showTime[value.date] = [];
        result
          .find((movie, index) => movie.movieId == value.movieId)
          .showTime[value.date].push({
            time: value.time,
            theaterId: value.theaterId,
          });
      }
    });
    setCombinedDate(result);
  }, [selectedInfo, schedule, theaterList]);

  useEffect(() => {
    getScheduleFunction().then(res => {
      setSchedule(res);
    });
    getTheatersFunction().then(res => {
      console.log('theater', res);
      setTheaterList(res);
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const rotation = isRotated => {
    return {
      transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.25s ease-in-out', // Adjust transition duration as needed
    };
  };

  return (
    <div style={{backgroundColor: '#231b5b'}}>
      <Splide
        options={{
          rewind: true,
          gap: '1rem',
          arrows: false,
          autoplay: true,
          interval: 1000,
        }}
        aria-label="My Favorite Images">
        <SplideSlide>
          <img style={{width: '100%'}} src={IM_Banner} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{width: '100%'}} src={IM_Banner1} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{width: '100%'}} src={IM_Banner2} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img style={{width: '100%'}} src={IM_Banner3} alt="Image 1" />
        </SplideSlide>
      </Splide>
      <div className={styles.bookingContainer}>
        <BookingFilter></BookingFilter>
      </div>
      <div className={styles.theaterContainer}>
        <div className={styles.theaterFilter}>
          <div className={styles.text1}>Theater System</div>
          <div className={styles.boxGridContainer}>
            <div id="drop">
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                  setIsRotated(!isRotated);
                }}
                className={styles.dropDown}>
                <button className={styles.dropBtn}>
                  <div className={styles.dropText}>
                    {selectedInfo == -1
                      ? 'Choose Theater'
                      : theaterList[selectedInfo - 1].name}
                  </div>
                  <img
                    className={styles.dropIcon}
                    src={SVG_SelectDown}
                    alt="Select Icon"
                    style={rotation(isRotated)}
                  />
                </button>
                {isOpen && (
                  <div className={styles.dropDownContent}>
                    {theaterList.map(i => (
                      <div
                        onClick={() => {
                          setSelectedInfo(i.theaterId);
                          setIsOpen(false);
                          setIsRotated(false);
                        }}
                        className={styles.dropDownItem}>
                        {i.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.theaterDisplay}>
          <div className={styles.theaterName}>
            {selectedInfo == -1 ? '' : theaterList[selectedInfo - 1].name}
          </div>
          <div className={styles.theaterAddress}>
            {selectedInfo == -1 ? '' : theaterList[selectedInfo - 1].address}
          </div>
        </div>
      </div>
      <div className={styles.movieListContainer}>
        {selectedInfo == -1 ? (
          ''
        ) : (
          <Grid>
            {combinedDate.map(obj => {
              return (
                <Grid
                  item
                  xs={6}
                  key={`${obj.movieId}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    backgroundColor: '#231b5b',
                    marginTop: '20px',
                  }}>
                  <MovieInfoS
                    src={obj.image}
                    title={obj.title}
                    detail={obj.description}
                    showtimes={obj.showTime}></MovieInfoS>
                </Grid>
              );
            })}
          </Grid>
        )}
      </div>
    </div>
  );
}

export default Schedule;
