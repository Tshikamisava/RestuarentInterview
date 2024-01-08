
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../Services/firebase';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_USER = 'REGISTER_USER';
export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const registerUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});

export const forgotPasswordRequest = () => ({
  type: FORGOT_PASSWORD_REQUEST,
});

export const forgotPasswordSuccess = () => ({
  type: FORGOT_PASSWORD_SUCCESS,
});

export const forgotPasswordFailure = (error) => ({
  type: FORGOT_PASSWORD_FAILURE,
  payload: error,
});

export const forgotPassword = (email) => {
  return async (dispatch) => {
    dispatch(forgotPasswordRequest());

    try {
      await sendPasswordResetEmail(auth, email);
      dispatch(forgotPasswordSuccess());
    } catch (error) {
      dispatch(forgotPasswordFailure(error));
    }
  };
};

export const logout = () => ({
  type: LOGOUT,
});