import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiCallerPrivate } from "../../services/ApiCaller";
import { handleErrors } from "../../utils/helper/common.helper";

export const getAllMedicalRecord = createAsyncThunk('medical-record/get', async (body, { rejectWithValue }) => {
  try {
    const { data } = await ApiCallerPrivate('medical-record/get-by-id-patient', 'POST', body);
    return data;
  } catch (error) {
    return rejectWithValue(handleErrors(error));
  }
});

