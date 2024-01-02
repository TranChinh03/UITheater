export const postTicketFunction = async (ticketArray) => {
    const axios = require('axios');
  // mau
  // "ticketArray": [
  //   {
  //     "ticketId": 1234,
  //     "showtimeId": 456,
  //     "seatId": 789,
  //   },
  //   {
  //     "ticketId": 4567,
  //     "showtimeId": 789,
  //     "seatId": 101,
  //   }
  // ]
  let data = JSON.stringify({
    "ticketArray": ticketArray,
  });
    const Token = localStorage.getItem('Token');
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://uitlogachcu.onrender.com/postTickets',
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
  