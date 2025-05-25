import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

const VerifyCode = () => {
  const [code, setCode] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from;
  const email = location.state?.email;

  useEffect(() => {
    if (!from || !email) {
      navigate('/verify-email');
    }
  }, [from, email, navigate]);

  
  const handleVerify = () => {
    if (code.trim().length === 6) {
      if (from === 'signup') {
        navigate('/');
      } else if (from === 'forgot-password') {
        navigate('/reset-password', { state: { email } });
      }

    } else {
      alert('Veuillez entrer un code à 6 chiffres.');
    }
  };

  const handleResend = () => {
    alert('Un nouveau code vous a été envoyé.');
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white shadow sm:rounded-lg p-6">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl xl:text-3xl font-extrabold mb-6">Vérification du Code</h1>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Entrez le code à 6 chiffres que vous avez reçu par email.
          </p>

          <input
            type="text"
            placeholder="Code de vérification"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            maxLength={6}
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-4 text-center"
          />

          <button
            onClick={handleVerify}
            disabled={code.trim().length !== 6}
            className={`mt-2 tracking-wide font-semibold bg-gradient-to-r from-[#7474BF] to-[#348AC7] text-white w-full py-4 rounded-lg hover:opacity-90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none
              ${code.trim().length !== 6 ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            Vérifier
          </button>

          <div className="text-sm mt-6 text-gray-700">
            Vous n'avez pas reçu le code ?{' '}
            <button
              onClick={handleResend}
              className="text-[#348AC7] font-medium hover:underline"
            >
              Renvoyer
            </button>
          </div>

          <div className="text-sm mt-2 text-gray-700">
            Vous avez fait une erreur d’email ?{' '}
            <Link
              to="/verify-email"
              className="text-[#348AC7] font-medium hover:underline"
            >
              Ressaisir l’email
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
