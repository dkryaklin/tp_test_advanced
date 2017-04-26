import styled from 'styled-components';
import media from './media';

export const HeaderMessage = styled.div`
    font-size: 1.5rem;
    line-height: 2.2rem;
    letter-spacing: 0.02rem;
    padding-left: ${props => props.last ? '7px' : '0'};
    ${media.w570`
        font-size: 1.11rem;
        line-height: 2.8rem;
    `}
    ${media.w440`
        ${props => {
            if (props.last) {
                return `
                    padding: 0;
                    margin-top: -20px;
                `;
            }
        }};
    `}
`;

export const LongMessage = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 0.7rem;
    line-height: 0.9rem;
    letter-spacing: 0.005rem;
    padding-right: 20px;
    flex-basis: 100%;
    flex-shrink: 1;
    flex-grow: 1;
    flex-wrap: wrap;
    max-width: 100%;
    div {
      max-width: 100%;
    };
    ${media.w970`
        flex-basis: 240px;
        flex-shrink: 0;
        flex-grow: 0;
    `}
    ${media.w768`
        display: inline-flex;
        height: auto;
        flex-basis: 100%;
        padding: 0 0 16px;
    `}
    ${media.w570`padding: 0 0 15px;`}
    ${media.w370`
        padding: 15px 0 0;
        order: 3;
    `}
`;