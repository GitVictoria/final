import React from 'react';
import Todo from './todo';

export default class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoVisible: false
        };

        this.showTodo = this.showTodo.bind(this);
    }

    showTodo() {
        this.setState({
            todoVisible: true
        });
    }


    render() {
        return(
            <div className='slide'>
                <div className='tab'>
                    <h2>Accomplish Today</h2>
                </div>
                <div onClick={this.showTodo} className='tab'>
                    <h2>Appointments</h2>
                </div>
                <div className='tab'>
                    <h2>Emails</h2>
                </div>
                <div className='tab'>
                    <h2>Household</h2>
                </div>


                <div className='todo-container'>
                    {this.state.todoVisible && <Todo/>}
                </div>
            </div>
        );
    }
}
