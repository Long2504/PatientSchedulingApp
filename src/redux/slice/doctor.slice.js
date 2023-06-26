import { createSlice } from '@reduxjs/toolkit';
import { getAllDoctor, getAllDoctorBySpecialty, getAllSpecialty } from '../action/doctor.action';

const initialState = {
  loading: false,
  listDoctor: [],
  listSpecialty: [],
  error: null,
};

export const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllDoctor.pending, (state) => {
      state.loading = true;
      state.listDoctor = [];
    });
    builder.addCase(getAllDoctor.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.listDoctor = payload;
    });
    builder.addCase(getAllDoctor.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      state.listDoctor = [];
    });
    builder.addCase(getAllDoctorBySpecialty.pending, (state) => {
      state.loading = true;
      state.listDoctor = [];
    });
    builder.addCase(getAllDoctorBySpecialty.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.listDoctor = payload;
    }
    );
    builder.addCase(getAllDoctorBySpecialty.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      state.listDoctor = [];
    }
    );
    builder.addCase(getAllSpecialty.pending, (state) => {
      state.loading = true;
      state.listSpecialty = [];
    });
    builder.addCase(getAllSpecialty.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.listSpecialty = payload;
    }
    );
    builder.addCase(getAllSpecialty.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      state.listSpecialty = [];
    }
    );
  }
}
);

export default doctorSlice.reducer;
