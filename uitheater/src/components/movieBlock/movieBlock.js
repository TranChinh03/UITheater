import React from 'react';
import '../../styles/global.scss';
import styles from './movieblock.module.scss';
import '../../assets/fonts/fonts.css';
import src from '../../assets/imgs/shin-cau-be-but-chi.jpg';

function MovieBlock({movieName, movieImg}) {
  return (
    <div className={styles.movieBlockContainer}>
      <div className={styles.imageContainer}>
        <img src={src} alt="Ảnh phim" />
      </div>
      <div className={styles.movieName}>
        <p>
          {movieName}
        </p>
      </div>
    </div>
  );
}

export default MovieBlock;
