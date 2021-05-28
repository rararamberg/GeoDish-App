import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://geodish-app.herokuapp.com/api",
  development: "http://localhost:3000/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

// const getToken = () => {
//   return new Promise(resolve => {
//       resolve(`Bearer ${localStorage.getItem('token') || null}`)
//   })
// }

// const api = axios.create({
//   baseURL: process.env.NODE_ENV === 'production'
//       ? 'https://sei-products-api.herokuapp.com/api'
//       : 'http://localhost:3000/api'
// })

// api.interceptors.request.use(async function (config) {
//   config.headers['Authorization'] = await getToken()
//   return config
// }, function (error) {
//   console.log('Request error: ', error)
//   return Promise.reject(error)
// });

export default api;
