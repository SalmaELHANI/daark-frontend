import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();


    const handleSend = () => {
        alert(`Email de vérification envoyé à : ${email}`);
        navigate('/verify-code', { state: { from: 'forgot-password', email } });

    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center p-4">
            <div className="w-full max-w-md bg-white shadow sm:rounded-lg p-6">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl xl:text-3xl font-extrabold">Vérification d'Email</h1>

                    <div className="w-full flex-1 mt-8">
                        <div className="mx-auto max-w-xs">
                            <input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                type="email"
                                placeholder="Entrez votre email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                onClick={handleSend}
                                disabled={!email}
                                className={`mt-2 tracking-wide font-semibold bg-gradient-to-r from-[#7474BF] to-[#348AC7] text-white w-full py-4 rounded-lg hover:opacity-90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none
                  ${!email ? 'opacity-50 cursor-not-allowed' : ''}
                `}
                            >
                                Envoyer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;
