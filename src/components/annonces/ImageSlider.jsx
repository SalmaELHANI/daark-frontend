import { useState } from 'react';
import CardAnnonce from "./CardAnnonce";

const ImageSlider = ({ data, cardsPerPage = 20 }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / cardsPerPage);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const startIndex = (currentPage - 1) * cardsPerPage;
    const currentCards = data.slice(startIndex, startIndex + cardsPerPage);

    return (
        <div className="min-h-screen bg-white p-4 flex flex-col items-center text-center">
            <div className="max-w-screen-xl w-full">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Annonces de maisons à louer</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
                    {currentCards.map((annonce) => (
                        <CardAnnonce key={annonce.id} annonce={annonce} />
                    ))}
                </div>

                <div className="flex items-center justify-center mt-6 space-x-4">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 flex items-center gap-2"
                    >
                        <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                        </svg>
                        <span>Précédent</span>
                    </button>

                    <span className="text-gray-700 font-medium">
                        Page {currentPage} / {totalPages}
                    </span>

                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 flex items-center gap-2"
                    >
                        <span>Suivant</span>
                        <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ImageSlider;
