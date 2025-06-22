import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { confirmResetPassword } from '../../store/admin/userSlice';

const UpdatePassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    const { loading, error, successMessage } = useSelector((state) => state.user);

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const passwordsMatch = newPassword && confirmPassword && newPassword === confirmPassword;

    const handleUpdate = () => {
        if (!passwordsMatch) {
            alert('Les mots de passe ne correspondent pas.');
            return;
        }
        if (!token) {
            alert('Token invalide ou manquant.');
            return;
        }
        dispatch(confirmResetPassword({ token, newPassword }))
            .unwrap()
            .then(() => {
                alert('Mot de passe mis à jour avec succès !');
                navigate('/login');
            })
            .catch(() => {
                // L’erreur s’affiche via state.error
            });
    };

    if (!token) {
        return <p className="text-center text-red-500 mt-10">Lien de réinitialisation invalide ou expiré.</p>;
    }


    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center p-4">
            <div className="w-full max-w-md bg-white shadow sm:rounded-lg p-6">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl xl:text-3xl font-extrabold">Mettre à jour le mot de passe</h1>

                    <div className="w-full flex-1 mt-8">
                        <div className="mx-auto max-w-xs space-y-5">
                            <div className="relative">
                                <input
                                    type={showNewPassword ? 'text' : 'password'}
                                    placeholder="Nouveau mot de passe"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="w-full px-8 py-4 pr-12 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                >
                                    {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="Confirmer le mot de passe"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full px-8 py-4 pr-12 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>

                            <button
                                onClick={handleUpdate}
                                disabled={!passwordsMatch}
                                className={`tracking-wide font-semibold bg-gradient-to-r from-[#7474BF] to-[#348AC7] text-white w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none ${!passwordsMatch ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                                    }`}
                            >
                                Mettre à jour
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePassword;
