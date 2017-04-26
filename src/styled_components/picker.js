import styled from 'styled-components';
import media from './media';

export const DatePicker = styled.div`
    width: 200px;
    height: 40px;
    margin-right: 20px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 2px;
    position: relative;
    ${media.w970`flex-shrink: 1;`}
    ${media.w768`
        min-width: 100px;
        flex-basis: 100px;
        max-width: 220px;
        flex-shrink: 1;
        flex-grow: 1;
    `}
    ${media.w500`
        margin: 0;
        margin-right: ${props => props.departure ? '20px' : '0'};
    `}
    ${media.w370`
        flex-basis: 100%;
        max-width: 100%;
        order: 1;
        margin: 0;
        margin-top: ${props => props.departure ? '0' : '15px'};
    `}
`;

export const DateInput = styled.input`
    height: 40px;
    border-radius: 2px;
    line-height: 40px;
    width: 100%;
    flex-basis: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    border: none;
    padding: 0 0 0 10px;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.8rem;
    letter-spacing: 0.04rem;
    outline: none;

    &::-ms-clear {
        display: none;
    }

    &::placeholder {
        color: #9B9B9B;
        font-family: 'Open Sans', sans-serif;
        font-size: 0.8rem;
        letter-spacing: 0.04rem;
    }
`;

export const IconWrapper = styled.div`
    border-radius: 2px;
    height: 40px;
    width: 44px;
    flex-basis: 44px;
    flex-shrink: 0;
    flex-grow: 0;
    cursor: pointer;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 15px;
        height: 17px;
    }
`;