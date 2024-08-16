import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL_CLIENT } from "../utils/constant";

// Create Action
export const createClient = createAsyncThunk(
  "client/createClient",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL_CLIENT}/post`, data, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      toast.success(response.data.message);
      return response.data.client;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Display Action
export const displayClient = createAsyncThunk(
  "client/displayClient",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL_CLIENT}/get`, {
        withCredentials: true,
      });
      return response.data.client;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

//Update Action
export const updateClient = createAsyncThunk(
  "client/updateClient",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${BASE_URL_CLIENT}/update/${data._id}`,
        data,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message);
      return response.data.client;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

//Delete Action
export const deleteClient = createAsyncThunk(
  "client/deleteClient",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${BASE_URL_CLIENT}/delete/${id}`,
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      return id;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const clientDetail = createSlice({
  name: "clientDetail",
  initialState: {
    clients: [],
    loading: false,
    error: null,
    searchName: "",
  },
  reducers: {
    searchClient: (state, action) => {
      state.searchName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createClient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createClient.fulfilled, (state, action) => {
        state.loading = false;
        state.clients.push(action.payload);
      })
      .addCase(createClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(displayClient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(displayClient.fulfilled, (state, action) => {
        state.loading = false;
        state.clients = action.payload;
      })
      .addCase(displayClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateClient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateClient.fulfilled, (state, action) => {
        state.loading = false;
        state.clients = state.clients.map((client) =>
          client._id === action.payload._id ? action.payload : client
        );
        
      })
      .addCase(updateClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteClient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteClient.fulfilled, (state, action) => {
        state.loading = false;
        const deletedId = action.meta.arg;
        state.clients = state.clients.filter(
          (client) => client._id !== deletedId
        );
      })
      .addCase(deleteClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default clientDetail.reducer;
export const { searchClient } = clientDetail.actions;
