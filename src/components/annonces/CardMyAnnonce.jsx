import { useNavigate } from 'react-router-dom';

const AnnonceStatusBadge = ({ statut }) => {
  const getStatutLabel = (statut) => {
    switch (statut) {
      case 'ACCEPTEE': return 'Validée';
      case 'REFUSEE': return 'Refusée';
      case 'EN_ATTENTE': return 'En attente';
      default: return statut;
    }
  };

  const statutClasses = {
    ACCEPTEE: 'bg-green-100 text-green-800',
    EN_ATTENTE: 'bg-yellow-100 text-yellow-800',
    REFUSEE: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statutClasses[statut] || 'bg-gray-100 text-gray-800'}`}>
      {getStatutLabel(statut)}
    </span>
  );
};

const CardMyAnnonce = ({ annonce, onDelete }) => {
  const navigate = useNavigate();

  const titre = annonce.typeLogement;
  const sousTitre = `${annonce.adresse}${annonce.adresse && annonce.ville ? ', ' : ''}${annonce.ville}`;
  const suffixePrix = {
    jour: 'DH/jour',
    mensuel: 'DH/mois',
    annuel: 'DH/an',
  };
  const prixAvecUnite = annonce.prix + ' ' + (suffixePrix[annonce.typeLocation] || 'DH/mois');

  return (
    <div className="transition-all duration-500 rounded overflow-hidden shadow-lg bg-white border border-[#7474BF] hover:shadow-2xl relative">
      <div className="relative">
        <img
          className="w-full object-cover h-[250px]"
          src={`http://localhost:8080${annonce.photos?.[0]}`}
          alt={annonce.ville}
        />
      </div>

      <div className="p-4 border-b border-[#7474BF]">
        <h2 className="font-semibold text-lg text-gray-800 mb-2">{titre}</h2>
        <p className="text-gray-600 text-sm mb-1">{sousTitre}</p>
        <p className="text-gray-600 text-sm mb-1">
           <AnnonceStatusBadge statut={annonce.statut} />
        </p>
      </div>

      <div className="px-6 py-3 flex justify-between items-center bg-gray-100">
        <span className="text-[#7474BF] font-semibold">{prixAvecUnite}</span>
        <button
          onClick={() => navigate(`/annonce/${annonce.id}`)}
          className="bg-[#348AC7] text-white px-3 py-1 rounded hover:bg-[#348ac7bb] transition"
        >
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
