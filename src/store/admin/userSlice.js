import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

export const loginUser = createAsyncThunk(
  '/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk('user/logout', async () => {
  return true;
});

export const requestResetPassword = createAsyncThunk(
  'user/requestResetPassword',
  async (email, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/reset-password/request`, { email });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Erreur serveur');
    }
  }
);

export const confirmResetPassword = createAsyncThunk(
  'user/confirmResetPassword',
  async ({ token, newPassword }, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/reset-password/confirm`, {
        token,
        newPassword,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Erreur serveur');
    }
  }
);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        username,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Erreur serveur');
    }
  }
);

export const confirmEmail = createAsyncThunk(
  'user/confirmEmail',
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/verify?token=${token}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Erreur lors de la confirmation');
    }
  }
);

export const getUserProfile = createAsyncThunk(
  'user/getProfile',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8080/api/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Erreur lors du chargement');
    }
  }
);

export const updatePhoneNumber = createAsyncThunk(
  'user/updatePhoneNumber',
  async (telephone, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        'http://localhost:8080/api/user/me/telephone',
        { telephone },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Erreur lors de la mise à jour du téléphone');
    }
  }
);

export const loginWithGoogle = createAsyncThunk(
  'user/loginWithGoogle',
  async ({ tokenId, type }, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/google', {
        token: tokenId,
        type
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Erreur Google');
    }
  }
);

const token = localStorage.getItem("token");

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    loading: false,
    error: null,
    isLoggedIn: !!token,
    successMessage: null,
    profile: null,
  },
  reducers: {
    resetUserState: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
      state.error = null;
      state.successMessage = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.isLoggedIn = true;
        if (action.payload.token) {
          localStorage.setItem('token', action.payload.token);
        }
        if (action.payload.role) {
          localStorage.setItem('role', action.payload.role);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.currentUser = null;
        state.isLoggedIn = false;
      })

      .addCase(requestResetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(requestResetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message || 'Email de vérification envoyé';
      })
      .addCase(requestResetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Erreur inconnue';
      })
      .addCase(confirmResetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(confirmResetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message || 'Mot de passe mis à jour avec succès';
      })
      .addCase(confirmResetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Erreur inconnue';
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message || 'Inscription réussie';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Erreur inconnue';
      })
      .addCase(confirmEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(confirmEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = 'Email vérifié avec succès !';
        state.error = null;
      })
      .addCase(confirmEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Erreur lors de la vérification';
        state.successMessage = null;
      })
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLoggedIn = false;
      })
      .addCase(updatePhoneNumber.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(updatePhoneNumber.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message || 'Téléphone mis à jour avec succès';
        if (state.profile) {
          state.profile.telephone = action.meta.arg;
        }
      })
      .addCase(updatePhoneNumber.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Erreur inconnue';
      })
      .addCase(loginWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.isLoggedIn = true;
        if (action.payload.token) {
          localStorage.setItem("token", action.payload.token);
        }
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

  },
});

export const { resetUserState } = userSlice.actions;
export default userSlice.reducer;
