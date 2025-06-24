import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/auth/LoginForm';
import RegisterForm from './pages/auth/RegisterForm';
import UpdatePassword from './pages/auth/UpdatePassword';
import VerifyEmail from './pages/auth/VerifyEmail';
import PublishAnnonce from './pages/annonces/PublishAnnonce';
import VerifyCodePhone from './pages/auth/VerifyCodePhone';
import VerifyPhone from './pages/auth/VerifyPhone';
import Home from './pages/Home';
import AnnonceDetailsPage from './pages/annonces/AnnonceDetails';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Profil from './pages/auth/Profil';
import MyAnnonces from './pages/annonces/MyAnnonces';
import { Providers } from './store/Provider';
import store from "./store/index"
import ConfirmEmail from './pages/auth/ConfirmEmail';


function App() {
  return (
    <Providers store={store}>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/reset-password" element={<UpdatePassword />} />
        <Route path="/publier-annonce" element={<PublishAnnonce />} />        
        <Route path="/verifyphone" element={<VerifyPhone />} />
        <Route path="/detail-annonce" element={<AnnonceDetailsPage />} />
        <Route path="/verify-code-phone" element={<VerifyCodePhone />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/my-annonces" element={<MyAnnonces />} />
        <Route path="/annonce/:id" element={<AnnonceDetailsPage />} />
        <Route path="/confirm-email" element={<ConfirmEmail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </Providers>
  );
}

export default App;