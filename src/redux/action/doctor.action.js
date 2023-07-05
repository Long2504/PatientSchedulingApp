import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiCallerPrivate } from "../../services/ApiCaller";
import { handleErrors } from "../../utils/helper/common.helper";

export const getAllDoctor = createAsyncThunk('doctor/get-all-doctor', async () => {
  try {
    const { data } = await ApiCallerPrivate('admin/doctor/get-all-doctor', 'GET', null);
    return data;
  } catch (error) {
    return handleErrors(error);
  }
});

export const getAllDoctorBySpecialty = createAsyncThunk('doctor/get-doctors-by-specialty', async (body, { rejectWithValue }) => {
  try {
    const { data } = await ApiCallerPrivate('doctor/get-doctors-by-speciality', 'POST', body,);
    return data;
  } catch (error) {
    return rejectWithValue(handleErrors(error));
  }
});


export const getAllSpecialty = createAsyncThunk('doctor/get-all-specialty', async () => {
  try {
    const { data } = await ApiCallerPrivate('speciality/get-all', 'GET', null,);
    return data;
  } catch (error) {
    return handleErrors(error);
  }
});