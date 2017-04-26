import React, { Component } from 'react';

import { Widget, Header, Content } from './styled_components/common';
import { DatePicker, DateInput, IconWrapper } from './styled_components/picker';
import { HeaderMessage, LongMessage } from './styled_components/message';
import { ButtonSearch } from './styled_components/search';        

import calendar from './calendar.svg';

class App extends Component {
    render() {
        return (
            <Widget>
                <Header>
                        <HeaderMessage>Where does it come from?</HeaderMessage>
                        <HeaderMessage last>Why do we use it?</HeaderMessage>
                </Header>

                <Content>
                    <LongMessage>
                        <div>
                            It is a long established fact that a reader will be distracted by 
                            the readable content of a page when looking at its layout.
                        </div>
                    </LongMessage>

                    <DatePicker departure>
                        <DateInput size="1" type="text" placeholder="Depart date" />
                        <IconWrapper>
                            <img src={calendar} alt="" />
                        </IconWrapper>
                    </DatePicker>

                    <DatePicker arrival>
                        <DateInput size="1" type="text" placeholder="Return date" />
                        <IconWrapper>
                            <img src={calendar} alt="" />
                        </IconWrapper>
                    </DatePicker>

                    <ButtonSearch>search</ButtonSearch>
                </Content>
            </Widget>
        );
    }
}

export default App;
