import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createAnnonce = createAsyncThunk(
    "annonce/createAnnonce",
    async (formData, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.post(
                "http://localhost:8080/api/annonces/create",
                formData, // ⬅️ utiliser directement FormData reçu
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        // NE PAS mettre "Content-Type", axios le gère tout seul
                    },
                }
            );
            return response.data;
        } catch (error) {
            const message =
                error.response?.data?.message ||
                error.response?.data?.error ||
                error.message ||
                "Erreur inconnue";
            console.error("Erreur lors de la création de l'annonce:", message);
            return rejectWithValue(message);
        }
    }
);

export const fetchUserAnnonces = createAsyncThunk(
    "annonce/fetchUserAnnonces",
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:8080/api/annonces", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data; 
        } catch (error) {
            const message =
                error.response?.data?.message ||
                error.response?.data?.error ||
                error.message ||
                "Erreur inconnue";
            return rejectWithValue(message);
        }
    }
);

export const deleteAnnonce = createAsyncThunk(
    "annonce/deleteAnnonce",
    async (id, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`http://localhost:8080/api/annonces/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return id;
        } catch (error) {
            const message =
                error.response?.data?.message ||
                error.response?.data?.error ||
                error.message ||
                "Erreur suppression annonce";
            return rejectWithValue(message);
        }
    }
);

export const deleteAllUserAnnonces = createAsyncThunk(
    "annonce/deleteAllUserAnnonces",
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            await axios.delete(`http://localhost:8080/api/annonces/all`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return true;
        } catch (error) {
            const message =
                error.response?.data?.message ||
                error.response?.data?.error ||
                error.message ||
                "Erreur suppression toutes annonces";
            return rejectWithValue(message);
        }
    }
);

export const fetchAnnonceById = createAsyncThunk(
    "annonce/fetchAnnonceById",
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.get(`http://localhost:8080/api/annonces/${id}`);
            return res.data;
        } catch (error) {
            return rejectWithValue("Annonce non trouvée");
        }
    }
);

export const fetchAcceptedAnnonces = createAsyncThunk(
    "annonce/fetchAcceptedAnnonces",
    async (params = {}, { rejectWithValue }) => {
        try {
            const query = new URLSearchParams(params).toString();
            const res = await axios.get(`http://localhost:8080/api/annonces/public?${query}`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Erreur de chargement");
        }
    }
);

export const fetchAllAnnoncesAdmin = createAsyncThunk(
    'annonces/fetchAllAdmin',
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8080/api/annonces/all', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Erreur serveur');
        }
    }
);

export const updateAnnonceStatus = createAsyncThunk(
    "annonce/updateAnnonceStatus",
    async ({ id, statut }, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            await axios.put(
                `http://localhost:8080/api/annonces/statut/${id}`,
                { statut },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return { id, statut };
        } catch (error) {
            return rejectWithValue(error.response?.data || "Erreur changement de statut");
        }
    }
);

export const fetchPendingAnnonces = createAsyncThunk(
    "annonce/fetchPendingAnnonces",
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:8080/api/annonces/en-attente", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Erreur chargement annonces en attente");
        }
    }
);

export const fetchAnnoncesByUserId = createAsyncThunk(
    "annonce/fetchAnnoncesByUserId",
    async (userId, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get(`http://localhost:8080/api/annonces/user/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Erreur récupération annonces utilisateur");
        }
    }
);


const annonceSlice = createSlice({
    name: "annonce",
    initialState: {
        annonces: [],
        allAnnonces: [],
        annonceDetails: null,
        acceptedAnnonces: [],
        loading: false,
        success: false,
        error: null,
    },
    reducers: {
        resetAnnonceState: (state) => {
            state.loading = false;
            state.success = false;
            state.error = null;
            state.annonces = [];
            state.allAnnonces = [];
            state.annonceDetails = null;
            state.acceptedAnnonces = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createAnnonce.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(createAnnonce.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(createAnnonce.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload;
            })
            .addCase(fetchUserAnnonces.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserAnnonces.fulfilled, (state, action) => {
                state.loading = false;
                state.annonces = action.payload;
            })
            .addCase(fetchUserAnnonces.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteAnnonce.fulfilled, (state, action) => {
                state.annonces = state.annonces.filter((a) => a.id !== action.payload);
            })
            .addCase(deleteAllUserAnnonces.fulfilled, (state) => {
                state.annonces = [];
            })
            .addCase(fetchAnnonceById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAnnonceById.fulfilled, (state, action) => {
                state.loading = false;
                state.annonceDetails = action.payload;
            })
            .addCase(fetchAnnonceById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchAcceptedAnnonces.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAcceptedAnnonces.fulfilled, (state, action) => {
                state.loading = false;
                state.acceptedAnnonces = action.payload;
            })
            .addCase(fetchAcceptedAnnonces.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
           
            .addCase(fetchPendingAnnonces.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPendingAnnonces.fulfilled, (state, action) => {
                state.loading = false;
                state.annonces = action.payload;
            })
            .addCase(fetchPendingAnnonces.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

           
            .addCase(updateAnnonceStatus.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateAnnonceStatus.fulfilled, (state, action) => {
                state.loading = false;

                const index1 = state.annonces.findIndex((a) => a.id === action.payload.id);
                if (index1 !== -1) {
                    state.annonces[index1].statut = action.payload.statut;
                }

                const index2 = state.allAnnonces.findIndex((a) => a.id === action.payload.id);
                if (index2 !== -1) {
                    state.allAnnonces[index2].statut = action.payload.statut;
                }
            })
            .addCase(updateAnnonceStatus.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

        
        .addCase(fetchAnnoncesByUserId.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchAnnoncesByUserId.fulfilled, (state, action) => {
            state.loading = false;
            state.annonces = action.payload;
        })
        .addCase(fetchAnnoncesByUserId.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(fetchAllAnnoncesAdmin.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchAllAnnoncesAdmin.fulfilled, (state, action) => {
            state.loading = false;
            state.allAnnonces = action.payload;
        })
        .addCase(fetchAllAnnoncesAdmin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Erreur lors du chargement';
        });
},
});

export const { resetAnnonceState } = annonceSlice.actions;

export default annonceSlice.reducer;
