import { getAllMedicalRecord } from '../action/medicalRecord.action';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  listMedicalRecord: [],
  error: null,
};


export const medicalRecordSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(getAllMedicalRecord.pending, (state) => {
      state.loading = true;
      state.listMedicalRecord = [];
    });
    builder.addCase(getAllMedicalRecord.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.listMedicalRecord = payload;
    });
    builder.addCase(getAllMedicalRecord.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      state.listMedicalRecord = [];
    });
  }
}
);
export default medicalRecordSlice.reducer;