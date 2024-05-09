import { url, axios } from "./config";

const basePath = `${url}`;

export function register(user) {
  return axios.post(`${basePath}/register`, user);
}

export function login(credentials) {
  return axios.post(`${basePath}/login`, credentials);
}
