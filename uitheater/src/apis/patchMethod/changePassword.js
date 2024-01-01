export const ChangePasswordFunction = async (email,password,newPassword) => {
    const axios = require('axios');
    let data = JSON.stringify({
        email: email,
        password: password,
        newPassword: newPassword,
    });
  

    let config = {
      method: 'patch',
      maxBodyLength: Infinity,
      url: 'https://uitlogachcu.onrender.com/me/password',
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
  