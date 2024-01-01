import React, {useEffect, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TextField from '@mui/material/TextField';
import styles from './detailselect.module.scss';

function DetailSelect(props) {
  const [countS, setCountS] = useState(0);
  const [countD, setCountD] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const max = 10;
  const maxS = 75000;
  const maxD = 120000;
  function changeF(id, step = 1) {
    if (id == 'single')
      if (!(countS + step > max || countS + step < 0)) setCountS(countS + step);
      else return;
    else if (!(countD + step > max || countD + step < 0))
      setCountD(countD + step);
  }
  useEffect(() => {
    setTotalAmount(countS + countD);
    setTotalPrice(countS * 75000 + countD * 120000);
  }, [countS, countD]);
  return (
    <>
      <div style={{backgroundColor: '#231B5B'}}>
        <div className={styles.container}>
          <table className={styles.tableContainer}>
            <thead style={{backgroundColor: '#D80032'}}>
              <td className={styles.boxTitle}>Ticket Type</td>
              <td className={styles.boxTitle}>Amount</td>
              <td className={styles.boxTitle}>Price</td>
              <td className={styles.boxTitle} style={{width: '300px'}}>
                Total Price
              </td>
            </thead>
            <tbody style={{backgroundColor: '#EB8596'}}>
              <tr>
                <td className={styles.boxTitle1}>
                  Adult <br />
                  (single seat)
                </td>
                <td>
                  <div className={styles.counterContainer}>
                    <IconButton
                      aria-label="add"
                      className={styles.iconContainer}
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
                      className={styles.inputContainer}
                      value={countS}></TextField>
                    <IconButton
                      aria-label="add"
                      className={styles.iconContainer}
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
                <td className={styles.boxTitle}>
                  {maxS.toLocaleString('en-US')} VND
                </td>
                <td className={styles.boxTitle}>
                  {(maxS * countS).toLocaleString('en-US')} VND
                </td>
              </tr>
              <tr>
                <td className={styles.boxTitle1}>
                  Adult <br />
                  (double seats)
                </td>
                <td>
                  <div className={styles.counterContainer}>
                    <IconButton
                      aria-label="add"
                      className={styles.iconContainer}
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
                      className={styles.inputContainer}
                      value={countD}></TextField>
                    <IconButton
                      aria-label="add"
                      className={styles.iconContainer}
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
                <td className={styles.boxTitle}>
                  {maxD.toLocaleString('en-US')} VND
                </td>
                <td className={styles.boxTitle}>
                  {(maxD * countD).toLocaleString('en-US')} VND
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.totalContainer}>
          <div className={styles.total}>
            <div className={styles.totalTitle}>Total ticket:</div>
            <div className={styles.totalC}>{totalAmount}</div>
            <div className={styles.totalC}>tickets</div>
          </div>
          <div className={styles.total}>
            <div className={styles.totalTitle}>Total price:</div>
            <div className={styles.totalC}>{totalPrice}</div>
            <div className={styles.totalC}>VND</div>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.btnReturn} onClick={() => {}}>
            Back
          </button>
          <button
            className={styles.btnNext}
            onClick={() => {
              console.log(props.onChange);
              props.onChange(countS, countD, totalPrice);
            }}>
            Pick seats
          </button>
        </div>
      </div>
    </>
  );
}

export default DetailSelect;
