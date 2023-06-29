import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authSlice from './slice/auth.slice';
import doctorSlice from './slice/doctor.slice';
import medicalRecordSlice from './slice/medicalRecord.slice';
import scheduleSlice from './slice/schedule.slice';
import patientSlice from './slice/patient.slice';

const reducers = {
  authSlice: authSlice,
  doctorSlice: doctorSlice,
  scheduleSlice: scheduleSlice,
  medicalRecordSlice: medicalRecordSlice,
  patientSlice: patientSlice,
};

const rootReducer = combineReducers(reducers);

const resettableRootReducer = (state, action) => {
  if (action.type === 'store/reset') {
    return rootReducer(undefined, action);
  }

  return rootReducer(state, action);
};
export const store = configureStore({
  reducer: resettableRootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
