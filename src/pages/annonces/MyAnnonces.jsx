import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAnnonces, deleteAnnonce,deleteAllUserAnnonces } from "../../store/annonce/annonceSlice";
import CardAnnonce from "../../components/annonces/CardMyAnnonce";

const MyAnnonces = () => {
    const dispatch = useDispatch();
    const { annonces, loading, error } = useSelector((state) => state.annonce);

    useEffect(() => {
        dispatch(fetchUserAnnonces());
    }, [dispatch]);

    const supprimerAnnonce = (id) => {
        dispatch(deleteAnnonce(id));
    };

    const supprimerToutesLesAnnonces = () => {
        if (window.confirm("Confirmer la suppression de toutes les annonces ?")) {
            dispatch(deleteAllUserAnnonces());
        }
    };


    if (loading) return <p>Chargement des annonces...</p>;
    if (error) return <p className="text-red-500">Erreur : {error}</p>;

    return (
        <div className="min-h-screen bg-white p-4 flex flex-col items-center text-center">
            <div className="max-w-screen-xl w-full">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Annonces de maisons à louer
                </h1>

                {annonces.length > 0 && (
                    <div className="mb-6 text-right">
                        <button
                            onClick={supprimerToutesLesAnnonces}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                        >
                            Supprimer toutes les annonces
                        </button>
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
                    {annonces.map((annonce) => (
                        <CardAnnonce
                            key={annonce.id}
                            annonce={annonce}
                            onDelete={() => supprimerAnnonce(annonce.id)}
                        />
                    ))}
                </div>

                {annonces.length === 0 && (
                    <p className="text-gray-500 mt-10">Aucune annonce disponible.</p>
                )}
            </div>
        </div>
    );
};

export default MyAnnonces;
