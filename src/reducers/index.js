import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions";

const initialState = {
  data: {
    btc: {
      name: "Bitcoin",
      unit: "BTC",
      value: 1.0,
      type: "crypto",
    },
    usd: {
      name: "US Dollar",
      type: "fiat",
      unit: "$",
      value: 54147.313,
    },
  },
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        data: {},
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        data: {},
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
