import axios from 'axios';

export const patchAvatarFunction = async avtId => {
  let data = JSON.stringify({
    avtId: avtId,
  });

  const Token = localStorage.getItem('Token');

    let config = {
      method: 'patch',
      maxBodyLength: Infinity,
      url: 'https://uitlogachcu.onrender.com/me/avatar',
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

