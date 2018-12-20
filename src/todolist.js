import React from 'react';
import TodoItem from './todoitem';
import axios from './axios';
import Moment from 'react-moment';




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

                    <div key={item.id}>
                        <div className='item-date'>
                            <TodoItem id={item.id} text={item.task || item.text} completed={item.done} onItemCompleted={this.props.onItemCompleted} onDeleteItem={this.props.onDeleteItem} />
                            <Moment className='moment-todolist'fromNow>{item.date}</Moment>
                        </div>
                    </div>

                ))}
            </ul>
        );
    }
}
