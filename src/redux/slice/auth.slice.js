import { createSlice } from "@reduxjs/toolkit";
import { Register, Login, checkLogged, Logout, getInfor, changePassword, Verify, ForgotPassword, VerifyForgotPassword } from "../action/auth.action";

const initialState = {
  inforUser: {},
  isLogged: false,
  isLoading: false,
  patient: null,
  error: {},
  statusUpdatePassword: false,
  username: null,
  email: null,
  _id: null,
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
    });
    builder.addCase(ForgotPassword.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(ForgotPassword.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.username = payload.username;
      state.email = payload.email;
      state.error = {};
    });
    builder.addCase(ForgotPassword.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(VerifyForgotPassword.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(VerifyForgotPassword.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state._id = payload.id;
      state.error = {};
    });
    builder.addCase(VerifyForgotPassword.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
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
    builder.addCase(Login.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(checkLogged.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(checkLogged.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isLogged = payload;
    }
    );
    builder.addCase(checkLogged.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
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