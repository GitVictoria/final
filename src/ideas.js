import React from 'react';
import axios from './axios';
import { Link } from 'react-router-dom';


export default class Ideas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            idea: '',
            url: '',
            file: ''

        };


        this.handleChange = this.handleChange.bind(this);
        this.showUploader = this.showUploader.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }


    clearInput() {
        console.log("clear input is running");
        // this.setState({
        //     title: null,
        //     idea: null,
        //     url: null,
        //     file: null
        // });
    }


    handleSubmit(e) {
        e.preventDefault();
        console.log("handleSubmit of idea is happening !!! :", this.state.title, this.state.idea, this.state.url, this.state.file);
        console.log("this.state.title: ", this.state.title);

        var formData = new FormData();

        formData.append("file", this.state.file); // takes two arguments 1. key 2. value





        axios.post('/insertidea', this.state)
            .then(resp => {
                console.log("resp in axios post idea: ", resp);
            }).catch(err => {
                console.log(err);
            });
    }

    handleChange(e) {
        console.log("handlechange: ", [e.target.name ], ':',  e.target.value);
        this.setState({
            [e.target.name ]: e.target.value
        });

    }

    showUploader(e) {
        e.preventDefault();
        this.setState({
            uploaderVisible: true
        });
    }



    render(){
        return(
            <div className='idea-tab-container'>
                <div className='idea-bank-container'>
                    <form onSubmit={this.handleSubmit}>
                        <h3>Jot those ideas down...</h3>
                        <textarea name='title' rows={1} type='text' placeholder='title' className='title-input' onChange={this.handleChange}/>
                        <textarea name='idea' rows={10} type='text' placeholder='Idea'  className="idea-input" onChange={this.handleChange}/>
                        <textarea name='url' rows={1} type='text' placeholder='URL to inspo' className='url-input' onChange={this.handleChange}/>
                        <div>
                            <input name = 'file' onChange={ this.handleChange } type = "file" accept = "image/*"/>
                        </div>
                        <button className="submit-button" onClick={this.handleSubmit, this.clearInput}>Submit</button>
                    </form>
                </div>
                <div className='idea-bank'>
                    <button><Link className='link' to = '/idea-bank'>Review previous ideas</Link></button>
                </div>
            </div>
        );
    }
}

//IMAGE UPLOAD FEATURE



//            image: ''
