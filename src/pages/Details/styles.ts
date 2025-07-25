import { styled } from "styled-components";

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    max-height: 300px;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 16px;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;

export const TitleOverlay = styled.h1`
    position: absolute;
    bottom: 16px;
    left: 16px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 8px 12px;
    border-radius: 4px;
    margin: 0;
`;
