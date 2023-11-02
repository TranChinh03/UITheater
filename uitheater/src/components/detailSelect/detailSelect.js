import React, {useState} from 'react';
import '../detailSelect/detailSelectStyle.scss';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Input} from '@mui/material';
import TextField from '@mui/material/TextField';

function DetailSelect() {
  const [countS, setCountS] = useState(0);
  const [countD, setCountD] = useState(0);
  const max = 10;
  const maxS = 100000;
  const maxD = 200000;
  function changeF(id, step = 1) {
    if (id == 'single')
      if (!(countS + step > max || countS + step < 0)) setCountS(countS + step);
      else return;
    else if (!(countD + step > max || countD + step < 0))
      setCountD(countD + step);
  }

  return (
    <>
      <div className="container">
        <table className="table-container">
          <thead style={{backgroundColor: '#D80032'}}>
            <td className="box-title">Ticket Type</td>
            <td className="box-title">Amount</td>
            <td className="box-title">Price</td>
            <td className="box-title" style={{width: '300px'}}>
              Total Price
            </td>
          </thead>
          <tbody style={{backgroundColor: '#EB8596'}}>
            <tr>
              <td className="box-title1">
                Adult <br />
                (single seat)
              </td>
              <td>
                <div className="counter-container">
                  <IconButton
                    aria-label="add"
                    className="icon-container"
                    onClick={() => changeF('single', -1)}>
                    <RemoveIcon
                      style={{
                        width: '50px',
                        height: '50px',
                        color: 'black',
                      }}></RemoveIcon>
                  </IconButton>
                  <TextField
                    id="single"
                    tagName="single"
                    variant="outlined"
                    type="text"
                    onChange={e => {
                      const temp = parseInt(
                        e.target.value.replace(/[^0-9]/g, ''),
                      ); //Remove all alphabet character and parse Int
                      if (!isNaN(temp)) changeF('single', temp - countS);
                      else changeF('single', -countS);
                    }}
                    className="input-container"
                    value={countS}></TextField>
                  <IconButton
                    aria-label="add"
                    className="icon-container"
                    onClick={() => changeF('single', 1)}>
                    <AddIcon
                      style={{
                        width: '50px',
                        height: '50px',
                        color: 'black',
                      }}></AddIcon>
                  </IconButton>
                </div>
              </td>
              <td className="box-title">{maxS.toLocaleString('en-US')} VND</td>
              <td className="box-title">
                {(maxS * countS).toLocaleString('en-US')} VND
              </td>
            </tr>
            <tr>
              <td className="box-title1">
                Adult <br />
                (double seats)
              </td>
              <td>
                <div className="counter-container">
                  <IconButton
                    aria-label="add"
                    className="icon-container"
                    onClick={() => changeF('double', -1)}>
                    <RemoveIcon
                      style={{
                        width: '50px',
                        height: '50px',
                        color: 'black',
                      }}></RemoveIcon>
                  </IconButton>
                  <TextField
                    id="double"
                    tagName="double"
                    variant="outlined"
                    onChange={e => {
                      const temp = parseInt(
                        e.target.value.replace(/[^0-9]/g, ''),
                      ); //Remove all alphabet character and parse Int
                      if (!isNaN(temp)) changeF('double', temp - countD);
                      else changeF('double', -countD);
                    }}
                    className="input-container"
                    value={countD}></TextField>
                  <IconButton
                    aria-label="add"
                    className="icon-container"
                    onClick={() => changeF('double', 1)}>
                    <AddIcon
                      style={{
                        width: '50px',
                        height: '50px',
                        color: 'black',
                      }}></AddIcon>
                  </IconButton>
                </div>
              </td>
              <td className="box-title">{maxD.toLocaleString('en-US')} VND</td>
              <td className="box-title">
                {(maxD * countD).toLocaleString('en-US')} VND
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="total-container">
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default DetailSelect;
