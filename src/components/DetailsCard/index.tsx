// src/components/DetailsCard.tsx
import { Card, Image, Title, Description, AddCartButton } from "./styles";

interface Props {
    title: string;
    description: string;
    image: string;
}

const DetailsCard = ({ title, description, image }: Props) => {
    return (
        <Card>
            <Image src={image} alt={title} />
            <Title>{title}</Title>
            <Description>{description}</Description>
            <AddCartButton>
                Adicionar ao carrinho
            </AddCartButton>
        </Card>
    );
};

export default DetailsCard;
