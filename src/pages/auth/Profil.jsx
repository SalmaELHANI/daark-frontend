import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, logoutUser } from '../../store/admin/userSlice';
import { useNavigate, Link } from 'react-router-dom';

const UserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { profile, loading } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        dispatch(logoutUser());
        navigate('/');
    };

    if (loading || !profile) {
        return <div className="min-h-screen flex justify-center items-center">Chargement...</div>;
    }

    const firstName = profile?.username?.split(' ')[0] || '';
    const lastName = profile?.username?.split(' ')[1] || '';
    const phone = profile.telephone;
    const email = profile.email;
    const initials = `${firstName[0] || ''}${lastName[0] || ''}`.toUpperCase();
    const isAdmin = localStorage.getItem('role') === 'ADMIN';

    return (
        <div className="flex items-center justify-center min-h-screen p-2 bg-gray-100">
            <div className="max-w-md w-full bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">

                <div className="h-32 bg-gradient-to-r from-[#7474BF] to-[#348AC7] relative">
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                        <div className="h-24 w-24 rounded-full border-4 border-white bg-indigo-600 text-white flex items-center justify-center text-3xl font-bold">
                            {initials}
                        </div>
                    </div>
                </div>

                <div className="pt-16 pb-8 px-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800">{firstName} {lastName}</h3>
                    <p
                        className={`font-medium ${phone ? 'text-indigo-600' : 'text-gray-400 italic cursor-pointer hover:underline'
                            }`}
                        onClick={() => {
                            if (!phone) {
                                navigate('/verifyphone', { state: { from: 'profile' } });
                            }
                        }}
                    >
                        {!isAdmin ? (
                            <p
                                className={`font-medium ${phone ? 'text-indigo-600' : 'text-gray-400 italic cursor-pointer hover:underline'
                                    }`}
                                onClick={() => {
                                    if (!phone) {
                                        navigate('/verifyphone', { state: { from: 'profile' } });
                                    }
                                }}
                            >
                                {phone ? `0${phone.slice(-9)}` : 'Ajouter numéro'}
                            </p>
                        ) : null}
                    </p>

                    <p className="text-gray-500 mt-1">{email}</p>

                    <div className="mt-8 flex justify-center space-x-3">
                        {isAdmin ? (
                            <Link
                                to="/dashboard"
                                className="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <Link
                                to="/my-annonces"
                                className="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out"
                            >
                                Mes Annonces
                            </Link>
                        )}
                        <button onClick={handleLogout} className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out">
                            Se Déconnecter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
