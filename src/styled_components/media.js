import { css } from 'styled-components';

const sizes = {
    w970: 970,
    w768: 768,
    w570: 570,
    w500: 500,
    w440: 440,
    w370: 370
};

const media = Object.keys(sizes).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
        @media (max-width: ${sizes[label]}px) {
        ${css(...args)}
        }
    `;

    return accumulator;
}, {});

export default media;