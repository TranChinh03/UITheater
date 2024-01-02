import React, {useState, useEffect} from 'react';
import styles from './passwordscreen.module.scss';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  async function onForgotPassword(e)
  {
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
          alert("Please check your email to reset password");
        })
        .catch((error) => {
          console.log("ERR");
          console.log(error);
        });
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer} style={{height: '300px'}}>
          <div className={styles.title} style={{marginBottom: '20px'}}>
            Forgot your password?
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.label}>Enter your email:</div>
            <input
              type="text"
              placeholder="Please enter your email"
              className={styles.input}
              onChange={e => {
                setEmail(e.target.value);
              }} ></input>
          </div>
          <button onClick={
            () => {
              onForgotPassword();
              message.success("Email sent!")
            }
              } className={styles.sendBtn}>
            <div>Send to email</div>
          </button>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
