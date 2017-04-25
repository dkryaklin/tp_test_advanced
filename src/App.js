import React, { Component } from 'react';

import styled from 'styled-components';

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
`;

const HeaderMessage = styled.div`
    font-size: 1.5rem;
    line-height: 2.2rem;
    letter-spacing: 0.02rem;
    padding-left: ${props => props.last ? '7px' : '0'};
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-top: 10px;
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

            <DatePicker>
                <DateInput size="1" type="text" placeholder="Depart date" />
                <IconWrapper><img src={calendar} alt="" /></IconWrapper>
            </DatePicker>

            <DatePicker>
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
