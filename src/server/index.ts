import axios from 'axios';

const apiURL = 'https://api.covid19api.com/';
// const apiURL = 'http://localhost:8080/api/';

export const api = axios.create({
  baseURL: apiURL,
  headers: { 'Content-Type': 'application/json' },
});

export const getApiURL = () => apiURL;
export const getResponseData = (resp: any) => resp.data;

export const escalateError = (err: any) => {
  let errorFromResponse;
  try {
    errorFromResponse = err.response.data.error.toString();
  } catch (e) {
    errorFromResponse = undefined;
  }
  const newErr: any = new Error(
    errorFromResponse ||
      (err instanceof Error
        ? err.message || err.toString()
        : typeof err === 'string'
        ? err
        : err.toString() || 'Error Inesperado')
  );
  try {
    newErr.data = err.response.data;
  } catch (e) {}
  throw newErr;
};

export default api;
