import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifyPhone = () => {
    const [number, setNumber] = useState('');
    const navigate = useNavigate();

    const isValid = /^\d{9}$/.test(number);

    const handleSend = () => {
        const fullPhone = `+212${number}`;
        alert(`Code de vérification envoyé au : ${fullPhone}`);
        navigate('/verify-code-phone', { state: { from: 'verify-phone', phone: fullPhone } });
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
                                />
                            </div>

                            <button
                                onClick={handleSend}
                                disabled={!isValid}
                                className={`mt-4 tracking-wide font-semibold bg-gradient-to-r from-[#7474BF] to-[#348AC7] text-white w-full py-4 rounded-lg hover:opacity-90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none
                                ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}
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

export default VerifyPhone;
