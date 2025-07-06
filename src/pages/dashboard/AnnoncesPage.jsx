import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAnnoncesAdmin, updateAnnonceStatus, deleteAnnonce } from '../../store/annonce/annonceSlice';

function AnnoncesPage() {
  const dispatch = useDispatch();
  const { allAnnonces, loading, error } = useSelector((state) => state.annonce);

  useEffect(() => {
    dispatch(fetchAllAnnoncesAdmin());
  }, [dispatch]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAnnonce, setSelectedAnnonce] = useState(null);
  const [newStatut, setNewStatut] = useState('');
  const [filterStatus, setFilterStatus] = useState(null);

  const openModal = (annonce) => {
    setSelectedAnnonce(annonce);
    setNewStatut('ACCEPTEE');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedAnnonce(null);
    setNewStatut('');
  };

  const handleSave = async () => {
    try {
      await dispatch(updateAnnonceStatus({ id: selectedAnnonce.id, statut: newStatut }));
      await dispatch(fetchAllAnnoncesAdmin());
      closeModal();
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette annonce ?")) {
      try {
        await dispatch(deleteAnnonce(id));
        await dispatch(fetchAllAnnoncesAdmin()); 
      } catch (error) {
        console.error("Erreur suppression annonce:", error);
      }
    }
  };

  const getStatutLabel = (statut) => {
    switch (statut) {
      case 'ACCEPTEE': return 'Validée';
      case 'REFUSEE': return 'Refusée';
      case 'EN_ATTENTE': return 'En attente';
      default: return statut;
    }
  };

  const annoncesFiltrees = filterStatus
    ? allAnnonces.filter((a) => a.statut === filterStatus)
    : allAnnonces;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 relative">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Annonces récentes</h3>
          <p className="text-gray-600 text-sm">Annonces publiées par les utilisateurs</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setFilterStatus('EN_ATTENTE')}
            className={`px-4 py-2 rounded-lg transition-colors ${filterStatus === 'EN_ATTENTE'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-gray-200 text-gray-700 hover:bg-yellow-100 hover:text-yellow-800'
              }`}
          >
            Annonces en Attente <i className="fa-solid fa-clock-rotate-left"></i>
          </button>

          <button
            onClick={() => setFilterStatus(null)}
            style={{
              backgroundColor: filterStatus === null ? '#4088C7' : '#7BAED9',
              color: 'white',
            }}
            className="px-4 py-2 rounded-lg transition-colors hover:brightness-90"
          >
            Toutes les annonces
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilisateur</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Titre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ville</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  Chargement...
                </td>
              </tr>
            ) : annoncesFiltrees.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  Aucune annonce trouvée.
                </td>
              </tr>
            ) : (
              annoncesFiltrees.map((annonce) => {
                const { id, username, email, titre, prix, statut, date } = annonce;
                const fullName = username ?? 'Utilisateur';
                const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=random`;

                return (
                  <tr key={id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={avatarUrl}
                          alt={fullName}
                          className="w-8 h-8 rounded-full mr-3 object-cover"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{fullName}</div>
                          <div className="text-sm text-gray-500">{email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{titre ?? '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{prix} MAD</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statut === 'ACCEPTEE'
                          ? 'bg-green-100 text-green-800'
                          : statut === 'EN_ATTENTE'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                          }`}
                      >
                        {getStatutLabel(statut)}
                      </span>{' '}
                      <i
                        className="fa-regular fa-pen-to-square cursor-pointer ml-2 text-gray-700 hover:text-gray-900"
                        title="Modifier le statut"
                        onClick={() => openModal(annonce)}
                      ></i>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{annonce.ville ?? '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <Link
                          to={`/annonce/${annonce.id}`}
                          className="text-blue-600 hover:text-blue-900 mr-6"
                          title="Voir"
                        >
                          <i className="fas fa-eye"></i>
                        </Link>
                        <button
                          onClick={() => handleDelete(id)}
                          className="text-red-600 hover:text-red-900"
                          title="Supprimer"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-[#00000074] bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-full max-w-md bg-white shadow sm:rounded-lg p-6">
            <div className="flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold mb-6">Modifier le statut</h1>

              <select
                value={newStatut}
                onChange={(e) => setNewStatut(e.target.value)}
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#7474BF] px-8 py-4 font-medium bg-gray-100 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-6"
              >
                <option value="ACCEPTEE">Valider</option>
                <option value="REFUSEE">Refuser</option>
              </select>

              <div className="flex space-x-4 w-full">
                <button
                  onClick={handleSave}
                  className="flex-1 tracking-wide font-semibold bg-gradient-to-r from-[#7474BF] to-[#348AC7] text-white py-3 rounded-lg hover:opacity-90 transition-all duration-300 ease-in-out"
                >
                  Sauvegarder
                </button>
                <button
                  onClick={closeModal}
                  className="flex-1 tracking-wide font-semibold border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnnoncesPage;
