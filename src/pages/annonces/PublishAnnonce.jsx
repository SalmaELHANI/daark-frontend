import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAnnonce, resetAnnonceState } from "../../store/annonce/annonceSlice";

const villesMaroc = [
    "Casablanca", "Rabat", "Marrakech", "Fès", "Tanger", "Agadir", "Meknès",
    "Oujda", "Kenitra", "Tétouan", "Safi", "El Jadida", "Beni Mellal",
    "Khouribga", "Nador", "Settat",
];

const typesLogement = [
    "Maison", "Villa", "Studio", "Garsonnière", "Appartement", "Riad", "Duplex"
];

const typesLocation = ["jour", "mensuel", "annuel"];

export default function AddAnnonceForm() {
    const [formData, setFormData] = useState({
        ville: "",
        typeLogement: "",
        typeLocation: "",
        adresse: "",
        telephone: "",
        prix: "",
        chambres: "",
        salons: "",
        sallesBain: "",
        superficie: "",
        etage: "",
        meuble: false,
        description: "",
        conditions: {
            nonFumeur: false,
            animaux: false,
            caution: false,
        },
        photos: [],
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, success, error } = useSelector((state) => state.annonce);

    const commonInputClass =
        "w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#7474BF] px-8 py-4 font-medium bg-gray-100 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white";

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files).slice(0, 15);
        setFormData({ ...formData, photos: files });
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name in formData.conditions) {
            setFormData({
                ...formData,
                conditions: {
                    ...formData.conditions,
                    [name]: type === "checkbox" ? checked : value,
                },
            });
        } else {
            setFormData({
                ...formData,
                [name]: type === "checkbox" ? checked : value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.photos.length < 3 || formData.photos.length > 15) {
            alert("Tu dois ajouter entre 3 et 15 photos.");
            return;
        }

        const data = new FormData();

        // Ajout des photos
        formData.photos.forEach((photo) => data.append("photos", photo));
        const safeAppend = (key, val) => {
            if (val !== '' && val !== null && val !== undefined && !isNaN(val)) {
                data.append(key, val);
            }
        };

        // Champs texte / nombre
        data.append("ville", formData.ville);
        data.append("typeLogement", formData.typeLogement);
        data.append("typeLocation", formData.typeLocation);
        data.append("adresse", formData.adresse);
        data.append("description", formData.description);

        safeAppend("prix", parseInt(formData.prix));
        safeAppend("chambres", parseInt(formData.chambres));
        safeAppend("salons", parseInt(formData.salons));
        safeAppend("sallesBain", parseInt(formData.sallesBain));
        safeAppend("superficie", parseInt(formData.superficie));
        safeAppend("etage", parseInt(formData.etage));

        data.append("meuble", formData.meuble ? "true" : "false");
        data.append("nonFumeur", formData.conditions.nonFumeur ? "true" : "false");
        data.append("animaux", formData.conditions.animaux ? "true" : "false");
        data.append("caution", formData.conditions.caution ? "true" : "false");


        // Debug
        for (let pair of data.entries()) {
            if (pair[1] instanceof File) {
                console.log(`${pair[0]}:`, pair[1].name);
            } else {
                console.log(`${pair[0]}:`, pair[1]);
            }
        }


        dispatch(createAnnonce(data));
    };




    useEffect(() => {
        if (success) {
            alert("Annonce publiée !");
            dispatch(resetAnnonceState());
            navigate("/my-annonces");
        } else if (error) {
            alert("Erreur : " + error);
            dispatch(resetAnnonceState());
        }
    }, [success, error, dispatch, navigate]);

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center p-14">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl space-y-5"
            >
                <h2 className="text-2xl font-semibold text-center text-gray-700">Ajouter une annonce</h2>

                <select name="ville" value={formData.ville} onChange={handleChange} required className={commonInputClass}>
                    <option value="">Ville</option>
                    {villesMaroc.map((ville) => (
                        <option key={ville} value={ville}>{ville}</option>
                    ))}
                </select>

                <select name="typeLogement" value={formData.typeLogement} onChange={handleChange} required className={commonInputClass}>
                    <option value="">Type de logement</option>
                    {typesLogement.map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>

                <select name="typeLocation" value={formData.typeLocation} onChange={handleChange} required className={commonInputClass}>
                    <option value="">Type de location</option>
                    {typesLocation.map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>

                <input name="adresse" value={formData.adresse} onChange={handleChange} type="text" placeholder="Adresse complète" required className={commonInputClass} />

                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description de l'annonce" rows="4" required className={commonInputClass} />

                <input name="prix" value={formData.prix} onChange={handleChange} type="number" placeholder="Prix (MAD)" className={commonInputClass} />

                <div className="grid grid-cols-3 gap-3">
                    <input name="chambres" value={formData.chambres} onChange={handleChange} type="number" placeholder="Chambres" className={commonInputClass} />
                    <input name="salons" value={formData.salons} onChange={handleChange} type="number" placeholder="Salons" className={commonInputClass} />
                    <input name="sallesBain" value={formData.sallesBain} onChange={handleChange} type="number" placeholder="Salles de bain" className={commonInputClass} />
                </div>

                <input name="superficie" value={formData.superficie} onChange={handleChange} type="number" placeholder="Superficie (m²)" className={commonInputClass} />
                <input name="etage" value={formData.etage} onChange={handleChange} type="number" placeholder="Étage" className={commonInputClass} />

                <label className="flex items-center gap-2">
                    <input name="meuble" type="checkbox" checked={formData.meuble} onChange={handleChange} />
                    Meublé
                </label>

                <div className="space-y-2">
                    <label className="flex items-center gap-2">
                        <input name="nonFumeur" type="checkbox" checked={formData.conditions.nonFumeur} onChange={handleChange} />
                        Non-fumeur
                    </label>
                    <label className="flex items-center gap-2">
                        <input name="animaux" type="checkbox" checked={formData.conditions.animaux} onChange={handleChange} />
                        Pas d’animaux
                    </label>
                    <label className="flex items-center gap-2">
                        <input name="caution" type="checkbox" checked={formData.conditions.caution} onChange={handleChange} />
                        Caution requise
                    </label>
                </div>

                <div className="sm:col-span-6">
                    <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">Photos (3 à 15)</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="flex text-sm text-gray-600 justify-center">
                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-[#7474BF] hover:text-[#7474BF] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#7474BF]">
                                    <span>Choisir des fichiers</span>
                                    <input
                                        id="file-upload"
                                        name="file-upload"
                                        type="file"
                                        multiple
                                        accept="image/png, image/jpeg"
                                        onChange={handleImageChange}
                                        className="sr-only"
                                    />
                                </label>
                                <p className="pl-1">ou glisser-déposer</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG ou JPG jusqu’à 10 Mo, 15 max</p>
                        </div>
                    </div>

                    {formData.photos.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4 justify-center">
                            {formData.photos.map((file, idx) => (
                                <img key={idx} src={URL.createObjectURL(file)} alt={`upload-${idx}`} className="h-20 w-20 object-cover rounded-md border" />
                            ))}
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="block w-full bg-gradient-to-r from-[#7474BF] to-[#348AC7] text-white py-3 rounded-xl font-semibold text-center"
                >
                    {loading ? "Publication en cours..." : "Publier l’annonce"}
                </button>
            </form>
        </div>
    );
}
