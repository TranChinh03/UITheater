import React, {useEffect, useState} from 'react';
import './infotabpanel.module.scss';
import '../../assets/fonts/fonts.css';
import {useNavigate} from 'react-router-dom';

function InfoTabPanel({toggleState, onToggleTab}) {
  console.log(toggleState);
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem('Token');
    navigate('/');
  };
  return (
    <div className="container">
      <div className="TabsPanel">
        <a
          className={toggleState === 1 ? 'active' : ''}
          onClick={() => onToggleTab(1)}>
          <div className="TabsPanelText">Information</div>
        </a>
        <a
          className={toggleState === 2 ? 'BetweenTab active' : 'BetweenTab'}
          onClick={() => onToggleTab(2)}>
          <div className="TabsPanelText">Account</div>
        </a>
        <a
          className={toggleState === 3 ? 'BetweenTab active' : 'BetweenTab'}
          onClick={() => onToggleTab(3)}>
          <div className="TabsPanelText">Member ship</div>
        </a>
        <a
          className={toggleState === 4 ? 'BetweenTab active' : 'BetweenTab'}
          onClick={() => onToggleTab(4)}>
          <div className="TabsPanelText">Setting</div>
        </a>
        <a className={'EndTab'} onClick={Logout}>
          <div className="TabsPanelText">Log Out</div>
        </a>
      </div>
    </div>
  );
}

export default InfoTabPanel;
