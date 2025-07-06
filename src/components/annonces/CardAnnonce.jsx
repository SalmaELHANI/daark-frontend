import { useNavigate } from 'react-router-dom';

const CardAnnonce = ({ annonce }) => {
    const navigate = useNavigate();

    const titre = annonce.typeLogement;
    const sousTitre = `${annonce.adresse}${annonce.adresse && annonce.ville ? ', ' : ''}${annonce.ville}`;
    const suffixePrix = {
        jour: 'DH/jour',
        mensuel: 'DH/mois',
        annuel: 'DH/ans',
    };
    const prixAvecUnite = annonce.prix + ' ' + (suffixePrix[annonce.typeLocation] || 'DH/mois');

    return (
        <div className="transition-all duration-500 rounded overflow-hidden shadow-lg bg-white border border-[#7474BF] hover:shadow-2xl">
            <div className="relative">
                <img
                    className="w-full object-cover h-[250px]"
                    src={`http://localhost:8080${annonce.photos?.[0] || ""}`}
                    alt={annonce.nom}
                />

            </div>
            <div className="p-4 border-b border-[#7474BF] h-[100px]">
                <h2 className="font-semibold text-lg text-gray-800 mb-2">{titre}</h2>
                <p className="text-gray-600 text-sm mb-1">
                    {sousTitre}</p>
            </div>
            <div className="px-6 py-3 flex justify-between items-center bg-gray-100">
                <span className="text-[#7474BF]  font-semibold">{prixAvecUnite}</span>
                <button onClick={() => navigate(`/annonce/${annonce.id}`)} className="bg-[#348AC7]  text-white px-3 py-1 rounded hover:bg-[#348ac7bb] transition">
                    Détails
                </button>
            </div>
        </div>
    );
};

export default CardAnnonce;