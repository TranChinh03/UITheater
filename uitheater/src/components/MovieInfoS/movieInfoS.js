import React from 'react';
import src from '../../assets/imgs/shin-cau-be-but-chi.jpg';
import {SVG_Youtube} from '../../assets/icons';
import styles from './movieinfos.module.scss';

function MovieInfoS(props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bgContainer}>
          <img
            src={src}
            alt="Phim"
            width={'200px'}
            height={'300px'}
            style={{marginLeft: '10px', marginRight: '10px'}}></img>
          <div className={styles.infoContainer}>
            {/* <div className={styles.movieTitle}>{props.title}</div> */}
            <div className={styles.movieTitle}>
              Noi chung la thu coi co oke kh chu biet lam gi dau huhuhuhuhuhuhu
            </div>
            <div className={styles.detailContainer}>
              <div>{props.detail}</div>
            </div>
          </div>
        </div>
        <div className={styles.showtimeContainer}></div>
      </div>
    </>
  );
}

export default MovieInfoS;
