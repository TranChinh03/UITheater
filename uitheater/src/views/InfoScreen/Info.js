import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import styles from './infoscreen.module.scss';

import {patchAvatarFunction} from '../../apis/patchMethod/patchAvatar';
import {getAvatarsFunction} from '../../apis/GetMethod/getAvatars';
import {getOneAvatarFunction} from '../../apis/GetMethod/getOneAvatar';

import {getUserInfomationFunction} from '../../apis/GetMethod/getUser';
import {getHistoryFunction} from '../../apis/GetMethod/getHistory';
import {Table} from 'antd';
import {ConstantColorFactor} from 'three';
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const columns = [
  {
    title: 'No.',
    dataIndex: 'key',
  },
  {
    width: 300,
    title: 'Movie Title',
    dataIndex: 'movieName',
    sorter: {
      compare: (a, b) => a.movieTitle - b.movieTitle,
      multiple: 2,
    },
  },
  {
    width: 200,
    title: 'Date',
    dataIndex: 'date',
  },
  {
    width: 200,
    title: 'Showtime',
    dataIndex: 'time',
  },
  {
    width: 150,
    title: 'Seat',
    dataIndex: 'seatId',
    sorter: {
      compare: (a, b) => a.seatId - b.seatId,
      multiple: 2,
    },
  },
  {
    width: 150,
    title: 'Price',
    dataIndex: 'price',
    sorter: {
      compare: (a, b) => a.price - b.price,
      multiple: 1,
    },
  },
];

