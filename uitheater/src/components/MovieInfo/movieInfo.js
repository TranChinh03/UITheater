import React from 'react';
import src from '../../assets/imgs/shin-cau-be-but-chi.jpg';
import {SVG_Youtube} from '../../assets/icons';
import styles from './movieinfo.module.scss';

function MovieInfo(props) {
  return (
    <>
      <div className={styles.bgContainer}>
        <img
          src={props.src}
          alt="Phim"
          width={'200px'}
          height={'300px'}
          style={{marginLeft: '10px', marginRight: '10px'}}></img>
        <div className={styles.infoContainer}>
          <div className={styles.movieTitle}>{props.title}</div>
          <div className={styles.detailContainer}>
            <div>{props.detail}</div>
          </div>
          <div className={styles.preDate}>
            <div style={{color: 'white'}}>Premiere:</div>
            <div className={styles.preDateContainer}>
              <div className={styles.date}>From {props.premiere}</div>
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.trailerBtn}>
              <img className={styles.ytbLogo} src={SVG_Youtube} alt="Youtube" />
              Trailer
            </button>
            <button className={styles.bookingBtn}>BOOKING NOW</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieInfo;
