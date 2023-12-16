import React, {useState, useEffect} from 'react';
import MovieInfoS from '../../components/MovieInfoS/movieInfoS';
import styles from './schedulescreen.module.scss';
import {Grid} from '@mui/material';
import {IM_Banner, IM_Banner1, IM_Banner2, IM_Banner3} from '../../assets/imgs';
import BookingFilter from '../../components/BookingFilter/bookingFilter';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import {getListMovieFunction} from '../../apis/GetMethod/getListMovie';
import {getShowtimesFunction} from '../../apis/GetMethod/getShowtimes';
import {getTheatersFunction} from '../../apis/GetMethod/getTheaters';

import {SVG_SelectDown} from '../../assets/icons';

function Schedule() {
  const [movieList, setMovieList] = useState([]);
  const [showtimeList, setShowtimeList] = useState();
  const [theaterList, setTheaterList] = useState();

  const currentStatus = 'OnShow';

  const combinedData = movieList.reduce((acc, movie) => {
    const movieShowtimes = showtimeList
      .filter(showtime => showtime.movieId === movie.movieId)
      .reduce((grouped, showtime) => {
        const date = showtime.date;

        const theater = theaterList.filter(
          theater => theater.theaterId === showtime.theaterId,
        );

        if (!grouped[date]) {
          grouped[date] = [];
        }

        if (!grouped[date][theater.theaterId]) {
          grouped[date][theater.theaterId] = {
            theater,
            showtimes: [],
          };
        }
        grouped[date][theater.theaterId].showtimes.push(showtime);
        return grouped;
      }, {});

    acc.push({...movie, showtimes: movieShowtimes});
    return acc;
  }, []);

  console.log('gi z', combinedData);

  useEffect(() => {
    getListMovieFunction().then(res => {
      console.log('listm: ', res);
      setMovieList(res);
    });
    getShowtimesFunction().then(res => {
      console.log('listst:', res);
      setShowtimeList(res);
    });
    getTheatersFunction().then(res => {
      console.log('listt:', res);
      setTheaterList(res);
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState('Choose Theater');
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
                  <div className={styles.dropText}>{selectedInfo}</div>
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
                          setSelectedInfo(i);
                          setIsOpen(false);
                          setIsRotated(false);
                        }}
                        className={styles.dropDownItem}>
                        {i}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.theaterDisplay}>
          <div className={styles.text1}>UITheater Parkson</div>
          <div>
            63 Truong Dinh Street, Ben Thanh Ward, District 1, Ho Chi Minh
          </div>
        </div>
      </div>
      <div className={styles.movieListContainer}>
        <Grid>
          {combinedData
            .filter(movie => movie.status === currentStatus)
            .map((value, status) => (
              <Grid
                item
                xs={6}
                key={status}
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  backgroundColor: '#231b5b',
                  marginTop: '20px',
                }}>
                <MovieInfoS
                  src={value.image}
                  title={value.title}
                  detail={value.description}
                  showtimes={value.showtimes}></MovieInfoS>
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
}

export default Schedule;
