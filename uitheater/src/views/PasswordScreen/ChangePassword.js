import React, {useState, useEffect} from 'react';
import styles from './passwordscreen.module.scss';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function ChangePassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  async function onForgotPassword(e) {
    e.preventDefault();
    let data = JSON.stringify({
      email: email,
    });

    let config = {
      method: 'post',
      url: 'https://uitlogachcu.onrender.com/forgot_password',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios
      .request(config)
      .then(() => {
        alert('Please check your email to reset password');
      })
      .catch(error => {
        console.log('ERR');
        console.log(error);
      });
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer} style={{height: '400px'}}>
          <div className={styles.title} style={{marginBottom: '20px'}}>
            Change your password
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.label}>Enter new password:</div>
            <input
              type="text"
              placeholder="Please enter new password"
              className={styles.input}
              onChange={e => {}}></input>
          </div>
          <div className={styles.inputContainer} style={{marginTop: '30px'}}>
            <div className={styles.label}>Re-enter new password:</div>
            <input
              type="text"
              placeholder="Please re-enter new password"
              className={styles.input}
              onChange={e => {}}></input>
          </div>
          <button className={styles.sendBtn} onClick={() => {}}>
            <div>Change password</div>
          </button>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
