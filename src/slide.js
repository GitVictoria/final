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
        this.hideTodo = this.hideTodo.bind(this);
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

    hideTodo() {
        this.setState({
            todoVisible: false
        });
    }


    render() {
        return(
            <div className='slide'>
                <h1 onClick={this.props.hideSlide}>X</h1>

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
                    {this.state.todoVisible && <Todo hideTodo={this.hideTodo}/>}

                </div>

                {this.state.homeTodoVisible && <HomeTodo hideHomeTodo={this.hideHomeTodo}/>}


            </div>
        );
    }
}
