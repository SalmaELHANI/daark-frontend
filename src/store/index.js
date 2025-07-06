import { configureStore } from '@reduxjs/toolkit';
import userReducer from './admin/userSlice';
import annonceReducer from './annonce/annonceSlice';
import adminReducer from './admin/adminSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    annonce: annonceReducer,
    admin: adminReducer,
  },
});
export default store;


