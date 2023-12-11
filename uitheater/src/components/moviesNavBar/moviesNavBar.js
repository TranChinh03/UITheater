import React, {useEffect, useState} from 'react';
import '../../styles/global.scss';
import '../../assets/fonts/fonts.css';
import styles from './moviesnavbar.module.scss';

function MoviesNavBar({selectedTab, onChangeTab}) {
  return (
    <div className={styles.container}>
      <ul>
        <li
          id={'OnShow'}
          style={{zIndex: 3}}
          className={selectedTab === 'NOW SHOWING' ? styles.current : ''}
          onClick={() => onChangeTab('NOW SHOWING')}>
          <a>NOW SHOWING</a>
        </li>
        <li
          id={'ComingShow'}
          style={{zIndex: 2}}
          className={selectedTab === 'COMING SHOW' ? styles.current : ''}
          onClick={() => onChangeTab('COMING SHOW')}>
          <a>COMING SHOW</a>
        </li>
        <li
          id={'SpecialShow'}
          style={{zIndex: 1}}
          className={selectedTab === 'SPECIAL SCREENINGS' ? styles.current : ''}
          onClick={() => onChangeTab('SPECIAL SCREENINGS')}>
          <a>SPECIAL SCREENINGS</a>
        </li>
      </ul>
    </div>
  );
}

export default MoviesNavBar;
