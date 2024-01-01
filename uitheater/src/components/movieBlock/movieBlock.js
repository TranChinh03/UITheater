import React from 'react';
import '../../styles/global.scss';
import styles from './movieblock.module.scss';
import '../../assets/fonts/fonts.css';
import src from '../../assets/imgs/shin-cau-be-but-chi.jpg';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Modal, message } from 'antd';
import BookingFilter from '../BookingFilter/bookingFilter'

function MovieBlock({movie, isHome = true}) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div
      className={styles.movieBlockContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className={styles.imageContainer}>
        <img src={movie.image} alt="Ảnh phim" />
      </div>
      <div className={styles.movieName}>
        <p>{movie.title}</p>
      </div>

      {isOpen && (
        <div
          className={`${styles.descriptionContainer} ${
            isOpen && styles.scale
          }`}>
          <p>{movie.description}</p>
          <p style={{flex: 0.1, margin: 0, color: '#D80032'}}>. . .</p>
          <button
            className={styles.detail}
            onClick={() => {
              if (isHome) {
                navigate('moviedetail', {state: movie});
              } else {
                navigate('../moviedetail', {state: movie});
              }
            }}>
            Details
          </button>
          <div style={{flex: 0.1}} />
          <button onClick={() => {
            if (localStorage.getItem('Token')) {
              setIsModalOpen(true)
            }
            else {
              message.warning("Please sign in!")
            }
            }} className={styles.booking}>Book Now</button>
        </div>
      )}

      <Modal
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={false}
                width={"80%"}>
        <BookingFilter movieName={movie.title}/>
      </Modal>
    </div>
  );
}

export default MovieBlock;
