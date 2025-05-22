import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VerifyEmail from './components/auth/VerifyEmail';
import UpdatePassword from './components/auth/UpdatePassword';
import VerifyCode from './components/auth/VerifyCode';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/reset-password" element={<UpdatePassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;