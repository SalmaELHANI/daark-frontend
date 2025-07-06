import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/user';

export const fetchAllUsers = createAsyncThunk(
  'admin/fetchAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${API_URL}/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Erreur lors de la récupération des utilisateurs');
    }
  }
);

export const deleteUserById = createAsyncThunk(
  'admin/deleteUserById',
  async (userId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${API_URL}/admin/delete-user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return userId;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Erreur lors de la suppression');
    }
  }
);


const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    users: [],
    loading: false,
    error: null,
    successMessage: null,
  },
  reducers: {
    clearAdminMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteUserById.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
        state.successMessage = 'Utilisateur supprimé avec succès';
      })
      .addCase(deleteUserById.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clearAdminMessages } = adminSlice.actions;
export default adminSlice.reducer;
