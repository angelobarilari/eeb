import Efood from "../../assets/svg/efood";
import Facebook from "../../assets/svg/facebook";
import Instagram from "../../assets/svg/instagram";
import Twitter from "../../assets/svg/twitter";
import { FooterContainer, SocialsContainer, Text } from "./styles";

const Footer = () => {
    return (
        <FooterContainer>
            <Efood />

            <SocialsContainer>
                <Instagram />
                <Facebook />
                <Twitter />
            </SocialsContainer>

            <Text>
                A efood é uma plataforma para divulgação de estabelecimentos, a
                responsabilidade pela entrega, qualidade dos produtos é toda do
                estabelecimento contratado.
            </Text>
        </FooterContainer>
    );
};

export default Footer;
