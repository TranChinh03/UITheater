import React, {useState} from 'react';
import MovieInfo from '../../components/MovieInfo/movieInfo';
import {Grid, Box} from '@mui/material';
import styles from './moviescreen.module.scss';
import MoviesNavBar from '../../components/moviesNavBar/moviesNavBar';
import BookingFilter from '../../components/BookingFilter/bookingFilter';
import {IM_Banner} from '../../assets/imgs';

const movieInfoList = [
  {
    id: '1',
    title: 'Shin',
    detail: 'Noi chung la thu coi co oke kh chu biet lam gi dau huhuhuhuhuhuhu',
    premiere: '31/12/1111',
  },
  {
    id: '2',
    title: 'Doraemon',
    detail: 'Thiet luon la khong biet ghi cai qq gi',
    premiere: '01/01/1111',
  },
  {
    id: '3',
    title: 'Conan',
    detail: 'Ngoi viet may cai detail nay met moi zl',
    premiere: '02/01/1111',
  },
  {
    id: '4',
    title: 'Hunter x Hunter',
    detail: 'Che zl kh nghi ra duoc cai gi de test',
    premiere: '02/02/2222',
  },
  {
    id: '5',
    title: 'Meo Di Hia',
    detail: 'Troi dat oi ngoi nghe album cua Obito hay quaauauauauau',
    premiere: '31/31/3131',
  },
  {
    id: '6',
    title: 'Ca Sau',
    detail: 'Khong biet phim l gi luon',
    premiere: '55/55/5555',
  },
  {
    id: '7',
    title: 'Huou Cao Co',
    detail: 'Roi qua thanh the gioi dong vat luon phim phiec gi nua',
    premiere: '88/88/8888',
  },
  {
    id: '8',
    title: 'Ca Voi Sat Thu',
    detail: 'Mac cai gi ma bay qua ca voi luon z tr',
    premiere: '77/77/7777',
  },
];

function Movies() {
  const [currentTab, setCurrentTab] = useState('NOW SHOWING');
  const handleTabChanged = tabName => {
    setCurrentTab(tabName);
  };

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
            {movieInfoList.map((value, id) => (
              <Grid
                item
                xs={6}
                key={id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  backgroundColor: '#231b5b',
                  marginTop: '20px',
                }}>
                <MovieInfo
                  title={value.title}
                  detail={value.detail}
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
