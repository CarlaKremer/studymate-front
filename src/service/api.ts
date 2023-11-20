import axios from "axios";
const token = typeof window !== 'undefined' ? localStorage.getItem('access_token')?.replaceAll('"', "") : null
const api = axios.create({
  baseURL: 'http://localhost:3090',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + token
  }
});
export default api;