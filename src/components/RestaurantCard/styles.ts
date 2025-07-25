import styled from "styled-components";

export const Card = styled.div`
    width: 48%;
    background-color: #fff;
    border: 1px solid #e66767;
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
    color: #e66767;
`;

export const Description = styled.p`
    font-size: 14px;
    color: #e66767;
    font-weight: 500;
    margin-bottom: 1rem;
`;

export const Rating = styled.span`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-weight: bold;
    color: #e66767;
`;

export const SaibaMais = styled.span`
    font-size: 12px;
    background-color: #e66767;
    color: #fff;
    padding: 4px 8px;
    border-radius: 4px;
    float: left;
    cursor: pointer;
`;
