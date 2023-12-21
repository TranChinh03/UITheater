import React, {useState} from 'react';
import styles from './movieinfos.module.scss';
import {Grid} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function MovieInfoS(props) {
  const navigate = useNavigate();

  const groupArrays = Object.keys(props.showtimes).map(date => {
    return {
      date,
      showtime: props.showtimes[date],
    };
  });
  console.log('ga', groupArrays);

  return (
    <>
      <div className={styles.container}>
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
          </div>
        </div>

        <Grid container>
          {groupArrays.map(e => {
            return (
              <Grid item key={e.index} className={styles.showtimeContainer}>
                <div className={styles.date}>{e.date}</div>
                {e.showtime.map(x => (
                  <button
                    key={x.showtime}
                    className={styles.time}
                    onClick={() => {
                      navigate('/booking?showTime=' + x.showTimeId);
                    }}>
                    {x.time}
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
