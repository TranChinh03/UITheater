import axios from 'axios';

export const ChangePasswordFunction = async (email, password, newPassword) => {
  let data = JSON.stringify({
    email: email,
    password: password,
    newPassword: newPassword,
  });

  const Token = localStorage.getItem('Token');

  let config = {
    method: 'patch',
    maxBodyLength: Infinity,
    url: 'https://uitlogachcu.onrender.com/me/password',
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
