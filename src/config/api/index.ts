import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    // TODO: add config. eg:
    // "x-token": process.env.NEXT_PUBLIC_TOKEN,
  },
});

// TODO: add middleware. eg:
// api.interceptors.request.use(refreshTokenHandler, onError);

export default api;
