export const postHistoryFunction = async (UserId, ticketId) => {
    const axios = require('axios');
    let data = JSON.stringify({
      id: UserId,
      ticketId: ticketId,

    });
  
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://uitlogachcu.onrender.com/history',
      headers: {
        'Content-Type': 'application/json',
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
  