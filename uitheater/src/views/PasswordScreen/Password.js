import React, {useState, useEffect} from 'react';
import styles from './passwordscreen.module.scss';
import {Form, Input} from 'antd';

function Password() {
  const [form] = Form.useForm();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.title} style={{marginBottom: '20px'}}>
            Forgot your password?
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.label}>Enter your email:</div>
            <input
              type="text"
              placeholder="Please enter your email"
              className={styles.input}></input>
          </div>
          <button className={styles.sendBtn}>
            <div>Send to email</div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Password;
