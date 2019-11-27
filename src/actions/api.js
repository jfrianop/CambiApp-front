import axios from 'axios';

export default startApi = (userToken = "") => {
  return axios.create({
    baseURL: 'http://192.168.0.3:3001',
    timeout: 1000,
    headers: { 'Authorization': userToken },
  })
}