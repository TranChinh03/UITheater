import Header from "../../components/HeaderScreen/Header";
import {IM_Banner, IM_Banner1, IM_Banner2, IM_Banner3} from '../../assets/imgs';
import '@splidejs/react-splide/css';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import BookingFilter from '../../components/BookingFilter/bookingFilter';
import styles from "./aboutscreen.module.scss"
import {SVG_SelectDown} from '../../assets/icons';
import {useState} from 'react'

const rotation = isRotated => {
  return {
    transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.25s ease-in-out', // Adjust transition duration as needed
  };
};

  
  function About() {
    const [isOpen, setIsOpen] = useState([false, false, false, false]);
    const [isRotated, setIsRotated] = useState([false, false, false, false]);
    const questions = ["University", "Subject", "Lecturer", "Team"]
    const answers = ["UIT", "SE347", "Tran Anh Dung", "Team 9"]


    return (
      <div className={styles.container}>
        <Splide
            options={ {
              rewind: true,
              gap   : '1rem',
              arrows: false,
              autoplay: true,
              interval: 1000,
            } }
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <img style={{width: '100%'}} src={IM_Banner} alt="Image 1"/>
            </SplideSlide>
            <SplideSlide>
              <img style={{width: '100%'}} src={IM_Banner1} alt="Image 1"/>
            </SplideSlide>
            <SplideSlide>
              <img style={{width: '100%'}} src={IM_Banner2} alt="Image 1"/>
            </SplideSlide>
            <SplideSlide>
              <img style={{width: '100%'}} src={IM_Banner3} alt="Image 1"/>
            </SplideSlide>
          </Splide>
          <div className={styles.bookingContainer}>
            <BookingFilter></BookingFilter>
          </div>

            <div className={styles.aboutSection}>
            {isRotated.map((value, index) => (
              <div className={styles.aboutSection}>
                <button className={styles.aboutButton}                 
                onClick={() => {
                  isRotated.forEach((value, idx) => {
                    isRotated[idx] = index !== idx ? false : !value;
                    isOpen[idx] = index !== idx ? false : !value;
                  });
                  setIsRotated(isOpen);
                  setIsOpen(isRotated);
                }}>
                  <p>{index+1} {questions[index]}</p>
                <img
                        className={styles.dropIcon}
                        src={SVG_SelectDown}
                        alt="Select Icon"
                        style={rotation(value)}
                      />
                </button>
                {isOpen[index] && <div className={styles.answerContainer}>
                  {answers[index]}
                </div>}

              </div>
            ))}
          </div>

      </div>
    );
  }
  
  export default About;