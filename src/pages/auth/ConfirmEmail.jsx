import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { confirmEmail, resetUserState } from '../../store/admin/userSlice';

const ConfirmEmail = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { loading, error, successMessage } = useSelector(state => state.user);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      dispatch(confirmEmail(token));
    }

    return () => {
      dispatch(resetUserState());
    };
  }, [dispatch, location.search]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center p-4">
        <div className="text-lg font-medium text-gray-700">Vérification en cours...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center p-4">
        <div className="max-w-md w-full bg-white p-6 rounded shadow text-center">
          <p className="text-red-600 font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  if (successMessage) {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center p-4">
        <div className="w-full max-w-md bg-white shadow sm:rounded-lg p-6">
          <div className="w-12 h-12 rounded-full bg-green-100 p-2 flex items-center justify-center mx-auto mb-3.5">
            <svg aria-hidden="true" className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Success</span>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold text-center mb-4">{successMessage}</h1>
            <Link
              to="/login"
              className="mt-2 tracking-wide font-semibold bg-gradient-to-r from-[#7474BF] to-[#348AC7] text-white w-full py-4 rounded-lg hover:opacity-90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            >
              Se connecter
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return null; 
};

export default ConfirmEmail;
