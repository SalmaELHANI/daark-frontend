import FilterBar from "./SearchFilter";
import { useDispatch } from "react-redux";
import { fetchAcceptedAnnonces } from "../../store/annonce/annonceSlice";

const AnnonceHero = ({ title, subtitle }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center text-white px-4 py-6 sm:py-10 md:py-10 bg-gradient-to-b from-[#7474BF] to-[#348AC7]">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 font-poppins">
        {title}
      </h1>
      <p className="text-base sm:text-lg text-center max-w-xl font-poppins">
        {subtitle}
      </p>

      <div className="w-full max-w-3xl mt-6">
        <FilterBar onSearch={(filters) => dispatch(fetchAcceptedAnnonces(filters))} />
      </div>
    </div>
  );
};

export default AnnonceHero;
