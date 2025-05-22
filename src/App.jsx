import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VerifyEmail from './components/auth/VerifyEmail';
import UpdatePassword from './components/auth/UpdatePassword';
import VerifyCode from './components/auth/VerifyCode';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/reset-password" element={<UpdatePassword />} />
        <Route path="/verify-code" element={<VerifyCode />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;