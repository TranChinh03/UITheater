//not use
import axios from 'axios';

export const deleteProcessFunction = async ticketId => {
  let data = JSON.stringify({
    ticketId: ticketId,
  });

  let config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: 'https://uitlogachcu.onrender.com/getSchedule',
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
