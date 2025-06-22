import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePhoneNumber } from '../../store/admin/userSlice';

const VerifyPhone = () => {
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector(state => state.user);
    const location = useLocation();
    const isValid = /^\d{9}$/.test(number);

    const handleSend = async () => {
        if (!isValid) return;

        try {
            const resultAction = await dispatch(updatePhoneNumber(number));
            if (updatePhoneNumber.fulfilled.match(resultAction)) {
                alert(`Code de vérification envoyé au : +212${number}`);
                const from = location.state?.from ; 
                sessionStorage.setItem('verifyData', JSON.stringify({ from }));
                navigate('/verify-code-phone');
            } else {

                alert(resultAction.payload || 'Erreur lors de la mise à jour');
            }
        } catch (err) {
            alert('Erreur inattendue');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center p-4">
            <div className="w-full max-w-md bg-white shadow sm:rounded-lg p-6">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl xl:text-3xl font-extrabold">Vérification de Téléphone</h1>

                    <div className="w-full flex-1 mt-8">
                        <div className="mx-auto max-w-xs">
                            <div className="flex items-center gap-2">
                                <span className="px-4 py-4 bg-gray-100 border border-gray-200 rounded-lg text-sm select-none">
                                    +212
                                </span>
                                <input
                                    className="flex-1 px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="tel"
                                    maxLength={9}
                                    placeholder="612345678"
                                    value={number}
                                    onChange={(e) => {
                                        const input = e.target.value.replace(/\D/g, '');
                                        setNumber(input);
                                    }}
                                    disabled={loading}
                                />
                            </div>

                            {error && <p className="text-red-600 mt-2">{error}</p>}

                            <button
                                onClick={handleSend}
                                disabled={!isValid || loading}
                                className={`mt-4 tracking-wide font-semibold bg-gradient-to-r from-[#7474BF] to-[#348AC7] text-white w-full py-4 rounded-lg hover:opacity-90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none
                    ${!isValid || loading ? 'opacity-50 cursor-not-allowed' : ''}
                `}
                            >
                                {loading ? 'Envoi...' : 'Envoyer'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyPhone;
