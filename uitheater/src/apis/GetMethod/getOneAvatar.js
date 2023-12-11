export const getOneAvatarFunction = (index) => {
    const axios = require('axios');
    let data = JSON.stringify({
      "index": index
    });
    
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://uitlogachcu.onrender.com/one_avatar',
      headers: { 
        'Content-Type': 'application/json', 
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    };
    