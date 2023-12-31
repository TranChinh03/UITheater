export const patchSpentFunction = async (amount) => {
    const axios = require('axios');
    let data = JSON.stringify({
      amount: amount,
    });
    const Token = localStorage.getItem('Token');
    let config = {
      method: 'patch',
      maxBodyLength: Infinity,
      url: 'https://uitlogachcu.onrender.com/me/spent',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Token,
      },
      data:data,
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
  