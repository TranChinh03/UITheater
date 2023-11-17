import React, {useEffect, useState} from 'react';
import '../../assets/fonts/fonts.css';
import MoviesNavBar from '../../components/moviesNavBar/moviesNavBar';
import MovieBlock from '../../components/movieBlock/movieBlock';
import {SVG_LeftArrow} from '../../assets/icons';
import {IM_Banner} from '../../assets/imgs';
import BookingFilter from '../../components/BookingFilter/bookingFilter';
import styles from './homescreen.module.scss';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import src from '../../assets/imgs/shin-cau-be-but-chi.jpg';

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
            <Splide hasTrack={ false } options={ {
                  type   : 'loop',
                  rewind: true,
                  perPage: 5,
                  focus: 'center',
                  
                }}
                aria-label="Movies On Show" >
            <SplideTrack>
              <SplideSlide>
                <MovieBlock movieName="Phim 1" />
              </SplideSlide>
              <SplideSlide>
              <MovieBlock movieName="Phim 2" />
              </SplideSlide>
              <SplideSlide>
              <MovieBlock movieName="Phim 3" />
              </SplideSlide>
              <SplideSlide>
              <MovieBlock movieName="Phim 4" />
              </SplideSlide>
              <SplideSlide>
              <MovieBlock movieName="Phim 5" />
              </SplideSlide>
            </SplideTrack>

            <div className="splide__arrows splide__arrows--ltr">
              <button className={`splide__arrow splide__arrow--prev ${styles.splide__prevArrow}`} aria-label="Previous slide" aria-controls="splide01-track">
                <img className="arrow" src={SVG_LeftArrow} alt="arr" focusa ble="false"/>
              </button>
              <button className={`splide__arrow splide__arrow--next ${styles.splide__nextArrow}`} aria-label="Next slide" aria-controls="splide01-track">
                <img className={styles.arrowRight} src={SVG_LeftArrow} />
              </button>
            </div>
          </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
