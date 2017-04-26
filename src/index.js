import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.travelPayoutsWidgetInit = (props) => {
    document.querySelector('body').append(document.createElement('x-widget'));
};


(() => {
    const proto = Object.create(HTMLElement.prototype, {
        attachedCallback: {
            value: function() {
                const mountPoint = document.createElement('div');
                this.createShadowRoot().appendChild(mountPoint);

                ReactDOM.render(<App />, mountPoint);
            }
        }
    });

    document.registerElement('x-widget', {prototype: proto});
})()