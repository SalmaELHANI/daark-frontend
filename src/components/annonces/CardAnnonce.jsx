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
    const handleClickDetails = () => {
        sessionStorage.setItem("homeScrollPosition", window.scrollY);
        navigate(`/annonce/${annonce.id}`);
    };
    return (
        <div className="transition-all duration-500 rounded overflow-hidden shadow-lg bg-white border border-[#7474BF] hover:shadow-2xl">
            <div className="relative">
                <img
                    className="w-full object-cover h-[250px]"
                    src={`http://localhost:8080${annonce.photos?.[0] || ""}`}
                    alt={annonce.nom}
                />

            </div>
            <div className="p-4 border-b border-[#7474BF] h-[140px] flex flex-col justify-center">
                <h2 className="font-semibold text-lg text-gray-800 mb-2 text-center">{titre}</h2>

                <div className="flex items-center justify-center text-gray-600 text-sm mb-2">
                    <i className="fa-solid fa-location-dot mr-2"></i>
                    <p className="m-0">{sousTitre}</p>
                </div>

                <div className="flex justify-between text-gray-600 text-sm mt-2 px-4">
                    <div className="flex items-center space-x-1">
                        <i className="fa-solid fa-bed"></i>
                        <span>{annonce.chambres}</span>
                    </div>

                    <div className="flex items-center space-x-1">
                        <i className="fa-solid fa-couch"></i>
                        <span>{annonce.salons}</span>
                    </div>

                    <div className="flex items-center space-x-1">
                        <i className="fa-solid fa-shower"></i>
                        <span>{annonce.sallesBain}</span>
                    </div>
                </div>
            </div>

            <div className="px-6 py-3 flex justify-between items-center bg-gray-100">
                <span className="text-[#7474BF] font-semibold">{prixAvecUnite}</span>
                <button onClick={handleClickDetails}className="bg-[#348AC7]  text-white px-3 py-1 rounded hover:bg-[#348ac7bb] transition">
                    Détails
                </button>
            </div>
        </div>
    );
};

export default CardAnnonce;