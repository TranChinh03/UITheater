import React from 'react';
import '../../styles/global.scss';
import styles from './movieblock.module.scss';
import '../../assets/fonts/fonts.css';
import src from '../../assets/imgs/shin-cau-be-but-chi.jpg';
import { useState } from 'react';

function MovieBlock({movieName, movieImg, movieDes}) {
  const [isOpen, setIsOpen] = useState(false)
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles.movieBlockContainer} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className={styles.imageContainer}>
        <img src={movieImg} alt="Ảnh phim" />
      </div>
      <div className={styles.movieName}>
        <p>
          {movieName}
        </p>
      </div>

      {isOpen && <div className={`${styles.descriptionContainer} ${isOpen && styles.scale}`}>
        <p>{movieDes}</p>
        <p style={{flex: 0.1, margin: 0, color: '#D80032'}}>. . .</p>
        <button className={styles.detail}>Details</button>
        <div style={{flex:0.1}}/>
        <button className={styles.booking}>Book Now</button>
      </div>}

    </div>
  );
}

export default MovieBlock;
