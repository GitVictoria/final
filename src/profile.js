import React from 'react';
import axios from './axios';
import { Link } from 'react-router-dom';
import Slide from './slide';
import Todo from './todo';
import Ideas from './ideas';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideVisible: false,
            ideaBankVisible: false
            // todoVisible: false

        };

        this.showSlide = this.showSlide.bind(this);
        this.showIdeas = this.showIdeas.bind(this);
    }

    showSlide() {
        this.setState({
            slideVisible: true
        });
    }

    showIdeas() {
        this.setState({
            ideaBankVisible: true
        });
    }



    render() {
        return(
            <div>
                <div className = 'nav-container'>

                    <div className='nav-tab'>
                        <button onClick={this.showIdeas} className="redirect-page">BANK    SOME    IDEAS</button>
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
                        <button onClick={this.showSlide}
                            className="redirect-page">PLAN YOU DAY</button>
                    </div>
                </div>
                <div>
                    {this.state.slideVisible && <Slide/>}
                </div>
                <div>
                    {this.state.ideaBankVisible && <Ideas/>}
                </div>


            </div>
        );
    }
}
