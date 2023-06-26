import { getScheduleBySpeciality, getScheduleByDoctor, createAppointmentSchedule } from "../action/schedule.action";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  listSchedule: [],
  error: null,
  speciality: {},
  doctor: {},
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
    builder.addCase(getScheduleByDoctor.pending, (state) => {
      state.loading = true;
      state.listSchedule = [];
    });
    builder.addCase(getScheduleByDoctor.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.listSchedule = payload;
    }
    );
    builder.addCase(getScheduleByDoctor.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      state.listSchedule = [];
    }
    );
    builder.addCase(createAppointmentSchedule.pending, (state) => {
      state.loading = true;
    }
    );
    builder.addCase(createAppointmentSchedule.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.appointmentDate = payload;
    }
    );
    builder.addCase(createAppointmentSchedule.rejected, (state, { payload }) => {
      state.error = payload.error;
      state.loading = false;
      state.appointmentDate = null;
    }
    );
  }
}
);


export const { setSpeciality, setDoctor } = scheduleSlice.actions;
export default scheduleSlice.reducer;