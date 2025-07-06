import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import LoginForm from './pages/auth/LoginForm';
import RegisterForm from './pages/auth/RegisterForm';
import UpdatePassword from './pages/auth/UpdatePassword';
import VerifyEmail from './pages/auth/VerifyEmail';
import PublishAnnonce from './pages/annonces/PublishAnnonce';
import VerifyCodePhone from './pages/auth/VerifyCodePhone';
import VerifyPhone from './pages/auth/VerifyPhone';
import Home from './pages/Home';
import AnnonceDetailsPage from './pages/annonces/AnnonceDetails';
import HeaderWrapper from './components/layout/HeaderWrapper';
import Footer from './components/layout/Footer';
import Profil from './pages/auth/Profil';
import MyAnnonces from './pages/annonces/MyAnnonces';
import { Providers } from './store/Provider';
import store from "./store/index"
import ConfirmEmail from './pages/auth/ConfirmEmail';
import Dashboard from './pages/dashboard/Dashboard';
import FAQ from './pages/FAQ';
import Marketplace from './pages/Marketplace';
import Advantages from './pages/Advantages';
import About from './pages/About';

function AppContent() {
  const location = useLocation();
  const role = localStorage.getItem("role");
  const noFooterRoutes = ['/dashboard'];
  const noFooterForAdminRoutes = ['/profil'];

  const showFooter =
    !noFooterRoutes.includes(location.pathname) &&
    !(role === "ADMIN" && noFooterForAdminRoutes.includes(location.pathname));


  return (
    <>
      <HeaderWrapper />
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/user/:userId/annonces" element={<MyAnnonces isAdminView={true} />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/advantages" element={<Advantages />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Providers store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Providers>
  );
}

export default App;
