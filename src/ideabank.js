import React from 'react';
import axios from './axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

export default class IdeaBank extends React.Component {
    constructor() {
        super();
        this.state = {
            ideas: []
        };
    }

    componentDidMount() {
        axios.get('/getIdeas').then(resp => {
            this.setState({
                ideas: resp.data
            });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        console.log("this.state.ideas: ", this.state);
        return(

            <div className='idea-container'>
                <center>
                    <h1>Have a look at your previous ideas</h1>
                </center>
                {this.state.ideas.map(ideas =>{
                    var url;
                    if (ideas.pic) {
                        url = ideas.pic;
                    } else {
                        url = '/idea.png';
                    }

                    return (

                        <div key= {ideas.id}>
                            <div className='idea-box'>
                                <div className='card'>
                                    <img className="idea-pic" src={url} alt="online user"/>
                                </div>
                                <div className='idea-description-box'>
                                    <center>
                                        <h1 className='idea-title'>{ideas.title}</h1>
                                    </center>
                                    <center>
                                    Description:
                                        <h3 className='idea-description'>{ideas.idea}</h3>
                                    </center>
                                    <center>
                                        <div className='link-to-inspo'>
                                            <a rel="noopener noreferrer" href={ideas.url} target="_blank">Link Here</a>
                                        </div>
                                    </center>
                                    <div>
                                        <center>
                                            <div className='created-at'>
                                            Created: <Moment fromNow>{ideas.date}</Moment>
                                            </div>
                                        </center>
                                    </div>
                                </div>
                            </div>

                        </div>

                    );

                })}
            </div>
        );
    }
}
// <Link to = {ideas.url}>Click here</Link>
