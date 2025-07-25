// src/components/RestaurantCard.tsx
import { useNavigate } from "react-router-dom";
import { Card, Image, SaibaMais, Title, Rating, Description } from "./styles";
import Star from "../../assets/svg/star";

interface Produto {
    title: string;
    description: string;
    image: string;
}

interface Props {
    id: string;
    name: string;
    description: string;
    image: string;
    rating: number;
    saibaMais: string;
    produto: Produto[];
}

const RestaurantCard = ({
    id,
    name,
    description,
    image,
    rating,
    saibaMais,
}: Props) => {
    const navigate = useNavigate();

    return (
        <Card>
            <Image src={image} alt={name} />
            <Title>
                {name}
                <Rating>
                    {rating.toFixed(1)} <Star />
                </Rating>
            </Title>

            <Description>{description}</Description>
            <SaibaMais onClick={() => navigate(`/restaurant/${id}`)}>
                {saibaMais}
            </SaibaMais>
        </Card>
    );
};

export default RestaurantCard;
