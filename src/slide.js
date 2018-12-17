import React from 'react';
import Todo from './todo';
import HomeTodo from './hometodo';

export default class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoVisible: false,
            homeTodoVisible: false
        };

        this.showTodo = this.showTodo.bind(this);
        this.showHomeTodo = this.showHomeTodo.bind(this);
        this.hideHomeTodo = this.hideHomeTodo.bind(this);

    }

    showTodo() {
        this.setState({
            todoVisible: true
        });
    }

    showHomeTodo() {
        this.setState({
            homeTodoVisible: true
        });
    }

    hideHomeTodo() {
        this.setState({
            homeTodoVisible: false
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
                <div onClick={this.showHomeTodo} className='tab'>
                    <h2>Household</h2>
                </div>


                <div>
                    {this.state.todoVisible && <Todo/>}

                </div>

                {this.state.homeTodoVisible && <HomeTodo/>}


            </div>
        );
    }
}
