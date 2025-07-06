import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnnonceById, deleteAnnonce } from "../../store/annonce/annonceSlice";
import { getUserProfile } from "../../store/admin/userSlice";

export default function AnnonceDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { annonceDetails: annonce, loading, error } = useSelector((state) => state.annonce);

    useEffect(() => {
        if (id) {
            dispatch(fetchAnnonceById(id));
            dispatch(getUserProfile());
        }
    }, [dispatch, id]);

    const { profile } = useSelector((state) => state.user);

    const handleDelete = () => {
        if (window.confirm("Voulez-vous supprimer cette annonce ?")) {
            dispatch(deleteAnnonce(id)).then(() => {
                navigate("/my-annonces");
            });
        }
    };

    if (loading) return <p className="text-center mt-10">Chargement...</p>;
    if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
    if (!annonce) return null;

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md grid md:grid-cols-2 gap-6 p-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {annonce.photos.map((img, index) => (
                        <img
                            key={index}
                            src={`http://localhost:8080${img}`}
                            alt={`annonce-${index}`}
                            className="w-full h-60 object-cover rounded-xl border"
                        />
                    ))}
                </div>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">Détails de l'annonce</h2>

                    <details open className="border-b border-gray-300">
                        <summary className="py-3 cursor-pointer font-semibold text-lg text-[#348AC7]">Informations générales</summary>
                        <article className="text-gray-700 space-y-1 mt-2">
                            <p><strong>Ville :</strong> {annonce.ville}</p>
                            <p><strong>Adresse :</strong> {annonce.adresse}</p>
                            <p><strong>Type de logement :</strong> {annonce.typeLogement}</p>
                            <p><strong>Type de location :</strong> {annonce.typeLocation}</p>
                            <p><strong>Prix :</strong> {annonce.prix} MAD</p>
                        </article>
                    </details>

                    <details className="border-b border-gray-300">
                        <summary className="py-3 cursor-pointer font-semibold text-lg text-[#348AC7]">Caractéristiques</summary>
                        <article className="text-gray-700 space-y-1 mt-2">
                            <p><strong>Chambres :</strong> {annonce.chambres}</p>
                            <p><strong>Salons :</strong> {annonce.salons}</p>
                            <p><strong>Salles de bain :</strong> {annonce.sallesBain}</p>
                            <p><strong>Superficie :</strong> {annonce.superficie} m²</p>
                            <p><strong>Étage :</strong> {annonce.etage}</p>
                            <p><strong>Meublé :</strong> {annonce.meuble ? "Oui" : "Non"}</p>
                        </article>
                    </details>

                    <details className="border-b border-gray-300">
                        <summary className="py-3 cursor-pointer font-semibold text-lg text-[#348AC7]">Conditions de location</summary>
                        <article className="text-gray-700 space-y-1 mt-2">
                            <p><strong>Non-fumeur :</strong> {annonce.nonFumeur ? "Oui" : "Non"}</p>
                            <p><strong>Pas d’animaux :</strong> {annonce.animaux ? "Oui" : "Non"}</p>
                            <p><strong>Caution :</strong> {annonce.caution ? "Requise" : "Non requise"}</p>
                        </article>
                    </details>

                    <details>
                        <summary className="py-3 cursor-pointer font-semibold text-lg text-[#348AC7]">Description</summary>
                        <article className="text-gray-700 mt-2">
                            <p>{annonce.description}</p>
                        </article>
                    </details>

                    <div className="pt-4">
                        <p className="text-sm text-gray-500">
                            Pour plus d'informations, contactez : <span className="font-semibold">{annonce.telephone ? `0${annonce.telephone.slice(-9)}` : "N/A"}</span>
                        </p>

                    </div>
                    {annonce.user?.id === profile?.id && (
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                        >
                            Supprimer
                        </button>
                    )}

                </section>
            </div>
        </div>
    );
}
