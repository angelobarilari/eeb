import { styled } from "styled-components";

export const Card = styled.div`
    width: 48%;
    background-color: #e66767;
    border-radius: 8px;
    padding: 12px;
    margin: 1%;
    float: left;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
`;

export const Image = styled.img`
    width: 100%;
    border-radius: 8px;
`;

export const Title = styled.h3`
    margin: 8px 0;
    display: flex;
    justify-content: space-between;
    color: #fff;
`;

export const Description = styled.p`
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    margin-bottom: 1rem;
`;

export const AddCartButton = styled.button`
    background: #ffebd9;
    color: #e66767;
    font-size: 16px;
    font-weight: 900;
    line-height: 100%;
`;
