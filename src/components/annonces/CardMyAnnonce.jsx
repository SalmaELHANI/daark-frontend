const CardMyAnnonce = ({ annonce, onDelete }) => {
    return (
        <div className="transition-all duration-500 rounded overflow-hidden shadow-lg bg-white border border-[#7474BF] hover:shadow-2xl relative">
            <div className="relative">
                <img className="w-full object-cover h-[250px]" src={annonce.image} alt={annonce.nom} />
            </div>
            <div className="p-4 border-b border-[#7474BF]">
                <h2 className="font-semibold text-lg text-gray-800 mb-2">{annonce.nom}</h2>
                <p className="text-gray-600 text-sm mb-1">{annonce.localisation}</p>
                <p className="text-gray-500 text-sm">{annonce.description}</p>
            </div>
            <div className="px-6 py-3 flex justify-between items-center bg-gray-100">
                <span className="text-[#7474BF] font-semibold">{annonce.prix} DH/mois</span>
                <button className="bg-[#348AC7] text-white px-3 py-1 rounded hover:bg-[#348ac7bb] transition">
                    Détails
                </button>
            </div>

            <button
                onClick={onDelete}
                className="absolute top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded hover:bg-red-600 transition"
            >
                Supprimer
            </button>
        </div>
    );
};

export default CardMyAnnonce;
