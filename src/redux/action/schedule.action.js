
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiCallerPrivate } from "../../services/ApiCaller";



export const getScheduleBySpeciality = createAsyncThunk('schedule/get-schedule-speciality', async (body) => {
  try {
    const { data } = await ApiCallerPrivate('patient/get-schedule-speciality', 'POST', body);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const getScheduleByDoctor = createAsyncThunk('schedule/get-schedule-doctor', async (body) => {
  try {
    const { data } = await ApiCallerPrivate('patient/get-schedule-doctor', 'POST', body);
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const createAppointmentSchedule = createAsyncThunk('schedule/create-schedule', async (body) => {
  try {
    const { data } = await ApiCallerPrivate('patient/create-schedule', 'POST', body);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
);