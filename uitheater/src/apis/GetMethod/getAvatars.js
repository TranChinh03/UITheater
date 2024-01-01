import axios from 'axios';

export const getAvatarsFunction = async index => {
  let data = JSON.stringify({
    index: index,
  });

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://uitlogachcu.onrender.com/avatars',
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
