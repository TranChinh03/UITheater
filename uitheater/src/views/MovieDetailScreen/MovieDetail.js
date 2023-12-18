import MovieInfo from "../../components/MovieInfo/movieInfo";
import React, {useEffect, useState} from 'react';
import styles from "./moviedetailscreen.module.scss"
import '@splidejs/react-splide/css';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import {SVG_LeftArrow} from '../../assets/icons';
import MovieBlock from "../../components/movieBlock/movieBlock";
import { useLocation } from "react-router-dom";


const MovieDetail = () => {
    const location = useLocation()
    const movie = location.state
    const [movieList, setMovieList] = useState(JSON.parse(localStorage.getItem('movieList')));
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <MovieInfo
                        src={movie.image}
                        title={movie.title}
                        detail={movie.description}
                        premiere={movie.predate}
                        big={true}/>
            </div>
        <div className={styles.movieWrap}>
            <Splide hasTrack={ false } options={ {
                type   : 'loop',
                rewind: true,
                perPage: 5,
                }}
                aria-label="Movies On Show" >
            <SplideTrack>
            {movieList.filter(movie => movie.status === "OnShow").map((value, status) => (
                <SplideSlide>
                    <MovieBlock movie={value} isHome={false}/>
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
    )
}

export default MovieDetail