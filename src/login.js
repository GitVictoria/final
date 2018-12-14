import React from 'react';
import axios from './axios';


export default class Login extends React.Component {
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
            [e.target.name]: e.target.value // field name: user input
        }, () => console.log("handleChange of login: ", this.state));
    }

    handleSubmit(e) {
        console.log("handleSubmit in running");
        e.preventDefault();
        axios.post('/login', this.state).then(resp => {

            console.log("Resp in axios login post req: ", resp);
            if (resp.data.showErr == true) {
                this.setState({
                    error: "something went wrong, please try again!"
                });

            } else {
                location.replace('/profile');
            }
        });
    }


    render () {
        return(
            <div>
                <center>
                    <h1>Please enter password to continue</h1>
                    <form onSubmit={this.handleSubmit}>

                        <div className="user-authentication">
                            <input onChange = {this.handleChange} type="text" name="first" placeholder="User Name"/>
                        </div>

                        <div className="user-authentication">
                            <input onChange = {this.handleChange} type="password" name="password" placeholder="Password"/>
                        </div>

                        <div className="user-authentication">
                            <button onClick={this.handleSubmit} name="button">Submit</button>
                        </div>

                    </form>
                </center>
            </div>
        );

    }
}
