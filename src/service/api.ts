import axios from "axios";
const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    "Authorization":
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNkNjM2ODZlLWRlNWItNGRmOC1hYTEwLWQzOTU4NGEwODYxMyIsImVtYWlsIjoiYWRtaW5AdG9waWNzLmNvbSIsImlhdCI6MTY5MzI2OTAyNSwiZXhwIjoxNjkzMzI5MDI1fQ.EpeSHg7QYtEmILOcNSyAPDB9S4QWuJq6diSjrPHOSQQ"
  }
});
export default api;