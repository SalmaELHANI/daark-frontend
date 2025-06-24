import ImageSlider from "../../components/annonces/ImageSlider";

const Cards = ({ data }) => {
    return <ImageSlider data={data} cardsPerPage={20} />;
};

export default Cards;
