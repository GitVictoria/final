import React from 'react';
import axios from './axios';
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from './profile';
import Todo from './todo';



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
