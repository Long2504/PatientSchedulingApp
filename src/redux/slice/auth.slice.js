import { createSlice } from "@reduxjs/toolkit";
import { Register, Login, checkLogged, Logout, getInfor, changePassword, Verify } from "../action/auth.action";

const initialState = {
  inforUser: {},
  isLogged: false,
  isLoading: false,
  patient: null,
  error: {},
  statusUpdatePassword: false,
  username: null,

};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(Register.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(Register.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.username = payload;
      state.error = {};
    });
    builder.addCase(Register.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      console.log(payload, "payload in auth.slice.js Register.rejected");
    });
    builder.addCase(Verify.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(Verify.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = {};
    });
    builder.addCase(Verify.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      console.log(payload, "payload in auth.slice.js Verify.rejected");
    });
    builder.addCase(Login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(Login.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isLogged = true;
      state.patient = payload.patient;
      state.error = {};
    });
    builder.addCase(Login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(checkLogged.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(checkLogged.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLogged = action.payload;
    }
    );
    builder.addCase(checkLogged.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action.payload, "action.payload in auth.slice.js checkLogged.rejected");
    });
    builder.addCase(Logout.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(Logout.fulfilled, (state) => {
      state.isLoading = false;
      state.isLogged = false;
      state.error = {};
    });
    builder.addCase(Logout.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getInfor.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getInfor.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.inforUser = payload;
      state.error = {};
    }
    );
    builder.addCase(getInfor.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
    );
    builder.addCase(changePassword.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(changePassword.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.statusUpdatePassword = true;
      state.error = {};
    }
    );
    builder.addCase(changePassword.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    }
    );
  },
});

export default authSlice.reducer;