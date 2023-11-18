import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './infoscreen.module.scss';

function Info() {
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
  const Token = localStorage.getItem('Token');
  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://uitlogachcu.onrender.com/me',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Token,
      },
    };
    axios
      .request(config)
      .then(res => {
        setState({...res.data});
      })
      .catch(e => console.log(e));
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.topContainer}>
            <div className={styles.title} style={{marginBottom: '20px'}}>
              {`Welcome, ${state.name}!`}
            </div>
            <div className={styles.avatar}></div>
            <button
              onClick={() => {}}
              className={styles.buttonChangeAvt}
              style={{backgroundColor: '#BEBEBE'}}>
              <div style={{color: '#FFFFFF'}}>Change</div>
            </button>
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
                <div className="info-cont">
                  <div className="textC">
                    <div className="text">Name: </div>
                    {state.name !== '' ? (
                        <div className="textt">{(state.name)}</div>
                    ) : (
                        <div className="textt">
                          <text style={{color: '#BEBEBE'}}>Null</text>
                        </div>
                    )}
                  </div>
                  <div className="textC">
                    <div className="text">Gender: </div>
                    {state.gender !== '' ? (
                        <div className="textt">{state.gender}</div>
                    ) : (
                        <div className="textt">
                          <text style={{color: '#BEBEBE'}}>Null</text>
                        </div>
                    )}
                  </div>
                  <div className="textC">
                    <div className="text">Date of birth: </div>
                    {state.date !== '' ? (
                        <div className="textt">{state.date}</div>
                    ) : (
                        <div className="textt">
                          <text style={{color: '#BEBEBE'}}>Null</text>
                        </div>
                    )}
                  </div>
                  <div className="textC">
                    <div className="text">Email: </div>
                    {state.email !== '' ? (
                        <div className="textt">{state.email}</div>
                    ) : (
                        <div className="textt">
                          <text style={{color: '#BEBEBE'}}>Null</text>
                        </div>
                    )}
                  </div>
                  <div className="textC">
                  <div className="text">Phone: </div>
                    {state.phone !== '' ? (
                        <div className="textt">{state.phone}</div>
                    ) : (
                        <div className="textt">
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
            <table className={styles.historyTable}>
              <thead style={{backgroundColor: '#0c0326'}}>
                <td className={styles.headerTitle} style={{width: '6%'}}>
                  No.
                </td>
                <td className={styles.headerTitle} style={{width: 'auto'}}>
                  Movie Title
                </td>
                <td className={styles.headerTitle} style={{width: '13%'}}>
                  Date
                </td>
                <td className={styles.headerTitle} style={{width: '10%'}}>
                  Showtime
                </td>
                <td className={styles.headerTitle} style={{width: '7%'}}>
                  Ticket
                </td>
                <td className={styles.headerTitle} style={{width: '20%'}}>
                  Total
                </td>
              </thead>
              <tbody
                style={{
                  overflowY: 'scroll',
                  width: '80%',
                  height: '50px',
                  maxHeight: '500px',
                  display: 'block',
                }}></tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
