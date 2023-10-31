import React, {useState} from 'react';
import './infoStyle.scss';

function Info() {
  const [action, setAction] = useState(true);
  const [state, setState] = useState({
    name: '',
    gender: '',
    dob: '',
    email: '',
    phone: '',
  });

  function handleAction() {
    setAction(!action);
  }
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  return (
    <>
      <div className="scontainer">
        <div className="form-container">
          <div className="top-container">
            <div className="title" style={{marginBottom: '20px'}}>
              Welcome, Tran Dong Dong!
            </div>
            <div className="avatar"></div>
            <button
              onClick={() => {}}
              className="buttonChangeAvt"
              style={{backgroundColor: '#BEBEBE'}}>
              <div style={{color: '#FFFFFF'}}>Change</div>
            </button>
          </div>
          <div className="status-container"></div>
          <div style={{marginTop: '50px'}}>
            {action ? (
              <>
                <div
                  style={{
                    marginLeft: '100px',
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <div className="title">Infomation:</div>
                  <button
                    onClick={() => handleAction()}
                    className="buttonChangeInfo">
                    <div style={{color: '#FFFFFF'}}>Change</div>
                  </button>
                </div>
                <div className="info-cont">
                  <div className="textC">
                    <div className="text">Name: </div>
                    <div className="textt">{state.name}</div>
                  </div>
                  <div className="textC">
                    <div className="text">Gender: </div>
                    <div className="textt">{state.gender}</div>
                  </div>
                  <div className="textC">
                    <div className="text">Date of birth: </div>
                    <div className="textt">{state.dob}</div>
                  </div>
                  <div className="textC">
                    <div className="text">Email: </div>
                    <div className="textt">{state.email}</div>
                  </div>
                  <div className="textC">
                    <div className="text">Phone: </div>
                    <div className="textt">{state.phone}</div>
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
                  <div className="title">Infomation:</div>
                  <button
                    name="cancel"
                    onClick={() => handleAction()}
                    className="buttonCancel">
                    <div style={{color: '#FFFFFF'}}>Cancel</div>
                  </button>
                  <button onClick={() => handleAction()} className="buttonSave">
                    <div style={{color: '#FFFFFF'}}>Save</div>
                  </button>
                </div>
                <div className="info-cont">
                  <div className="textC">
                    <div className="text">Name: </div>
                    <input
                      className="input-text"
                      type="text"
                      name="name"
                      value={state.name}
                      onChange={e => handleChange(e)}
                      required></input>
                  </div>
                  <div className="textC">
                    <div className="text">Gender: </div>
                    <input
                      className="input-text"
                      type="text"
                      name="gender"
                      value={state.gender}
                      onChange={e => handleChange(e)}></input>
                  </div>
                  <div className="textC">
                    <div className="text">Date of birth: </div>
                    <input
                      className="input-text"
                      type="text"
                      name="dob"
                      value={state.dob}
                      onChange={e => handleChange(e)}></input>
                  </div>
                  <div className="textC">
                    <div className="text">Email: </div>
                    <input
                      className="input-text"
                      type="text"
                      name="email"
                      value={state.email}
                      onChange={e => handleChange(e)}></input>
                  </div>
                  <div className="textC">
                    <div className="text">Phone: </div>
                    <input
                      className="input-text"
                      type="text"
                      name="phone"
                      value={state.phone}
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
            }}>
            <div className="title">Membership:</div>
          </div>
          <div className="member-container">
            <div className="textC">
              <div className="text">Status: </div>
              <div className="textt">Member</div>
            </div>
            <div className="textC">
              <div className="text">Register Date: </div>
              <div className="textt">21 - 12 - 2023</div>
            </div>
            <div className="textC">
              <div className="text">Total Spending: </div>
              <div className="textt">1.000.000 VND</div>
            </div>
          </div>
          <div className="history-container"></div>
        </div>
      </div>
    </>
  );
}

export default Info;
