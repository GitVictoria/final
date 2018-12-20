import React from 'react';
import axios from './axios';






export default class HomeItem extends React.Component {
    constructor(props) {
        super(props);
        this.markCompleted = this.markCompleted.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    markCompleted(event) {
        this.props.onItemCompleted(this.props.id);
    }
    deleteItem(event) {
        console.log("GET HOMEITEM: ", this.props.text);
        this.props.onDeleteItem(this.props.id);
        axios.post('/deleteHome', this.props).then(resp => {
            console.log("axios resp in delete HOME: ", resp);

        });
    }
    // Highlight newly added item for several seconds.
    componentDidMount() {
        console.log("HOMEitem did mount");
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
                    <div className={itemClass} ref={li => this._listItem = li }>
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"  onChange={this.deleteItem}/> {this.props.text}
                        </label>
                    </div>
                </center>
            </div>
        );
    }
}

//                 <button type="button" className="btn btn-danger btn-sm" onClick={this.deleteItem}>x</button>
