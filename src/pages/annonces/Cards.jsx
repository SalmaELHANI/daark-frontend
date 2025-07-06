import ImageSlider from "../../components/annonces/ImageSlider";

const Cards = ({ data }) => {
    return <ImageSlider data={data} cardsPerPage={16} />;
};

export default Cards;
