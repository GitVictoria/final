import React from 'react';
import axios from './axios';
import { Link } from 'react-router-dom';
import Slide from './slide';
import Todo from './todo';
import Ideas from './ideas';
import Calendar from './calendar';



export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideVisible: false,
            ideaBankVisible: false,
            calendarVisible: false,
            frontVisible: true
            // todoVisible: false

        };

        this.showSlide = this.showSlide.bind(this);
        this.hideSlide = this.hideSlide.bind(this);
        this.showIdeas = this.showIdeas.bind(this);
        this.hideIdeas = this.hideIdeas.bind(this);
        this.showCalendar = this.showCalendar.bind(this);
        this.hideCalendar = this.hideCalendar.bind(this);
        this.hideFront = this.hideFront.bind(this);
    }




    /////// MAYBE DELETE
    hideFront() {
        this.setState({
            frontVisible: false
        });
    }

    showSlide() {
        this.setState({
            slideVisible: true,
            frontVisible: false
        });
    }

    hideSlide() {
        this.setState({
            slideVisible: false,
            frontVisible: true
        });
    }

    showIdeas() {
        this.setState({
            ideaBankVisible: true,
            frontVisible: false
        });
    }

    hideIdeas() {
        this.setState({
            ideaBankVisible: false,
            frontVisible: true
        });
    }

    showCalendar() {
        this.setState({
            calendarVisible: true,
            frontVisible: false
        });
    }

    hideCalendar() {
        this.setState({
            calendarVisible: false,
            frontVisible: true
        });
    }



    render() {
        return(
            <div className='profile'>
                <div className = 'nav-container'>

                    <div className='nav-tab'>
                        <button onClick={this.showIdeas} className="redirect-page">BANK    SOME    IDEAS</button>
                    </div>
                    <div className='separator-container'>
                        <h1 className='separator'>||</h1>
                    </div>
                    <div className='nav-tab'>
                        <button onClick={this.showCalendar} className="redirect-page">CALENDAR</button>
                    </div>
                    <div className='separator-container'>
                        <h1 className='separator'>||</h1>
                    </div>
                    <div className='nav-tab'>
                        <button onClick={this.showSlide}
                            className="redirect-page">PLAN YOUR DAY</button>
                    </div>
                    <div className='separator-container'>
                        <h1 className='separator'>||</h1>
                    </div>

                    <div className='nav-tab'>
                        <button  className="redirect-page"><Link className='link' to = '/#/'>LOG-OUT</Link></button>
                    </div>
                </div>
                <div> {this.state.frontVisible &&
                <div className='front-div'>
                    <h1 className='front-text'>The only thing</h1>
                    <h1 className='front-text-2'>      More precious than your time,</h1>
                    <h1 className='front-text-3'>            Is who you spend it with.</h1>

                </div>}
                </div>
                <div>
                    {this.state.slideVisible && <Slide hideSlide={this.hideSlide}/>}
                </div>
                <div>
                    {this.state.ideaBankVisible && <Ideas hideIdeas={this.hideIdeas}/>}
                </div>
                <div>
                    {this.state.calendarVisible && <Calendar hideCalendar={this.hideCalendar}/>}
                </div>


            </div>
        );
    }
}
//
// <div>
//     <img className='render'src='blackwhiteleaves.jpg'/>
// </div>
