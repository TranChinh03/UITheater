import axios from 'axios';

export const getUserInfomationFunction = async index => {
  let data = JSON.stringify({
    index: index,
  });
  const Token = localStorage.getItem('Token');

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://uitlogachcu.onrender.com/me',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Token,
    },
    data: data,
  };

  const result = await axios
    .request(config)
    .then(response => {
      console.log('222', response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
  return result;
};
