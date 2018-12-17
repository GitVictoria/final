import React from 'react';
import axios from './axios';


export default class Ideas extends React.Component {
    constructor() {
        super();
        this.state = {};


        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        console.log("Idea bank did mount");
    }

    handleChange(e) {
        console.log("handlechange: ", [e.target.name ], ':',  e.target.value);
        this.setState({
            [e.target.name ]: e.target.value
        });

    }

    render(){
        return(
            <div className='idea-bank-container'>
                <form onSubmit={this.handleSubmit}>
                    <h3>Jot those ideas down...</h3>

                    <textarea name='idea' rows={10} type='text' placeholder='Idea'  className="idea-input" onChange={this.handleChange}/>
                    <button className="submit-button" onClick={this.handleSubmit}>Submit</button>
                </form>

                <h1>IDEAS BANK</h1>
            </div>
        );
    }
}
