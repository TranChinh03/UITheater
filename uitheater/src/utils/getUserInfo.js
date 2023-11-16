import { UserState } from "../Types/user.type";
import axios from "axios";
const getUserInfo = async()=> {
    const Token = localStorage.getItem('Token');
    const user = new UserState();
    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://uitlogachcu.onrender.com/me',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Token,
    },
  };
    await axios
      .request(config)
      .then(response => {
        console.log(response.data);
        setResponse(response.data.name);
      })
      .catch(error => {
        console.log(error);
      });
  return {
    name: 'John Doe',
    age: 30,
  };
}

export default getUserInfo;