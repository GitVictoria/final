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
                <div className='iframe'>
                    <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=almazovaite%40gmail.com&amp;color=%23865A5A&amp;ctz=Europe%2FBerlin" width="1000" height="650" frameBorder="0" scrolling="no"></iframe>                </div>
            </div>
        );
    }
}
