import React, {useEffect, useState} from 'react';
import '../../assets/fonts/fonts.css';
import MoviesNavBar from '../../components/moviesNavBar/moviesNavBar';
import MovieBlock from '../../components/movieBlock/movieBlock';
import {SVG_LeftArrow} from '../../assets/icons';
import {IM_Banner} from '../../assets/imgs';
import BookingFilter from '../../components/BookingFilter/bookingFilter';
import styles from './homescreen.module.scss';

function Home() {
  const [currentTab, setCurrentTab] = useState('NOW SHOWING');
  const handleTabChanged = tabName => {
    setCurrentTab(tabName);
  };

  return (
    <div className={styles.container}>
      <img style={{width: '100%', height: '300px'}} src={IM_Banner} alt="" />
      <div className={styles.bookingContainer}>
        <BookingFilter></BookingFilter>
      </div>
      <div className={styles.movieContainer}>
        <div className={styles.movieNavContainer}>
          <MoviesNavBar
            onChangeTab={handleTabChanged}
            selectedTab={currentTab}
            className={styles.moviesNav}
          />
        </div>
        <div className={styles.movieContent}>
          <div className={styles.movieWrap}>
            <div className={styles.movieLoad}>
              <div>
                <img className="arrow" src={SVG_LeftArrow} alt="arr" />
              </div>
              <div>
                <MovieBlock></MovieBlock>
              </div>
              <div>
                <MovieBlock></MovieBlock>
              </div>
              <div>
                <MovieBlock></MovieBlock>
              </div>
              <div>
                <MovieBlock></MovieBlock>
              </div>
              <div>
                <MovieBlock></MovieBlock>
              </div>
              <div>
                <img className={styles.arrowRight} src={SVG_LeftArrow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
