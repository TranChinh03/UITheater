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

  const singleID = document.getElementById('single');
  function increaseF() {
    if (singleID) setCountS(countS + 1);
    setCountD(countD + 1);
  }
  function decreaseF() {
    if (singleID) setCountS(countS - 1);
    setCountD(countD - 1);
  }

  return (
    <>
      <div className="container">
        <table className="table-container">
          <thead style={{backgroundColor: '#D80032'}}>
            <td className="box-title">Ticket Type</td>
            <td className="box-title">Amount</td>
            <td className="box-title">Price</td>
            <td className="box-title">Total Price</td>
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
                    onClick={() => decreaseF()}>
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
                    className="input-container"
                    value={countS}></TextField>
                  <IconButton
                    aria-label="add"
                    className="icon-container"
                    onClick={() => increaseF()}>
                    <AddIcon
                      style={{
                        width: '50px',
                        height: '50px',
                        color: 'black',
                      }}></AddIcon>
                  </IconButton>
                </div>
              </td>
              <td className="box-title">200.000 VND</td>
              <td>3</td>
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
                    onClick={() => decreaseF()}>
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
                    className="input-container"
                    value={countD}></TextField>
                  <IconButton
                    aria-label="add"
                    className="icon-container"
                    onClick={() => increaseF()}>
                    <AddIcon
                      style={{
                        width: '50px',
                        height: '50px',
                        color: 'black',
                      }}></AddIcon>
                  </IconButton>
                </div>
              </td>
              <td className="box-title">200.000 VND</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="total-container"></div>
    </>
  );
}

export default DetailSelect;
