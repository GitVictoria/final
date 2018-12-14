import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';
import Registration from './registration';
import App from './app';


let component;

if (location.pathname == '/') {
    component = <Welcome/>; }
else if (location.pathname == '/registration') {
    component = <Registration/>; }
else {
    component = (
        <App />);
}




ReactDOM.render(
    component,
    document.querySelector('main')
);
