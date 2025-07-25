import { useParams } from "react-router-dom";
import { restaurantData } from "../Home";
import DetailsCard from "../../components/DetailsCard";
import { Container } from "../../components/Container";
import { ImageContainer, TitleOverlay, Image } from "./styles";

const Details = () => {
    const { id } = useParams<{ id: string }>();
    const restaurante = restaurantData.find((r) => r.id === id);

    if (!restaurante) return <p>Restaurante não encontrado.</p>;

    return (
        <Container>
            <ImageContainer>
                <Image src={restaurante.image} alt={restaurante.name} />
                <TitleOverlay>{restaurante.name}</TitleOverlay>
            </ImageContainer>

            {restaurante.produto.map((produto, index) => (
                <DetailsCard
                    key={index}
                    title={produto.title}
                    description={produto.description}
                    image={produto.image}
                />
            ))}
        </Container>
    );
};

export default Details;
