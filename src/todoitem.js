import React from 'react';
import axios from './axios';






export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.markCompleted = this.markCompleted.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    markCompleted(event) {
        this.props.onItemCompleted(this.props.id);
    }
    deleteItem(event) {
        console.log("GET ID IN DELETE: ", this.props.text);
        this.props.onDeleteItem(this.props.id);
        axios.post('/deleteApp', this.props).then(resp => {
            console.log("axios resp in delete apps: ", resp);

        });
    }
    // Highlight newly added item for several seconds.
    componentDidMount() {
        if (this._listItem) {
            // 1. Add highlight class.
            this._listItem.classList.add("highlight");

            // 2. Set timeout.
            setTimeout((listItem) => {
                // 3. Remove highlight class.
                listItem.classList.remove("highlight");
            }, 500, this._listItem);
        }
    }
    render() {
        var itemClass = "form-check todoitem " + (this.props.completed ? "done" : "undone");
        return (
            <div>
                <center>
                    <li className={itemClass} ref={li => this._listItem = li }>
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"  onChange={this.deleteItem}/> {this.props.text}
                        </label>
                    </li>
                </center>
            </div>
        );
    }
}

//                 <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteItem}>x</button>