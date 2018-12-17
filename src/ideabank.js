import React from 'react';
import axios from './axios';

export default class IdeaBank extends React.Component {
    constructor() {
        super();
        this.state = {
            ideas: ''
        };
    }

    componentDidMount() {
        console.log("Idea bank just mounted ");
        axios.get('/getIdeas').then(resp => {
            this.setState({
                ideas: resp.data
            });
            console.log(resp.data);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return(
            <div className='idea-bank-container'>
                {this.state.ideas.map(ideas =>{
                    var url;
                    if (ideas.pic) {
                        url = ideas.pic;
                    } else {
                        url = '/Hanger.jpg';
                    }

                    return (
                        <div key= {ideas.id}>
                            <img className="idea-pic" src={url} alt="online user"/>
                            {ideas.title}
                            {ideas.idea}
                        </div>
                    );

                })}
            </div>
        );
    }
}
