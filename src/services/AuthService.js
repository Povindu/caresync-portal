import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api',
});



// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    console.log("Intercepted");
    console.log(token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api