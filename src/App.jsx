import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/auth/LoginForm';
import RegisterForm from './pages/auth/RegisterForm';
import UpdatePassword from './pages/auth/UpdatePassword';
import VerifyEmail from './pages/auth/VerifyEmail';
import PublishAnnonce from './pages/annonces/PublishAnnonce';
import VerifyCodePhone from './pages/auth/VerifyCodePhone';
import VerifyPhone from './pages/auth/VerifyPhone';
import VerifyCode from './pages/auth/VerifyCode';
import Home from './pages/Home';
import AnnonceDetailsPage from './pages/annonces/AnnonceDetails';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Profil from './pages/auth/Profil';
import MyAnnonces from './pages/annonces/MyAnnonces';



function App() {
  return (
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/reset-password" element={<UpdatePassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/publier-annonce" element={<PublishAnnonce />} />        
        <Route path="/verifyphone" element={<VerifyPhone />} />
        <Route path="/detail-annonce" element={<AnnonceDetailsPage />} />
        <Route path="/verify-code-phone" element={<VerifyCodePhone />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/my-annonces" element={<MyAnnonces />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;