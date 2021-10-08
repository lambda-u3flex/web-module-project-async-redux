import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get("https://api.coingecko.com/api/v3/exchange_rates")
    .then((res) => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data.rates });
    })
    .catch((err) => {
      dispatch({ type: FETCH_FAIL, payload: err });
    });
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (data) => {
  return { type: FETCH_SUCCESS, payload: data };
};

export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};
