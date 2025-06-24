import { configureStore } from '@reduxjs/toolkit';
import userReducer from './admin/userSlice';
import annonceReducer from './annonce/annonceSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    annonce: annonceReducer,
  },
});
export default store;


