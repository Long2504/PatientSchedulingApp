import { createAsyncThunk } from "@reduxjs/toolkit";
import Auth from "../../utils/helper/auth.helper";
import { ApiCallerPrivate } from "../../services/ApiCaller";
import { handleErrors } from "../../utils/helper/common.helper";

export const getPatientInLocal = createAsyncThunk('patient/get', async () => {
  try {
    const patient = await Auth.getUserInfo();
    return patient;
  }
  catch (err) {
    throw new Error(err);
  }
});

export const updatePatient = createAsyncThunk('patient/update', async (body, { rejectWithValue }) => {
  try {
    const { data } = await ApiCallerPrivate('patient/update-patient', 'POST', body);
    await Auth.setPatientInfo(data);
    return data;
  } catch (error) {
    return rejectWithValue(handleErrors(error));
  }
}
);