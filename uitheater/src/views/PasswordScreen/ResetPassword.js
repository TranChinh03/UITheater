import React, {useState, useEffect} from 'react';
import styles from './passwordscreen.module.scss';

function ResetPassword() {
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
              className={styles.input}></input>
          </div>
          <div className={styles.inputContainer} style={{marginTop: '30px'}}>
            <div className={styles.label}>Re-enter new password:</div>
            <input
              type="text"
              placeholder="Please re-enter new password"
              className={styles.input}></input>
          </div>
          <button className={styles.sendBtn}>
            <div>Reset password</div>
          </button>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
