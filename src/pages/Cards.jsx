import CardAnnonce from "../components/annonces/CardAnnonce";

const data = [
  {
    id: 1,
    nom: "Maison moderne à Agadir",
    image: "https://cdn.pap.fr/photos/papvacances/06/d2/06d26a2e62fbaa85bbf3e956e612694f/0-p1.jpg",
    description: "Maison spacieuse avec jardin et garage.",
    localisation: "Agadir, Quartier Founty",
    prix: 5500,
    featured: true,
  },
  {
    id: 2,
    nom: "Appartement à louer",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404967793.jpg?k=ac2038c76723a38c3372ca70db463a31eb750311036d8f297b3b2316ebc44e1c&o=&hp=1",
    description: "Appartement lumineux au centre-ville.",
    localisation: "Agadir, Talborjt",
    prix: 3500,
    featured: false,
  },
  {
    id: 3,
    nom: "Villa avec piscine",
    image: "https://www.locmarrakech.com/images/villas/RAF.jpg",
    description: "Villa haut standing avec piscine privée.",
    localisation: "Agadir, Sonaba",
    prix: 12000,
    featured: true,
  },
   {
    id: 4,
    nom: "Villa avec piscine",
    image: "https://img.hwnstatic.com/500/350/80/false/S9z7b46NbIHgqGh5rZKzJ7DshaFQJ:88R:pHDQnO02bWliMFMWFtx5NjO0E5Ur2sA7MqyRQj:3htvslISSFulyOCm.c.cNM3yELrr.fO8E0Sb6KYUGYR06D1fepyhrq2kbpkgTKJazkxkwC:Jl2GNgWjPFpOsj29mszHqQW0DA__",
    description: "Villa haut standing avec piscine privée.",
    localisation: "Agadir, Sonaba",
    prix: 16000,
    featured: true,
  },
];

const Cards = () => {
  return (
    <div className="min-h-screen bg-white p-4 flex flex-col items-center justify-center text-center">
      <div className="max-w-screen-xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Annonces de maisons à louer</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {data.map((annonce) => (
            <CardAnnonce key={annonce.id} annonce={annonce} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
