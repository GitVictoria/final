import React from 'react';
import TodoList from './todolist';
import axios from './axios';




export default class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            text: "",
            tasks:  ""
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.markItemCompleted = this.markItemCompleted.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }


    componentDidMount() {
        axios.get('/getApps').then(resp => {
            console.log("resp in axios get list: ", resp.data);
            this.setState({
                tasks: resp.data
            });
        });
    }



    handleTextChange(event) {
        this.setState({
            text: event.target.value
        });
    }
    handleAddItem(event) {
        event.preventDefault();



        var newItem = {
            id: Date.now(),
            text: this.state.text,
            done: false
        };

        this.setState((prevState) => ({
            items: prevState.items.concat(newItem),
            text: ""
        }));

        axios.post('/addApp', this.state).then(resp => {
            console.log("axios resp in apps: ", resp);
        });
    }
    markItemCompleted(itemId) {

        var updatedItems = this.state.items.map(item => {
            if (itemId === item.id)
                item.done = !item.done;

            return item;


        });

        // State Updates are Merged
        this.setState({
            items: [].concat(updatedItems)
        });
    }
    handleDeleteItem(itemId) {
        var updatedItems = this.state.items.filter(item => {
            return item.id !== itemId;
        });

        this.setState({
            items: [].concat(updatedItems)
        });
    }
    render() {
        return (
            <div className='todo-container'>
                <center>
                    <h3 className="todo-list-name">APPOINTMENTS LIST</h3>
                    <form className="row">
                        <div className='input-container'>
                            <div className="col-md-3">
                                <input name='task' type="text" className="form-control" onChange={this.handleTextChange} value={this.state.text} />
                            </div>
                            <div className="col-md-3">
                                <button className="add-task-button" onClick={this.handleAddItem} disabled={!this.state.text}>{"Add #" + (this.state.items.length + 1)}</button>
                            </div>
                        </div>
                    </form>
                    <div className="row">
                        <div className="col-md-3">
                            <TodoList items={this.state.items} onItemCompleted={this.markItemCompleted} onDeleteItem={this.handleDeleteItem} />
                        </div>
                    </div>
                    <div>
                        {this.state.tasks && this.state.tasks.map(task => {
                            return (<div key={task.id}>

                                {task.task}
                            </div>);
                        })}

                    </div>
                </center>
            </div>
        );
    }
}
