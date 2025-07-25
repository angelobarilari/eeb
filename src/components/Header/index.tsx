import { useLocation, useNavigate } from "react-router-dom";
import Efood from "../../assets/svg/efood";
import { Title } from "../RestaurantCard/styles";
import { HeaderContainer, LogoContainer, CartText, BackButton } from "./styles";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isDetailsPage = location.pathname.startsWith("/restaurant/");

    return (
        <HeaderContainer isDetailsPage={isDetailsPage}>
            {isDetailsPage ? (
                <BackButton onClick={() => navigate("/")}>
                    Restaurantes
                </BackButton>
            ) : (
                <div />
            )}

            <LogoContainer>
                <Efood />
                <Title>
                    Viva experiências gastronômicas no conforto da sua casa
                </Title>
            </LogoContainer>

            {isDetailsPage ? (
                <CartText>0 produto(s) no carrinho</CartText>
            ) : (
                <div />
            )}
        </HeaderContainer>
    );
};

export default Header;
