import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.travelPayoutsWidgetInit = (props) => {
    let newElem = document.createElement('x-travelpayoutswidget');

    for (let key in props) {
        if (key === 'id') {
            continue;
        }

        newElem.setAttribute(key, props[key]);
    }

    document.querySelector(`#${props.id}`).append(newElem);
};

(() => {
    const proto = Object.create(HTMLElement.prototype, {
        attachedCallback: {
            value: function() {
                const backColor = this.getAttribute('backColor');
                const textColor = this.getAttribute('textColor');
                const buttonColor = this.getAttribute('buttonColor');

                const props = {backColor, textColor, buttonColor};

                const mountPoint = document.createElement('div');
                this.createShadowRoot().appendChild(mountPoint);

                ReactDOM.render(<App {...props} />, mountPoint);
            }
        }
    });

    document.registerElement('x-travelpayoutswidget', {prototype: proto});
})()