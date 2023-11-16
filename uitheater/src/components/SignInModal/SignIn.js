import React, {useEffect, useState} from 'react';
import {Button, Modal, ConfigProvider, Space} from 'antd';
import cookie from 'react-cookies';
import styles from './signin.module.scss';
import {Form, Input} from 'antd';
import {NavLink, useNavigate} from 'react-router-dom';
import axios from 'axios';
const SignIn = props => {
  const {isModalOpen, handleCancel} = props;
  const handleOk = handleCancel;
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);

  // To disable submit button at the beginning.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onLogin = () => {
    cookie.save('UserToken', localStorage.getItem('Token'), {path: '/'});
  };
  async function onClickSignIn(e) {
    e.preventDefault();
    let data = JSON.stringify({
      email: email,
      password: password,
    });

    let config = {
      method: 'post',
      url: 'https://uitlogachcu.onrender.com/sign_in',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios
      .request(config)
      .then(response => {
        localStorage.setItem('Token', response.data);
      })
      .then(() => {
        onLogin();
      })
      .then(() => {
        handleOk();
        navigate('/');
      })

      .catch((error) => {
        console.log("ERR");

        console.log(error);
      });
  }
  useEffect(() => {
    setClientReady(true);
  }, []);
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 40,
          paddingLG: 100,
        },
        components: {
          Modal: {
            colorBgElevated: '#231B5B',
            colorIcon: '#FFFFFF',
          },
          Form: {
            labelColor: '#FFFFFF',
          },
          Button: {
            borderRadius: 45,
            colorBorder: '#231B5B',
            colorBgContainer: '#231B5B',
            colorText: '#FFFFFF',
          },
        },
      }}>
      <Modal
        style={{display: 'flex', marginRight: '163px', top: '50px'}}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={300}>
        <Form
          form={form}
          size="small"
          layout="vertical"
          onSubmitCapture={e => console.log(e)}>
          <Form.Item label="Email: " style={{height: '40px'}}>
            <Input
              style={{borderRadius: 35, fontSize: 14, height: '30px'}}
              className={styles.input}
              placeholder="Please enter your email"
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item label="Password: " style={{height: 'fit-content'}}>
            <Input.Password
              style={{
                paddingLeft: 10,
                borderRadius: 35,
                fontSize: 14,
                height: '30px',
              }}
              onChange={e => {
                setPassword(e.target.value);
              }}
              placeholder="Please enter your password"
            />
          </Form.Item>
          <Space>
            <Button
              onClick={onClickSignIn}
              style={{
                width: 'fit-content',
                height: 'fit-content',
                fontSize: 31,
                borderRadius: 45,
                display: 'flex',
                alignItems: 'center',
                fontFamily: 'Lilita One',
                textShadow: 'none',
              }}>
              SIGN IN
            </Button>
            <Space wrap>
              <Button
                type="link"
                style={{
                  width: 'fit-content',
                  height: 'fit-content',
                  display: 'flex',
                  alignItems: 'center',
                  textShadow: 'none',
                  marginRight: 20,
                  fontStyle: 'italic',
                }}>
                Forget password?
              </Button>
              <Button
                type="link"
                style={{
                  width: 'fit-content',
                  height: 'fit-content',
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Lilita One',
                  textShadow: 'none',
                }}>
                <NavLink to="/register">Create new account</NavLink>
              </Button>
            </Space>
          </Space>
        </Form>
      </Modal>
    </ConfigProvider>
  );
};
export default SignIn;
