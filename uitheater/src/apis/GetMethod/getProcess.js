import axios from 'axios';

export const getProcess = async() => {

  const Token = localStorage.getItem('Token');

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://uitlogachcu.onrender.com/getProcess',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Token,
    },
  };

  const result = await axios
    .request(config)
    .then(response => {
      console.log('2', response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
  return result;
};
