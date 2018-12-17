import React from 'react';


export default class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div className='calendar-container'>
                <iframe className='calendar-container' src="https://calendar.google.com/calendar/embed?src=almazovaite%40gmail.com&ctz=Europe%2FBerlin"></iframe>

            </div>
        );
    }
}
