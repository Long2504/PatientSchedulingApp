
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiCallerPublic, ApiCallerPrivate } from "../../services/ApiCaller";
import Auth from "../../utils/helper/auth.helper";
import { handleErrors } from "../../utils/helper/common.helper";
import { Alert } from "react-native";


export const Register = createAsyncThunk('auth/signup', async (body, { rejectWithValue }) => {
  try {
    await ApiCallerPublic('auth/signup', 'POST', body);
    return body.username;
  } catch (error) {
    return rejectWithValue(handleErrors(error));
  }
});

export const Verify = createAsyncThunk('auth/verify', async (body, { rejectWithValue }) => {
  try {
    const { data } = await ApiCallerPublic('auth/confirm', 'POST', body);
    return data;
  } catch (error) {
    return rejectWithValue(handleErrors(error));
  }
});

export const ForgotPassword = createAsyncThunk('auth/forgotpassword', async (body, { rejectWithValue }) => {
  try {
    const { data } = await ApiCallerPublic('auth/forgotpassword', 'POST', body);
    return data;
  } catch (error) {
    return rejectWithValue(handleErrors(error));
  }
});

export const VerifyForgotPassword = createAsyncThunk('auth/verifyforgotpassword', async (body, { rejectWithValue }) => {
  try {
    const { data } = await ApiCallerPublic('auth/verify-forget-password', 'POST', body);
    return data;
  } catch (error) {
    return rejectWithValue(handleErrors(error));
  }
});

export const ResetPassword = createAsyncThunk('auth/resetpassword', async (body, { rejectWithValue }) => {
  try {
    const { data } = await ApiCallerPublic('auth/password-reset', 'POST', body);
    return data;
  } catch (error) {
    return rejectWithValue(handleErrors(error));
  }
});

export const Login = createAsyncThunk('auth/signin', async (body, { rejectWithValue }) => {
  try {
    const { data } = await ApiCallerPublic('auth/signin', 'POST', body);
    await Auth.setInfo(data);
    return data;
  } catch (error) {
    return rejectWithValue(handleErrors(error));
  }
});

export const checkLogged = createAsyncThunk('auth/checkLogged', async () => {
  try {
    const check = await Auth.checkLogged();
    return check;
  } catch (error) {
    throw new Error(error);
  }
});

export const getInfor = createAsyncThunk('auth/getInfor', async () => {
  try {
    const data = await Auth.getUserInfo();
    return data;
  } catch (error) {
    throw new Error(error);
  }
});


export const changePassword = createAsyncThunk('auth/changePassword', async (body, { rejectWithValue }) => {
  try {
    const { data } = await ApiCallerPrivate('auth/change-password', 'POST', body);
    Alert.alert('Thông báo', 'Đổi mật khẩu thành công');
    return data;
  } catch (error) {
    return rejectWithValue(handleErrors(error));
  }
});


export const Logout = createAsyncThunk('auth/logout', async () => {
  try {
    await Auth.clearInfo();
    return true;
  } catch (error) {
    throw new Error(error);
  }
});
