import React from 'react';
import './Events.css';

const Events = () => {
    const eventsList = [
        {
            date: '2023-11-01',
            title: 'Live in Concert - Mumbai',
            venue: 'Mumbai Arena',
            ticketsLink: '#'
        },
        {
            date: '2023-11-15',
            title: 'Music Festival - Delhi',
            venue: 'Delhi Grounds',
            ticketsLink: '#'
        },
        {
            date: '2023-12-05',
            title: 'Charity Show - Bangalore',
            venue: 'Bangalore Auditorium',
            ticketsLink: '#'
        }
    ];

    return (
        <div className="events-container">
            <h2>Upcoming Events</h2>
            <div className="events-list">
                {eventsList.map((event, index) => (
                    <div key={index} className="event-item">
                        <div className="event-date">{event.date}</div>
                        <div className="event-details">
                            <h3 className="event-title">{event.title}</h3>
                            <p className="event-venue">{event.venue}</p>
                            <a href={event.ticketsLink} className="tickets-button">Get Tickets</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;