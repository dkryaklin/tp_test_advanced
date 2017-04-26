import styled from 'styled-components';
import media from './media';

export const Widget = styled.div`
    padding: 0 20px 20px;
    color: #fff;
    background-color: #4A90E2;
    font-family: 'Open Sans', sans-serif;
    max-width: 1024px;
    min-width: 270px;
    overflow: hidden;
    box-sizing: border-box;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    ${media.w440`
        display: flex;
        flex-direction: column;
    `}
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-top: 10px;
    ${media.w768`flex-wrap: wrap;`}
    ${media.w768`padding: 0;`}
    ${media.w370`margin-top: 5px;`}
`;
