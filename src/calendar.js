import React from 'react';


export default class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div className='calendar-container'>
                <h1 onClick={this.props.hideCalendar}>X</h1>

                <iframe className='calendar-container' src="https://calendar.google.com/calendar/embed?src=almazovaite%40gmail.com&ctz=Europe%2FBerlin"></iframe>

            </div>
        );
    }
}
