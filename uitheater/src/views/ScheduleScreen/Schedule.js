import React, {useState, useEffect} from 'react';
import MovieInfoS from '../../components/MovieInfoS/movieInfoS';
import styles from './schedulescreen.module.scss';
import {Grid} from '@mui/material';
import {IM_Banner, IM_Banner1, IM_Banner2, IM_Banner3} from '../../assets/imgs';
import BookingFilter from '../../components/BookingFilter/bookingFilter';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import {getListMovieFunction} from '../../apis/GetMethod/getListMovie';
import {getShowtimesFunction} from '../../apis/GetMethod/getShowtimes';
import {SVG_SelectDown} from '../../assets/icons';

function Schedule() {
  const [movieList, setMovieList] = useState([]);
  const [showtimeList, setShowtimeList] = useState();
  const currentStatus = 'OnShow';

  // const combineData = (movies, showtimes) => {
  //   return movies.map(movie => {
  //     const movieShowtimes = showtimes.find(
  //       showtime => showtime.movieId === movie.movieId,
  //     );
  //     return {...movie, showtimes: movieShowtimes};
  //   });
  // };

  // const groups = movieList.reduce((groups, obj) => {
  //   const movieId = obj.movieId;

  //   const movieShowtimes = showtimeList.filter(
  //     showtime => showtime.movieId === movieId,
  //   );

  //   if (!groups[movieShowtimes]) {
  //     groups[movieShowtimes] = [];
  //   }
  //   groups[movieShowtimes].push(obj);
  //   return groups;
  // }, {});

  // console.log('okela: ', groups);

  // // Edit: to add it in the array format instead
  // const groupArrays = Object.keys(groups).map(date => {
  //   return {
  //     date,
  //     showtime: groups[date],
  //   };
  // });

  const combinedData = movieList.reduce((acc, movie) => {
    const movieShowtimes = showtimeList
      .filter(showtime => showtime.movieId === movie.movieId)
      .reduce((grouped, showtime) => {
        const date = showtime.date;
        if (!grouped[date]) {
          grouped[date] = [];
        }
        grouped[date].push(showtime);
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
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState('Choose Theater');
  const [isRotated, setIsRotated] = useState(false);
  const theaters = [
    'UITheater Parkson',
    'UITheater Vincom',
    'UITheater Gigamall',
  ];

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
                    {theaters.map(i => (
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
