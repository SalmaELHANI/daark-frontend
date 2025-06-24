import { useState } from "react";

const villesMaroc = [
    "Casablanca", "Rabat", "Marrakech", "Fès", "Tanger", "Agadir", "Meknès",
    "Oujda", "Kenitra", "Tétouan", "Safi", "El Jadida", "Beni Mellal",
    "Khouribga", "Nador", "Settat",
];

const typesLogement = [
    "Maison", "Villa", "Studio", "Garsonnière", "Appartement", "Riad", "Duplex"
];

const FilterBar = ({ onSearch }) => {
    const [ville, setVille] = useState("");
    const [typeLocation, setTypeLocation] = useState("");
    const [typeLogement, setTypeLogement] = useState("");
    const [minPrix, setMinPrix] = useState("");
    const [maxPrix, setMaxPrix] = useState("");

    const handleSearch = () => {
        const filters = {};
        if (ville) filters.ville = ville.toLowerCase();
        if (typeLocation) filters.typeLocation = typeLocation.toLowerCase();
        if (typeLogement) filters.typeLogement = typeLogement.toLowerCase();
        if (minPrix) filters.minPrix = minPrix;
        if (maxPrix) filters.maxPrix = maxPrix;

        onSearch(filters);
    };

    return (
        <div className="mt-6 bg-white border border-gray-300 rounded-lg p-4 max-w-7xl mx-auto shadow-2xl">
            <div className="flex flex-wrap md:flex-nowrap gap-3 items-center">

                <select
                    value={ville}
                    onChange={(e) => setVille(e.target.value)}
                    className="flex-grow p-2 border text-gray-800 placeholder-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7474BF] min-w-[150px]"
                >
                    <option value="">Toutes les villes</option>
                    {villesMaroc.map((v, index) => (
                        <option key={index} value={v}>{v}</option>
                    ))}
                </select>

                <select
                    value={typeLocation}
                    onChange={(e) => setTypeLocation(e.target.value)}
                    className="w-full md:w-auto p-2 border text-gray-800 placeholder-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7474BF] min-w-[140px]"
                >
                    <option value="">Type de location</option>
                    <option value="jour">Par jour</option>
                    <option value="mensuel">Mensuel</option>
                    <option value="annuel">Annuel</option>
                </select>

                <select
                    value={typeLogement}
                    onChange={(e) => setTypeLogement(e.target.value)}
                    className="w-full md:w-auto p-2 border text-gray-800 placeholder-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7474BF] min-w-[140px]"
                >
                    <option value="">Type de logement</option>
                    {typesLogement.map((type, index) => (
                        <option key={index} value={type.toLowerCase()}>{type}</option>
                    ))}
                </select>

                <input
                    type="number"
                    value={minPrix}
                    onChange={(e) => setMinPrix(e.target.value)}
                    placeholder="Min"
                    className="w-full md:w-[90px] p-2 border text-gray-800 placeholder-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7474BF]"
                />

                <input
                    type="number"
                    value={maxPrix}
                    onChange={(e) => setMaxPrix(e.target.value)}
                    placeholder="Max"
                    className="w-full md:w-[90px] p-2 border text-gray-800 placeholder-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7474BF]"
                />

                <button
                    onClick={handleSearch}
                    className="w-full md:w-auto bg-[#7474BF] text-white p-2 px-4 rounded-md hover:bg-[#5b5c9e] flex items-center justify-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 mr-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default FilterBar;
