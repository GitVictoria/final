import React from 'react';
import axios from './axios';
import { Link } from 'react-router-dom';
import Speech from './speech';



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
        this.handleFile = this.handleFile.bind(this);
        this.setFinalTranscript = this.setFinalTranscript.bind(this);
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


    setFinalTranscript(finalTranscript){
        console.log("setFinalTranscript: ", finalTranscript);
        this.setState({
            idea: finalTranscript
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        var formData = new FormData();

        formData.append("file", this.state.file); // takes two arguments 1. key 2. value
        formData.append("title", this.state.title); // takes two arguments 1. key 2. value
        formData.append("idea", this.state.idea); // takes two arguments 1. key 2. value
        formData.append("url", this.state.url); // takes two arguments 1. key 2. value




        // console.log("This.state in isertidea: ", formData);
        axios.post('/insertidea', formData)
            .then(resp => {
                console.log("resp in axios post /insertidea: ", resp);
            }).then(
                this.setState({
                    title: '',
                    idea: '',
                    url: '',
                    file: ''
                })

            ).catch(err => {
                console.log(err);
            });
    }

    handleChange(e) {
        console.log("handlechange: ", [e.target.name ], ':',  e.target.value);
        this.setState({
            [e.target.name ]: e.target.value
        });

    }

    handleFile(e) {
        this.setState({
            [e.target.name ]: e.target.files[0]
        });

    }

    showUploader(e) {
        e.preventDefault();
        this.setState({
            uploaderVisible: true
        });
    }

    // finalTranscript(e) {
    //     console.log('finalTranscript: ', finalTranscript);
    //     this.setState({
    //         idea: e.target.value
    //     });
    // }



    render(){
        return(
            <div className='idea-tab-container'>
                <h1 className='the-x'onClick={this.props.hideIdeas}>X</h1>

                <div className='idea-bank-container'>
                    <form onSubmit={this.handleSubmit}>
                        <h3>Jot those ideas down...</h3>
                        <textarea name='title' rows={1} type='text' placeholder='title' className='title-input' onChange={this.handleChange}/>
                        <textarea  value={this.state.idea} name='idea' rows={10} type='text' placeholder='Idea'  className="idea-input" onChange={this.handleChange}/>
                        <textarea name='url' rows={1} type='text' placeholder='URL to inspo' className='url-input' onChange={this.handleChange}/>
                        <div>
                            <input className='file-input' name = 'file' onChange={ this.handleFile } type = "file" accept = "image/*" />
                        </div>

                        <div className='speech'>
                            <Speech setFinalTranscript={this.setFinalTranscript}/>
                        </div>
                        <button className="submit-button" onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
                <div className='idea-bank'>
                    <button className='link-button'><Link className='link' to = '/idea-bank'>Review previous ideas</Link></button>
                </div>
            </div>
        );
    }
}

//IMAGE UPLOAD FEATURE
//on server side make a rule for HTTP or HTTPs



//            image: ''
