
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiCallerPrivate } from "../../services/ApiCaller";
import { handleErrors } from "../../utils/helper/common.helper";



export const getScheduleBySpeciality = createAsyncThunk('schedule/get-schedule-speciality', async (body, { rejectWithValue }) => {
  try {
    const { data } = await ApiCallerPrivate('patient/get-schedule-speciality', 'POST', body);
    return data;
  } catch (error) {
    return rejectWithValue(handleErrors(error));
  }
});

export const getScheduleByDoctor = createAsyncThunk('schedule/get-schedule-doctor', async (body, { rejectWithValue }) => {
  try {
    console.log(body, "body");
    const { data } = await ApiCallerPrivate('patient/get-schedule-doctor', 'POST', body);
    return data;
  } catch (error) {
    return rejectWithValue(handleErrors(error));
  }
});

export const createAppointmentSchedule = createAsyncThunk('schedule/create-schedule', async (body, { rejectWithValue }) => {
  try {
    const { data } = await ApiCallerPrivate('patient/create-schedule', 'POST', body);
    return data;
  } catch (error) {
    return rejectWithValue(handleErrors(error));
  }
}
);