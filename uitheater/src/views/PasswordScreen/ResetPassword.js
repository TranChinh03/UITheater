import React, {useState, useEffect} from 'react';
import styles from './passwordscreen.module.scss';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function ResetPassword() {
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  async function onResetPassword(e)
  {
      e.preventDefault();
      let data = JSON.stringify({
        password: password ,
        password2: password2,
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
          alert("Reset password successful");
        })
        .catch((error) => {
          console.log("ERR");
          console.log(error);
        });
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer} style={{height: '400px'}}>
          <div className={styles.title} style={{marginBottom: '20px'}}>
            Reset your password
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.label}>Enter new password:</div>
            <input
              type="text"
              placeholder="Please enter new password"
              className={styles.input}
              onChange={e=>{setPassword(e.target.value)}}></input>
          </div>
          <div className={styles.inputContainer} style={{marginTop: '30px'}}>
            <div className={styles.label}>Re-enter new password:</div>
            <input
              type="text"
              placeholder="Please re-enter new password"
              className={styles.input}
              onChange={e=>{setPassword2(e.target.value)}}></input>
          </div>
          <button className={styles.sendBtn} onClick={onResetPassword}>
            <div>Reset password</div>
          </button>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
