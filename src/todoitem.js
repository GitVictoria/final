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
        var itemClass = "form-check-input " + (this.props.completed ? "done" : "undone");
        return (
            <div>

                <div className={itemClass} ref={li => this._listItem = li }>
                    <label htmlFor='form-check-input'className="form-check-label">
                        <input type="checkbox" id="form-check-input"  onChange={this.deleteItem}/> {this.props.text}
                    </label>
                </div>

            </div>
        );
    }
}

//                 <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteItem}>x</button>
