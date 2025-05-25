import ImageSlider from "../../components/annonces/ImageSlider";

const data = Array.from({ length: 45 }, (_, i) => ({
  id: i + 1,
  nom: `Annonce ${i + 1}`,
  image: "https://www.locmarrakech.com/images/villas/RAF.jpg",
  description: `Description de l'annonce ${i + 1}`,
  localisation: "Agadir",
  prix: 5000 + i * 100,
  featured: i % 2 === 0,
}));

const Cards = () => {
  return <ImageSlider data={data} cardsPerPage={20} />;
};

export default Cards;
