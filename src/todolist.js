import React from 'react';
import TodoItem from './todoitem';
import axios from './axios';




export default class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }




    render() {
        return (
            <ul className="todolist">
                {this.props.items && this.props.items.map(item => (
                    <TodoItem key={item.id} id={item.id} text={item.task || item.text} completed={item.done} onItemCompleted={this.props.onItemCompleted} onDeleteItem={this.props.onDeleteItem} />
                ))}
            </ul>
        );
    }
}
