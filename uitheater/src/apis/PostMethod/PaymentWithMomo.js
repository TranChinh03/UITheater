<<<<<<< HEAD:uitheater/src/apis/PostMethod/PaymentWithMomo.js
export const postPaymentFunction = async (ticketArray) => {
    const axios = require('axios');
    let data = JSON.stringify({
      "json": ticketArray,
    });
    const Token = localStorage.getItem('Token');
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://uitlogachcu.onrender.com/payment',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Token,
      },
      data: data,
    };
  
    const result = await axios
      .request(config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
    return result;
=======
import axios from 'axios';
export const postPaymentFunction = async (ticketArray) => {
  let data = JSON.stringify({
    "json": ticketArray,
  });
  const Token = localStorage.getItem('Token');
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://uitlogachcu.onrender.com/payment',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Token,
    },
    data: data,
>>>>>>> 70ad74b1fd92f647be64c9d9784cae50b4594685:uitheater/src/apis/PostMethod/postTicket.js
  };

  const result = await axios
    .request(config)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
  return result;
};