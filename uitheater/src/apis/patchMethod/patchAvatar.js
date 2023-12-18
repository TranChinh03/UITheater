export const patchAvatarFunction = async (UserId, avtId) => {
    const axios = require('axios');
    let data = JSON.stringify({
      _id: UserId,
      avtId: avtId,

    });
  
    let config = {
      method: 'patch',
      maxBodyLength: Infinity,
      url: 'https://uitlogachcu.onrender.com/me/avatar',
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
  