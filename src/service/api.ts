import axios from "axios";
const api = axios.create({
  baseURL: 'http://localhost:3002',
  headers: {
    'Content-Type': 'application/json',
    "Authorization":
      "Bearer eyJhbGciOiJIUzI1NiJ9.e30.enz7JPg6fxaj8jsPKagavzuGeE7d17F_73mLPG7YgN8"
  }
});
export default api;