import React, { Component } from 'react';  

import calendar from './images/calendar.svg';
import calendarRaw from './images/calendar._svg';

import mainCss from './css/widget_main._css';
import mediaCss from './css/widget_media._css';

import * as utils from './utils';

class App extends Component {
    constructor(props) {
        super(props);
    }
    getCanlendarIconUrl = () => {
        const backColor = this.props.backColor;

        if (backColor && utils.validateColor(backColor)) {
            const encodedIcon = window.btoa(calendarRaw.replace('fill="#4990E2"', `fill="${backColor}"`));
            return `url(data:image/svg+xml;base64,${encodedIcon})`;
        } else {
            return `url(${calendar})`;
        }
    }
    getSearchButtonStyle = () => {
        const buttonColor = this.props.buttonColor;

        if (buttonColor && utils.validateColor(buttonColor)) {
            return {
                backgroundColor: buttonColor,
                borderBottomColor: utils.shadeColor(buttonColor, -0.2)
            };
        } else {
            return {};
        }
    }
    render() {
        return (
            <div className="widget" style={{backgroundColor: this.props.backColor, textColor: this.props.textColor}}>
                <style>
                    {mainCss}
                </style>
                <style>
                    {mediaCss}
                </style>
                <div className="header">
                        <div className="header_message">Where does it come from?</div>
                        <div className="header_message">Why do we use it?</div>
                </div>

                <div className="content">
                    <div className="long_message">
                        <div>
                            It is a long established fact that a reader will be distracted by 
                            the readable content of a page when looking at its layout.
                        </div>
                    </div>

                    <div className="date_picker">
                        <input className="date_input" size="1" type="text" placeholder="Depart date" />
                        <div className="icon_wrapper" style={{backgroundImage: this.getCanlendarIconUrl()}}></div>
                    </div>

                    <div className="date_picker">
                        <input className="date_input" size="1" type="text" placeholder="Return date" />
                        <div className="icon_wrapper" style={{backgroundImage: this.getCanlendarIconUrl()}}></div>
                    </div>

                    <button className="button_search" style={this.getSearchButtonStyle()}>search</button>
                </div>
            </div>
        );
    }
}

export default App;
