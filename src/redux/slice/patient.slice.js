import { createSlice } from "@reduxjs/toolkit";
import { getPatientInLocal, updatePatient } from "../action/patient.action";

const initialState = {
  patient: {},
  isLoading: false,
  error: {},
};

export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPatientInLocal.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getPatientInLocal.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.patient = payload;
      state.error = {};
    }
    );
    builder.addCase(getPatientInLocal.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
    );
    builder.addCase(updatePatient.pending, state => {
      state.isLoading = true;
    }
    );
    builder.addCase(updatePatient.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.patient = payload;
      state.error = {};
    }
    );
    builder.addCase(updatePatient.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
    );

  },
});

export default patientSlice.reducer;