import React from 'react';
import axios from './axios';
import { Link } from 'react-router-dom';

export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return(
            <div className = 'nav-container'>

                <div className='nav-tab'>
                    <button className="redirect-page"><Link className='link' to = '/idea-bank'>BANK    SOME    IDEAS</Link></button>
                </div>
                <div className='separator-container'>
                    <h1 className='separator'>||</h1>
                </div>
                <div className='nav-tab'>
                    <button className="redirect-page"><Link className='link' to = '/chat'>FEATURE</Link></button>
                </div>
                <div className='separator-container'>
                    <h1 className='separator'>||</h1>
                </div>

                <div className='nav-tab'>
                    <button className="redirect-page"><Link className='link' to = '/online'>FEATURE</Link></button>
                </div>
                <div className='separator-container'>
                    <h1 className='separator'>||</h1>
                </div>
                <div className='nav-tab'>
                    <button className="redirect-page"><Link className='link' to = '/todo'>PLAN YOU DAY</Link></button>
                </div>

            </div>
        );
    }
}
