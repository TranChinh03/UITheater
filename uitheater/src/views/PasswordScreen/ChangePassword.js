import React, {useState, useEffect} from 'react';
import styles from './passwordscreen.module.scss';
import {useNavigate} from 'react-router-dom';
import {ChangePasswordFunction} from '../../apis/patchMethod/changePassword';
import { message } from 'antd';

function ChangePassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  function changePassword() {
    ChangePasswordFunction(email, password, newPassword).then(res => {
      console.log('doi duoc chua nhi');
    });
    localStorage.removeItem('Token');
    message.success("Password Changed")
    navigate('/');
  }

  console.log('e, p, np', email, password, newPassword);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer} style={{height: '500px'}}>
          <div className={styles.title} style={{marginBottom: '20px'}}>
            Change your password
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.label}>Enter your email:</div>
            <input
              type="text"
              placeholder="Please your email"
              className={styles.input}
              onChange={e => setEmail(e.target.value)}></input>
          </div>
          <div className={styles.inputContainer} style={{marginTop: '30px'}}>
            <div className={styles.label}>Enter password:</div>
            <input
              type="text"
              placeholder="Please enter old password"
              className={styles.input}
              onChange={e => setPassword(e.target.value)}></input>
          </div>
          <div className={styles.inputContainer} style={{marginTop: '30px'}}>
            <div className={styles.label}>Enter new password:</div>
            <input
              type="text"
              placeholder="Please enter new password"
              className={styles.input}
              onChange={e => setNewPassword(e.target.value)}></input>
          </div>
          <button className={styles.sendBtn} onClick={changePassword}>
            <div>Change password</div>
          </button>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
