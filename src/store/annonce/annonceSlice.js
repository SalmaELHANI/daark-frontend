import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk pour créer une annonce
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
            return response.data; // liste des annonces
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

// Supprimer une annonce
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

// Supprimer toutes les annonces
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

// Thunk pour récupérer une annonce par ID
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
// Récupérer toutes les annonces avec statut ACCEPTEE
export const fetchAcceptedAnnonces = createAsyncThunk(
    "annonce/fetchAcceptedAnnonces",
    async (params = {}, { rejectWithValue }) => {
        try {
            const query = new URLSearchParams(params).toString(); // convertir les paramètres
            const res = await axios.get(`http://localhost:8080/api/annonces/public?${query}`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Erreur de chargement");
        }
    }
);

const annonceSlice = createSlice({
    name: "annonce",
    initialState: {
        annonces: [],
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

    },
});

export const { resetAnnonceState } = annonceSlice.actions;

export default annonceSlice.reducer;
