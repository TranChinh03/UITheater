import axios from 'axios';
export const getListMovieFunction = async userId => {
  let data = JSON.stringify({
    Uid: userId,
  });

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://uitlogachcu.onrender.com/getHistory',
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
