import { getScheduleBySpeciality } from "../action/schedule.action";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  listSchedule: [],
  error: null,
  speciality: {
    specialityID: null,
    specialityName: null,
  },
  doctor: {
    doctorID: null,
    doctorName: null,
  },
  appointmentDate: null,
};


export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setSpeciality: (state, { payload }) => {
      state.speciality = payload;
    },
    setDoctor: (state, { payload }) => {
      state.doctor = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getScheduleBySpeciality.pending, (state) => {
      state.loading = true;
      state.listSchedule = [];
    });
    builder.addCase(getScheduleBySpeciality.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.listSchedule = payload;
    });
    builder.addCase(getScheduleBySpeciality.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      state.listSchedule = [];
    });
  }
}
);


export const { setSpeciality, setDoctor } = scheduleSlice.actions;
export default scheduleSlice.reducer;