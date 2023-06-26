import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiCallerPrivate } from "../../services/ApiCaller";

export const getAllDoctor = createAsyncThunk('doctor/get-all-doctor', async () => {
  try {
    const { data } = await ApiCallerPrivate('admin/doctor/get-all-doctor', 'GET', null,);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllDoctorBySpecialty = createAsyncThunk('doctor/get-doctors-by-specialty', async (body) => {
  try {
    const { data } = await ApiCallerPrivate('doctor/get-doctors-by-speciality', 'POST', body,);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});


export const getAllSpecialty = createAsyncThunk('doctor/get-all-specialty', async () => {
  try {
    const { data } = await ApiCallerPrivate('speciality/get-all', 'GET', null,);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});