export default function AnnonceDetailsPage() {
    const annonce = {
        images: [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/550415108.jpg?k=b4258bff2300ac5c679d48228f9eb4aefc9d780e2af425fe2236524273621db2&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/550415116.jpg?k=71073a21de1fb6f459bd190fc36e893cd81ba412bbc39bfd6b5a67a9291d7a34&o=&hp=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/550414989.jpg?k=b77a85948b56199a4b91453234f4dd9cb45112769d542df1d724cc0f56174aa4&o=&hp=1",
            "https://decodesign.ca/wp-content/uploads/2024/12/bloc-salles-de-bain-2024.png",
            "https://www.expertdusommeil.ma/pub/media/webp_image/catalog/product/cache/7c788d940fc6e493a84aae9ec42a83ae/a/m/ambiance_1.webp"
        ],
        ville: "Agadir",
        adresse: "Quartier Talborjt, Agadir, Maroc",
        typeLogement: "Appartement",
        typeLocation: "Mensuel",
        prix: 4500,
        chambres: 2,
        salons: 1,
        sallesBain: 1,
        superficie: 85,
        etage: 3,
        meuble: true,
        telephone: "+212612345678",
        description: "Appartement bien ensoleillé proche de toutes commodités.",
        conditions: {
            nonFumeur: true,
            animaux: false,
            caution: true,

        }
    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md grid md:grid-cols-2 gap-6 p-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {annonce.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
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
                            <p><strong>Non-fumeur :</strong> {annonce.conditions.nonFumeur ? "Oui" : "Non"}</p>
                            <p><strong>Pas d’animaux :</strong> {annonce.conditions.animaux ? "Non" : "Oui"}</p>
                            <p><strong>Caution :</strong> {annonce.conditions.caution ? "Requise" : "Non requise"}</p>
                        </article>
                    </details>

                    <details>
                        <summary className="py-3 cursor-pointer font-semibold text-lg text-[#348AC7]">Description</summary>
                        <article className="text-gray-700 mt-2">
                            <p>{annonce.description}</p>
                        </article>
                    </details>

                    <div className="pt-4">
                        <p className="text-sm text-gray-500">Pour plus d'informations, contactez : <span className="font-semibold">{annonce.telephone}</span></p>
                    </div>
                </section>
            </div>
        </div>
    );
}
