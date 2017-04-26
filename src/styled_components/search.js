import styled from 'styled-components';
import media from './media';

export const ButtonSearch = styled.button`
    color: inherit;
    height: 40px;
    width: 240px;
    background-color: #F5A623;
    box-sizing: border-box;
    border: 0px solid;
    border-bottom: 2px solid #DC951F;
    border-radius: 2px;
    flex-shrink: 0;
    outline: none;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    ${media.w970`flex-shrink: 1;`}
    ${media.w768`
        max-width: 240px;
        min-width: 100px;
        margin-left: 8px;
        flex-shrink: 1;
        flex-grow: 1;
        flex-basis: 100px;
    `}
    ${media.w500`
        max-width: 100%;
        flex-basis: 100%;
        margin: 20px 0 0;
    `}
    ${media.w370`
        margin-top: 15px;
        order: 2;
    `}
`;