import React, {useEffect, useState} from 'react';
import '../../assets/fonts/fonts.css';
import MoviesNavBar from '../../components/moviesNavBar/moviesNavBar';
import MovieBlock from '../../components/movieBlock/movieBlock';
import {SVG_LeftArrow} from '../../assets/icons';
import {IM_Banner, IM_Banner1, IM_Banner2, IM_Banner3} from '../../assets/imgs';
import BookingFilter from '../../components/BookingFilter/bookingFilter';
import styles from './homescreen.module.scss';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import {getListMovieFunction} from '../../apis/GetMethod/getListMovie';
import '@splidejs/react-splide/css';


function Home() {
  const [currentTab, setCurrentTab] = useState('NOW SHOWING');
  const [movieList, setMovieList] = useState([]);
  const [currentStatus, setCurrentStatus] = useState('OnShow');

  useEffect(() => {
    // getListMovieFunction().then(res => {
    //   console.log(res);
    //   setMovieList(res);
    // });
    setMovieList(JSON.parse(localStorage.getItem('movieList')))
    switch (currentTab) {
      case "NOW SHOWING":
        setCurrentStatus('OnShow');
        break;
      case "COMING SHOW":
        setCurrentStatus('ComingShow');
        break;
      case "SPECIAL SCREENINGS":
        setCurrentStatus('SpecialShow');
        break;
      default:
        console.log('la co ra gi kh nhi?');
        break;
    }
  }, [currentTab]);

  const handleTabChanged = tabName => {
    setCurrentTab(tabName);
  };

  return (
    <div className={styles.container}>
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
                }}
                aria-label="Movies On Show" >
            <SplideTrack>
              {movieList.filter(movie => movie.status === currentStatus).map((value, status) => (
                  <SplideSlide>
                    <MovieBlock movieName={value.title} movieImg={value.image} movieDes={value.description}/>
                  </SplideSlide>
              ))}
            </SplideTrack>

            <div className="splide__arrows splide__arrows--ltr">
              <button className={`splide__arrow ${styles.splide__prevArrow}`} aria-label="Previous slide" aria-controls="splide01-track">
                <img className="splide__arrow--prev" src={SVG_LeftArrow}/>
              </button>
              <button className={`splide__arrow  ${styles.splide__nextArrow}`} aria-label="Next slide" aria-controls="splide01-track">
                <img className={`splide__arrow--next ${styles.arrowRight}`} src={SVG_LeftArrow} />
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
