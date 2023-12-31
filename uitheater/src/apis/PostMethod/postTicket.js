export const postTicketFunction = async (UserId, ticketId) => {
    const axios = require('axios');
    let data = JSON.stringify({
      ticketId: ticketId,
    });
    const Token = localStorage.getItem('Token');
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://uitlogachcu.onrender.com/postTicket',
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
  