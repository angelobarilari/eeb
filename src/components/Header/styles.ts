import styled from "styled-components";

interface HeaderProps {
    isDetailsPage: boolean;
}

export const HeaderContainer = styled.header<HeaderProps>`
    background: #ffebd9;
    padding: 32px;
    display: flex;
    align-items: center;
    justify-content: ${(props) =>
        props.isDetailsPage ? "space-between" : "center"};
    width: 100%;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.h1`
    font-size: 24px;
    color: #e66767;
`;

export const CartText = styled.span`
    font-size: 16px;
    color: #e66767;
    font-weight: 900;

`;

export const BackButton = styled.button`
    background: none;
    border: none;
    font-size: 16px;
    color: #e66767;
    cursor: pointer;
    padding: 0;
    font-weight: 900;
`;
