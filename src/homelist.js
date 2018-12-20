import React from 'react';
import HomeItem from './homeitem';
import axios from './axios';
import Moment from 'react-moment';




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

            <div className="todolist">
                {this.props.items && this.props.items.map(item => (
                    <div key={item.id}>
                        <div className='item-date'>

                            <HomeItem  id={item.id} text={item.task || item.text} completed={item.done} onItemCompleted={this.props.onItemCompleted} onDeleteItem={this.props.onDeleteItem} />

                            <Moment fromNow>{item.date}</Moment>
                        </div>
                    </div>
                ))}
            </div>

        );
    }
}
