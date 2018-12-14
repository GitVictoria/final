import React from 'react';
import axios from './axios';


export default class Registration extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            error: ''
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post('/register', this.state).then(resp => {
            console.log(resp);

            if (resp.data.showErr == true) {

                this.setState({
                    error: {
                        error: "something went wrong, please try again!"
                    }
                });
                return;
            }
            location.replace('/');

        });
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input onChange = {this.handleChange} name="first" type="text" placeholder="First Name" />
                    <input onChange = {this.handleChange} name="last" type="text" placeholder="Last Name" />
                    <input onChange = {this.handleChange} name="age" type="text" placeholder="Age" />
                    <input onChange = {this.handleChange} name="email" type="text" placeholder="Email" />
                    <input onChange = {this.handleChange} name="dob" type="date" placeholder="Date of Birth" />
                    <input onChange = {this.handleChange} name="city" type="text" placeholder="City" />
                    <input onChange = {this.handleChange} name="country" type="text" placeholder="Country" />
                    <input onChange = {this.handleChange} name="password" type="password" placeholder="Password" />
                    <div className="register-button"><button className="register-button">Register</button></div>
                </form>
            </div>

        );
    }

}
