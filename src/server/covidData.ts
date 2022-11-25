import { api, escalateError, getResponseData } from './index';

export const getDataSummary = async () => {
  try {
    const resp = await api.get('/summary');
    return getResponseData(resp);
  } catch (err) {
    return escalateError(err);
  }
};

export const getDataSummarycountries = async () => {
  try {
    const resp = await api.get('/countries');
    return getResponseData(resp);
  } catch (err) {
    return escalateError(err);
  }
};

export const getDataWordTotal = async () => {
  try {
    const resp = await api.get('/world/total');
    return getResponseData(resp);
  } catch (err) {
    return escalateError(err);
  }
};
export const getDataForCountrie = async (country: string) => {
  try {
    const resp = await api.get(`/dayone/country/${country}`);
    return getResponseData(resp);
  } catch (err) {
    return escalateError(err);
  }
};
