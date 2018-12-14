import React from 'react';
import axios from './axios';
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from './profile';
import Weather from './weather';



export default class App extends React.Component {
    constructor () {
        super ();

        this.state = {

        };
    }

    componentDidMount() {
        axios.get('/user').then(({ data }) => {
            this.setState(data.rows[0]);
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
                            exact path = '/weather'
                            component = {Weather}/>
                    </div>

                </BrowserRouter>
            </div>
        );
    }
}
