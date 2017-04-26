import React, { Component } from 'react';  

import calendar from './calendar.svg';

import mainCss from './css/widget_main.txt';
import mediaCss from './css/widget_media.txt';

class App extends Component {
    constructor(props) {
        super(props);
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
                        <div className="icon_wrapper">
                            <img src={calendar} alt="" />
                        </div>
                    </div>

                    <div className="date_picker">
                        <input className="date_input" size="1" type="text" placeholder="Return date" />
                        <div className="icon_wrapper">
                            <img src={calendar} alt="" />
                        </div>
                    </div>

                    <button className="button_search" style={{backgroundColor:this.props.buttonColor}}>search</button>
                </div>
            </div>
        );
    }
}

export default App;
