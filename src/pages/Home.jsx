import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterBar from "../components/annonces/SearchFilter";
import Cards from "./annonces/Cards";
import { fetchAcceptedAnnonces } from "../store/annonce/annonceSlice";

const Home = () => {
    const dispatch = useDispatch();
    const { acceptedAnnonces, loading } = useSelector((state) => state.annonce);

    useEffect(() => {
        // Charger toutes les annonces par défaut
        dispatch(fetchAcceptedAnnonces());
    }, [dispatch]);

    return (
        <div className="relative">
            <div className="flex flex-col items-center justify-center text-white px-4 py-6 sm:py-10 md:py-10 bg-gradient-to-b from-[#7474BF] to-[#348AC7]">
                <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 font-poppins">
                    Recherchez selon vos besoins
                </h1>
                <p className="text-base sm:text-lg text-center max-w-xl font-poppins">
                    Explorez, trouvez, emménagez. Votre nouveau chez-vous vous attend.
                </p>

                <div className="w-full max-w-3xl mt-6">
                    <FilterBar onSearch={(filters) => dispatch(fetchAcceptedAnnonces(filters))} />
                </div>
            </div>

            <div className="mt-12">
                {loading ? (
                    <p className="text-center">Chargement...</p>
                ) : (
                    <Cards data={acceptedAnnonces} />
                )}
            </div>

            {/* reste du contenu (about section) */}
        </div>
    );
};

export default Home;
