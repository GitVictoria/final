import React from 'react';
import HomeItem from './homeitem';
import axios from './axios';




export default class HomeList extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {
        console.log("HOMElist did mount");
    }


    render() {
        return (
            <ul className="todolist">
                {this.props.items && this.props.items.map(item => (
                    <HomeItem key={item.id} id={item.id} text={item.task || item.text} completed={item.done} onItemCompleted={this.props.onItemCompleted} onDeleteItem={this.props.onDeleteItem} />
                ))}
            </ul>
        );
    }
}
