export const patchAvatarFunction = async (UserId) => {
    const axios = require('axios');
    let data = JSON.stringify({
      _id: UserId,
    });
  
    let config = {
      method: 'patch',
      maxBodyLength: Infinity,
      url: 'https://uitlogachcu.onrender.com/me/spent',
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
  