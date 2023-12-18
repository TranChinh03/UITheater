import React, {useState} from 'react';
import styles from './movieinfos.module.scss';
import {Grid} from '@mui/material';

function MovieInfoS(props) {
  const groupArrays = props.showtimes.map(date => {
    return {
      date,
      showtime: props.showtimes[date],
    };
  });

  console.log('aaaa', groupArrays);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.bgContainer}>
          <img
            src={props.image}
            alt="Phim"
            width={'200px'}
            height={'300px'}
            style={{marginLeft: '10px', marginRight: '10px'}}></img>
          <div className={styles.infoContainer}>
            <div className={styles.movieTitle}>{props.title}</div>
            <div className={styles.detailContainer}>
              <div>{props.detail}</div>
            </div>
          </div>
        </div>

        <Grid container>
          {groupArrays.map(e => {
            console.log('111', e);
            return (
              <Grid item key={e.index} className={styles.showtimeContainer}>
                <div className={styles.date}>{e.date}</div>
                {e.showtime.map(x => (
                  <button key={x.showtime} className={styles.time}>
                    {x.showtime}
                  </button>
                ))}
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default MovieInfoS;
