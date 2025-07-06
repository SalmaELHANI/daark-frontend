import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./annonces/Cards";
import { fetchAcceptedAnnonces } from "../store/annonce/annonceSlice";
import AboutSection from "../components/AboutSection";
import AnnonceHero from "../components/annonces/AnnonceHero";

const Home = () => {
    const dispatch = useDispatch();
    const { acceptedAnnonces, loading } = useSelector((state) => state.annonce);

    useEffect(() => {
        dispatch(fetchAcceptedAnnonces());

        const scrollPos = sessionStorage.getItem("homeScrollPosition");
        if (scrollPos) {
            window.scrollTo(0, parseInt(scrollPos, 10));
            sessionStorage.removeItem("homeScrollPosition");
        }
    }, [dispatch]);


    return (
        <div className="relative">
            <AnnonceHero
                title="Recherchez selon vos besoins"
                subtitle="Explorez, trouvez, emménagez. Votre nouveau chez-vous vous attend."
            />

            <div className="mt-12">
                {loading ? (
                    <p className="text-center">Chargement...</p>
                ) : (
                    <Cards data={acceptedAnnonces} />
                )}
            </div>

            <AboutSection />
        </div>
    );
};

export default Home;
