import { AUTH_LOGIN_TYPE, AUTH_LOGOUT_TYPE } from "../actions/auth.actions";

const initialState = {
  isAuth: false,
  token:null,
  host:null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_TYPE: {
      const {token, host} = action.payload;
      return { ...state, isAuth: true, token, host };
    }

    case AUTH_LOGOUT_TYPE: {
      return state;
    }

    default: {
      return state;
    }
  }
};

export const getAuthSelector = (state) => state.auth.isAuth;
export const getAuthToken = (state) => state.auth.token;
export const getAuthHostSelector = (state) => state.auth.host;

export default authReducer;