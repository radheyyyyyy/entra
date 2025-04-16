import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

function AdmissionCalendar() {
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [dailyEvents, setDailyEvents] = useState([]);

    useEffect(() => {
        // Fetch events from backend
        axios.get('http://localhost:5000/api/events')
            .then(response => setEvents(response.data))
            .catch(err => console.error(err));
    }, []);

    // When a date is selected, filter events for that day
    useEffect(() => {
        const filtered = events.filter(event => {
            const start = new Date(event.startDate);
            const end = new Date(event.endDate);
            return selectedDate >= start && selectedDate <= end;
        });
        setDailyEvents(filtered);
    }, [selectedDate, events]);

    // Customize calendar tile content if the date has events
    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const dayHasEvent = events.some(event => {
                const start = new Date(event.startDate);
                const end = new Date(event.endDate);
                return date >= start && date <= end;
            });
            return dayHasEvent ? (
                <div className="text-xs text-white bg-blue-600 rounded-full w-4 h-4 flex items-center justify-center mx-auto">
                    !
                </div>
            ) : null;
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Admission Calendar</h2>
            <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                tileContent={tileContent}
                className="shadow-lg rounded-lg overflow-hidden"
            />
            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">
                    Events on {selectedDate.toDateString()}
                </h3>
                {dailyEvents.length > 0 ? (
                    <ul>
                        {dailyEvents.map(event => (
                            <li key={event.id} className="mb-2">
                                <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    {event.title}
                                </a>
                                <p className="text-gray-600 text-sm">{event.description}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No events for this date.</p>
                )}
            </div>
        </div>
    );
}

export default AdmissionCalendar;