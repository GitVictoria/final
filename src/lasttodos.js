import React from 'react';
import axios from './axios';


export default class PreviousTodo extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        axios.get('/getApps').then(resp => {
            console.log("resp in axios get list: ", resp.data);
            this.setState({
                tasks: resp.data
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.tasks && this.state.tasks.map(task => {
                    return (<div key={task.id}>

                        {task.task}
                    </div>);
                })}

            </div>
        );
    }
}
