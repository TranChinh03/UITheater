import React, {useState} from 'react';
import styles from './movieinfos.module.scss';
import {Grid} from '@mui/material';

function MovieInfoS(props) {
  const groups = props.showtimes.reduce((groups, obj) => {
    const date = obj.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(obj);
    return groups;
  }, {});

  // Edit: to add it in the array format instead
  const groupArrays = Object.keys(groups).map(date => {
    return {
      date,
      showtime: groups[date],
    };
  });

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
          {groupArrays.map(e => (
            <Grid item key={e.date} className={styles.showtimeContainer}>
              <div className={styles.date}>{e.date}</div>
              {e.showtime.map(x => (
                <button key={x.showtime} className={styles.time}>
                  {x.showtime}
                </button>
              ))}
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default MovieInfoS;
