export const postPaymentFunction = async (ticketId,showtimeId,seatId,price) => {
    const axios = require('axios');
    let data = JSON.stringify({
      "ticketId": ticketId,
      "showtimeId": showtimeId,
      "seatId":seatId,
      "price": price
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
  