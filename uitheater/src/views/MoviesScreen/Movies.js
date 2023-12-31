import React, {useState, useEffect} from 'react';
import MovieInfo from '../../components/MovieInfo/movieInfo';
import {Grid, Box, breadcrumbsClasses} from '@mui/material';
import styles from './moviescreen.module.scss';
import MoviesNavBar from '../../components/moviesNavBar/moviesNavBar';
import BookingFilter from '../../components/BookingFilter/bookingFilter';
import {IM_Banner, IM_Banner1, IM_Banner2, IM_Banner3} from '../../assets/imgs';
import {getListMovieFunction} from '../../apis/GetMethod/getListMovie';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import {BreakfastDining} from '@mui/icons-material';

function Movies() {
  const [currentTab, setCurrentTab] = useState('NOW SHOWING');
  const [movieList, setMovieList] = useState([]);
  const [currentStatus, setCurrentStatus] = useState('OnShow');

  const handleTabChanged = tabName => {
    setCurrentTab(tabName);
    console.log(currentTab);
  };

  useEffect(() => {
    // getListMovieFunction().then(res => {
    //   console.log(res);
    //   setMovieList(res);
    // });
    setMovieList(JSON.parse(localStorage.getItem('movieList')))
    switch (currentTab) {
      case 'NOW SHOWING':
        setCurrentStatus('OnShow');
        break;
      case 'COMING SHOW':
        setCurrentStatus('ComingShow');
        break;
      case 'SPECIAL SCREENINGS':
        setCurrentStatus('SpecialShow');
        break;
      default:
        console.log('la co ra gi kh nhi?');
        break;
    }
  }, [currentTab]);

  return (
    <>
      <div style={{backgroundColor: '#231b5b'}}>
      <Splide
        options={ {
          rewind: true,
          gap   : '1rem',
          arrows: false,
          autoplay: true,
          interval: 1000,
        } }
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <img style={{width: '100%'}} src={IM_Banner} alt="Image 1"/>
        </SplideSlide>
        <SplideSlide>
          <img style={{width: '100%'}} src={IM_Banner1} alt="Image 1"/>
        </SplideSlide>
        <SplideSlide>
          <img style={{width: '100%'}} src={IM_Banner2} alt="Image 1"/>
        </SplideSlide>
        <SplideSlide>
          <img style={{width: '100%'}} src={IM_Banner3} alt="Image 1"/>
        </SplideSlide>
      </Splide>
        {/* <div className={styles.bookingContainer}>
          <BookingFilter></BookingFilter>
        </div> */}
        <div className={styles.movieNavContainer}>
          <MoviesNavBar
            onChangeTab={handleTabChanged}
            selectedTab={currentTab}
            className={styles.moviesNav}
          />
        </div>
        <div className={styles.movieListContainer}>
          <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
            {movieList
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
                  <MovieInfo
                    src={value.image}
                    title={value.title}
                    detail={value.description}
                    premiere={value.predate}
                    big={false}></MovieInfo>
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Movies;
