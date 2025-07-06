import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./annonces/Cards";
import { fetchAcceptedAnnonces } from "../store/annonce/annonceSlice";
import AnnonceHero from "../components/annonces/AnnonceHero";

const Marketplace = () => {
  const dispatch = useDispatch();
  const { acceptedAnnonces, loading } = useSelector((state) => state.annonce);

  useEffect(() => {
    dispatch(fetchAcceptedAnnonces());
  }, [dispatch]);

  return (
    <div className="relative">
      <AnnonceHero
        title="Parcourez toutes les annonces"
        subtitle="Trouvez le logement idéal selon votre ville, votre budget et vos préférences."
      />

      <div className="mt-12">
        {loading ? (
          <p className="text-center">Chargement...</p>
        ) : (
          <Cards data={acceptedAnnonces} />
        )}
      </div>
    </div>
  );
};

export default Marketplace;
