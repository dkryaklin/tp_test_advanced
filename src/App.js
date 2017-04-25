import React, { Component } from 'react';

import styled from 'styled-components';
import media from './media';

import calendar from './calendar.svg';
import './App.css';


const Widget = styled.div`
    padding: 0 20px 20px;
    color: #fff;
    background-color: #4A90E2;
    font-family: 'Open Sans', sans-serif;
    max-width: 1024px;
    min-width: 270px;
    overflow: hidden;
    box-sizing: border-box;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    ${media.w440`
        display: flex;
        flex-direction: column;
    `}
`;

const HeaderMessage = styled.div`
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

const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-top: 10px;
    ${media.w768`flex-wrap: wrap;`}
    ${media.w768`padding: 0;`}
    ${media.w370`margin-top: 5px;`}
`;

const LongMessage = styled.div`
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

const ButtonSearch = styled.button`
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

const DatePicker = styled.div`
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

const DateInput = styled.input`
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

const IconWrapper = styled.div`
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

class App extends Component {
  render() {
    return (
      <Widget>
        <Header>
            <HeaderMessage>Where does it come from?</HeaderMessage>
            <HeaderMessage last>Why do we use it?</HeaderMessage>
        </Header>

        <Content>
            <LongMessage><div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div></LongMessage>

            <DatePicker departure>
                <DateInput size="1" type="text" placeholder="Depart date" />
                <IconWrapper><img src={calendar} alt="" /></IconWrapper>
            </DatePicker>

            <DatePicker arrival>
                <DateInput size="1" type="text" placeholder="Return date" />
                <IconWrapper><img src={calendar} alt="" /></IconWrapper>
            </DatePicker>

            <ButtonSearch>search</ButtonSearch>
        </Content>
      </Widget>
    );
  }
}

export default App;
