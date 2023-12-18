import React from 'react';
import src from '../../assets/imgs/shin-cau-be-but-chi.jpg';
import {SVG_Youtube} from '../../assets/icons';
import styles from './movieinfo.module.scss';

function MovieInfo(props) {
  if (!props.big)
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
    </>)

    else return (
      <>
        <div className={styles.bgContainer2}>
        <img
          src={props.src}
          alt="Phim"
          width={'400px'}
          height={'600px'}
          style={{marginLeft: '10px', marginRight: '10px'}}></img>
        <div className={styles.infoContainer2}>
          <div className={styles.movieTitle2}>{props.title}</div>
          <div className={styles.detailContainer2}>
            <div>{props.detail}</div>
          </div>
          <div className={styles.preDate2}>
            <div style={{color: 'white'}}>Premiere:</div>
            <div className={styles.preDateContainer2}>
              <div className={styles.date2}>From {props.premiere}</div>
            </div>
          </div>
          <div className={styles.buttons2}>
            <button className={styles.trailerBtn2}>
              <img className={styles.ytbLogo2} src={SVG_Youtube} alt="Youtube" />
              Trailer
            </button>
            <button className={styles.bookingBtn2}>BOOKING NOW</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieInfo;