function Info() {
  const [user, setUser] = useState('');
  const [combinedData, setCombinedData] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState('');
  const avatarInputRef = useRef(null);

  useEffect(() => {
    getHistoryFunction().then(res => {
      setCombinedData(res);
      console.log('combie', combinedData);
    });
  }, []);
  const HistoryData = combinedData.map((item, index) => {
    return {
      key: index + 1,
      movieName: item.movieName,
      date: item.date,
      time: item.time,
      seatId: item.seatId,
      price: item.price,
    };
  });
  console.log(combinedData);
  const Token = localStorage.getItem('Token');
  useEffect(() => {
    getUserInfomationFunction().then(res => {
      setState({...res});
      setUser(res);
      loadAvatar(res._id);
    });
  }, []);

  const loadAvatar = async userId => {
    const avatarData = await getOneAvatarFunction(userId);
    console.log('gzzgz', avatarData);
    setAvatarUrl(avatarData.avatarUrl);
  };

  const handleAvatarChange = async event => {
    const file = event.target.files[0];

    try {
      // Upload the avatar file to the server and get the new avatar URL
      const formData = new FormData();
      formData.append('avatar', file);

      const response = await patchAvatarFunction(user._id, avatarUrl, formData);

      // Update the avatar URL in the state
      setAvatarUrl(response.avatarUrl);
    } catch (error) {
      console.error('Error uploading avatar:', error);
    }
  };

  const [action, setAction] = useState(true);
  const [state, setState] = useState({
    name: '',
    gender: '',
    date: '',
    email: '',
    phone: '',
  });

  const [edit, setEdit] = useState({
    name: '',
    gender: '',
    date: '',
    email: '',
    phone: '',
  });

  function assignInfo(state, edit) {
    state.name = edit.name;
    state.gender = edit.gender;
    state.date = edit.date;
    state.email = edit.email;
    state.phone = edit.phone;
  }

  function handleAction() {
    assignInfo(edit, state);
    setAction(!action);
  }

  function handleChange(evt) {
    const value = evt.target.value;
    setEdit({
      ...edit,
      [evt.target.name]: value,
    });
  }

  function handleSave() {
    console.log(edit.name);
    let data = JSON.stringify({
      name: edit.name,
      email: edit.email,
      date: edit.date,
      gender: edit.gender,
      phone: edit.phone,
    });
    let config = {
      method: 'patch',
      maxBodyLength: Infinity,
      url: 'https://uitlogachcu.onrender.com/me/info',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Token,
      },
      data: data,
    };
    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });
    assignInfo(state, edit);
    handleAction();
  }

  function handleCancel() {
    handleAction();
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.topContainer}>
            <div className={styles.title} style={{marginBottom: '20px'}}>
              {`Welcome, ${state.name}!`}
            </div>
            <div className={styles.avatar}>
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt="User Avatar"
                  className={styles.avatarImage}
                />
              ) : (
                <div className={styles.defaultAvatar}>Default Avatar</div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              style={{display: 'none'}}
              ref={avatarInputRef}
            />
            <button
              onClick={() => avatarInputRef.current.click()}
              className={styles.buttonChangeAvt}
              style={{backgroundColor: '#BEBEBE'}}>
              <div style={{color: '#FFFFFF'}}>Change</div>
            </button>
            <div className={styles.avatar}></div>
          </div>
          <div className={styles.statusContainer}></div>
          <div style={{marginTop: '50px'}}>
            {action ? (
              <>
                <div
                  style={{
                    marginLeft: '100px',
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: '20px',
                  }}>
                  <div className={styles.title}>Infomation:</div>
                  <button
                    onClick={() => handleAction()}
                    className={styles.buttonChangeInfo}>
                    <div style={{color: '#FFFFFF'}}>Change</div>
                  </button>
                </div>
                <div className={styles.infoCont}>
                  <div className={styles.textC}>
                    <div className={styles.text}>Name: </div>
                    {state.name !== '' ? (
                      <div className={styles.textt}>{state.name}</div>
                    ) : (
                      <div className={styles.textt}>
                        <text style={{color: '#BEBEBE'}}>Null</text>
                      </div>
                    )}
                  </div>
                  <div className={styles.textC}>
                    <div className={styles.text}>Gender: </div>
                    {state.gender !== '' ? (
                      <div className={styles.textt}>{state.gender}</div>
                    ) : (
                      <div className={styles.textt}>
                        <text style={{color: '#BEBEBE'}}>Null</text>
                      </div>
                    )}
                  </div>
                  <div className={styles.textC}>
                    <div className={styles.text}>Date of birth: </div>
                    {state.date !== '' ? (
                      <div className={styles.textt}>{state.date}</div>
                    ) : (
                      <div className={styles.textt}>
                        <text style={{color: '#BEBEBE'}}>Null</text>
                      </div>
                    )}
                  </div>
                  <div className={styles.textC}>
                    <div className={styles.text}>Email: </div>
                    {state.email !== '' ? (
                      <div className={styles.textt}>{state.email}</div>
                    ) : (
                      <div className={styles.textt}>
                        <text style={{color: '#BEBEBE'}}>Null</text>
                      </div>
                    )}
                  </div>
                  <div className={styles.textC}>
                    <div className={styles.text}>Phone: </div>
                    {state.phone !== '' ? (
                      <div className={styles.textt}>{state.phone}</div>
                    ) : (
                      <div className={styles.textt}>
                        <text style={{color: '#BEBEBE'}}>Null</text>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    marginLeft: '100px',
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <div className={styles.title}>Infomation:</div>
                  <button
                    name="cancel"
                    onClick={() => handleCancel()}
                    className={styles.buttonCancel}>
                    <div style={{color: '#FFFFFF'}}>Cancel</div>
                  </button>
                  <button
                    onClick={() => handleSave()}
                    className={styles.buttonSave}>
                    <div style={{color: '#FFFFFF'}}>Save</div>
                  </button>
                </div>
                <div className={styles.infoCont}>
                  <div className={styles.textC}>
                    <div className={styles.text}>Name: </div>
                    <input
                      className={styles.inputText}
                      type="text"
                      name="name"
                      value={edit.name}
                      onChange={e => handleChange(e)}
                      required></input>
                  </div>
                  <div className={styles.textC}>
                    <div className={styles.text}>Gender: </div>
                    <input
                      className={styles.inputText}
                      type="text"
                      name="gender"
                      value={edit.gender}
                      onChange={e => handleChange(e)}></input>
                  </div>
                  <div className={styles.textC}>
                    <div className={styles.text}>Date of birth: </div>
                    <input
                      className={styles.inputText}
                      type="date"
                      format="dd/MM/yyyy"
                      name="date"
                      value={edit.date}
                      onChange={e => handleChange(e)}></input>
                  </div>
                  <div className={styles.textC}>
                    <div className={styles.text}>Email: </div>
                    <input
                      className={styles.inputText}
                      type="text"
                      name="email"
                      value={edit.email}
                      onChange={e => handleChange(e)}></input>
                  </div>
                  <div className={styles.textC}>
                    <div className={styles.text}>Phone: </div>
                    <input
                      className={styles.inputText}
                      type="text"
                      name="phone"
                      value={edit.phone}
                      onChange={e => handleChange(e)}></input>
                  </div>
                </div>
              </>
            )}
          </div>
          <div
            style={{
              marginLeft: '100px',
              display: 'flex',
              flexDirection: 'row',
              marginBottom: '20px',
            }}>
            <div className={styles.title}>Membership:</div>
          </div>
          <div className={styles.memberContainer}>
            <div className={styles.textC}>
              <div className={styles.text}>Status: </div>
              <div className={styles.textt}>Member</div>
            </div>
            <div className={styles.textC}>
              <div className={styles.text}>Register Date: </div>
              <div className={styles.textt}>21 - 12 - 2023</div>
            </div>
            <div className={styles.textC}>
              <div className={styles.text}>Total Spending: </div>
              <div className={styles.textt}>1.000.000 VND</div>
            </div>
          </div>
          <div
            style={{
              marginLeft: '100px',
              display: 'flex',
              flexDirection: 'row',
              marginBottom: '20px',
            }}>
            <div className={styles.title}>History:</div>
          </div>
          <div className={styles.historyContainer}>
            <Table
              columns={columns}
              dataSource={HistoryData}
              onChange={onChange}
            />
            ;
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
