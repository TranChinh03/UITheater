import React, {useState, useEffect} from 'react';
import MovieInfo from '../../components/MovieInfo/movieInfo';
import {Grid, Box, breadcrumbsClasses} from '@mui/material';
import styles from './moviescreen.module.scss';
import MoviesNavBar from '../../components/moviesNavBar/moviesNavBar';
import BookingFilter from '../../components/BookingFilter/bookingFilter';
import {IM_Banner} from '../../assets/imgs';
import {getListMovieFunction} from '../../apis/GetMethod/getListMovie';
import {BreakfastDining} from '@mui/icons-material';

function Movies() {
  const [currentTab, setCurrentTab] = useState('NOW SHOWING');
  const [movieList, setMovieList] = useState([]);
  const [currentStatus, setCurrentStatus] = useState('OnShow');

  const handleTabChanged = tabName => {
    setCurrentTab(tabName);

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
  };

  useEffect(() => {
    getListMovieFunction().then(res => {
      console.log(res);
      setMovieList(res);
    });
  }, []);

  return (
    <>
      <div style={{backgroundColor: '#231b5b'}}>
        <img style={{width: '100%', height: '300px'}} src={IM_Banner} alt="" />
        <div className={styles.bookingContainer}>
          <BookingFilter></BookingFilter>
        </div>
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
                    premiere={value.premiere}></MovieInfo>
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Movies;
