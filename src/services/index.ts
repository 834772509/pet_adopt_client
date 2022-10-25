import request from "./request";

export default new request({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000,
});
