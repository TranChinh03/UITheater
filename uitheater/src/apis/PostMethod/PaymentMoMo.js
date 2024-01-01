export const postPaymentFunction = async (ticketArray) => {
  // mau
  // "json": [
  //   {
  //     "ticketId": 1234,
  //     "showtimeId": 456,
  //     "seatId": 789,
  //     "price": 75000
  //   },
  //   {
  //     "ticketId": 4567,
  //     "showtimeId": 789,
  //     "seatId": 101,
  //     "price": 75000
  //   }
  // ]
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
  };
  