import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL_USER } from "../utils/constant";
import toast from "react-hot-toast";

//Display Action
export const displayUser = createAsyncThunk(
  "user/displayUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL_USER}/profile`, {
        withCredentials: true,
      });
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

//Logout Action
export const userLogout = createAsyncThunk(
  "user/userLogout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL_USER}/logout`, {
        withCredentials: true,
      });
      toast.success(response.data.message);
      return null;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(displayUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(displayUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = [action.payload];
      })
      .addCase(displayUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userLogout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        state.loading = true;
        state.users = [];
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userDetail.reducer;
