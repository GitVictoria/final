import React from 'react';
import axios from './axios';
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from './profile';
import Todo from './todo';
import IdeaBank from './ideabank';
import Calendar from './calendar';
import Speech from './speech';



export default class App extends React.Component {
    constructor () {
        super ();

        this.state = {

        };
    }

    componentDidMount() {
        axios.get('/user').then(({ data }) => {
            this.setState(data.rows[0]);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Route
                            exact path = '/profile'
                            component = {Profile}/>



                        <Route
                            exact path = '/idea-bank'
                            component = {IdeaBank}/>

                        <Route
                            exact path = '/speech'
                            component = {Speech}/>

                    </div>

                </BrowserRouter>
            </div>
        );
    }
}

//
// <Route
//     exact path = '/todo'
//     component = {Todo}/>
