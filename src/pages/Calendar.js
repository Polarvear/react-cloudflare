import React, { useState } from 'react';
import './Calendar.css';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([
    { id: 1, date: '2025-10-15', title: 'Team Meeting', time: '10:00 AM', type: 'meeting' },
    { id: 2, date: '2025-10-20', title: 'Project Deadline', time: '5:00 PM', type: 'deadline' },
    { id: 3, date: '2025-10-25', title: 'Birthday Party', time: '7:00 PM', type: 'personal' },
    { id: 4, date: '2025-10-27', title: 'Code Review', time: '2:00 PM', type: 'meeting' },
    { id: 5, date: '2025-11-01', title: 'Conference', time: '9:00 AM', type: 'event' },
  ]);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', time: '', type: 'meeting' });

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getEventsForDate = (dateStr) => {
    return events.filter(event => event.date === dateStr);
  };

  const addEvent = () => {
    if (selectedDate && newEvent.title) {
      const event = {
        id: Date.now(),
        date: formatDate(selectedDate),
        title: newEvent.title,
        time: newEvent.time,
        type: newEvent.type
      };
      setEvents([...events, event]);
      setNewEvent({ title: '', time: '', type: 'meeting' });
      setShowAddEvent(false);
    }
  };

  const deleteEvent = (eventId) => {
    setEvents(events.filter(e => e.id !== eventId));
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dateStr = formatDate(date);
      const dayEvents = getEventsForDate(dateStr);
      const isToday = dateStr === formatDate(new Date());
      const isSelected = selectedDate && dateStr === formatDate(selectedDate);

      days.push(
        <div
          key={day}
          className={`calendar-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${dayEvents.length > 0 ? 'has-events' : ''}`}
          onClick={() => setSelectedDate(date)}
        >
          <span className="day-number">{day}</span>
          {dayEvents.length > 0 && (
            <div className="event-indicators">
              {dayEvents.slice(0, 3).map(event => (
                <div key={event.id} className={`event-dot ${event.type}`}></div>
              ))}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  const selectedDateEvents = selectedDate ? getEventsForDate(formatDate(selectedDate)) : [];

  return (
    <div className="calendar-page">
      <div className="calendar-header">
        <h1>📅 Calendar</h1>
        <p>Manage your schedule and events</p>
      </div>

      <div className="calendar-container">
        <div className="calendar-main">
          <div className="calendar-controls">
            <button onClick={previousMonth} className="nav-btn">◀</button>
            <h2>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
            <button onClick={nextMonth} className="nav-btn">▶</button>
          </div>

          <div className="calendar-weekdays">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>

          <div className="calendar-grid">
            {renderCalendar()}
          </div>

          <div className="calendar-legend">
            <div className="legend-item">
              <span className="legend-dot meeting"></span>
              <span>Meeting</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot deadline"></span>
              <span>Deadline</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot personal"></span>
              <span>Personal</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot event"></span>
              <span>Event</span>
            </div>
          </div>
        </div>

        <div className="events-sidebar">
          <h3>
            {selectedDate 
              ? `Events for ${monthNames[selectedDate.getMonth()]} ${selectedDate.getDate()}`
              : 'Select a date'}
          </h3>

          {selectedDate && (
            <button 
              className="add-event-btn"
              onClick={() => setShowAddEvent(!showAddEvent)}
            >
              + Add Event
            </button>
          )}

          {showAddEvent && (
            <div className="add-event-form">
              <input
                type="text"
                placeholder="Event title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
              <input
                type="time"
                value={newEvent.time}
                onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
              />
              <select
                value={newEvent.type}
                onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
              >
                <option value="meeting">Meeting</option>
                <option value="deadline">Deadline</option>
                <option value="personal">Personal</option>
                <option value="event">Event</option>
              </select>
              <div className="form-buttons">
                <button onClick={addEvent} className="save-btn">Save</button>
                <button onClick={() => setShowAddEvent(false)} className="cancel-btn">Cancel</button>
              </div>
            </div>
          )}

          <div className="events-list">
            {selectedDateEvents.length > 0 ? (
              selectedDateEvents.map(event => (
                <div key={event.id} className={`event-card ${event.type}`}>
                  <div className="event-header">
                    <span className="event-type-badge">{event.type}</span>
                    <button 
                      className="delete-event-btn"
                      onClick={() => deleteEvent(event.id)}
                    >
                      ✕
                    </button>
                  </div>
                  <h4>{event.title}</h4>
                  <p className="event-time">🕐 {event.time}</p>
                </div>
              ))
            ) : (
              selectedDate && <p className="no-events">No events scheduled</p>
            )}
          </div>

          <div className="upcoming-events">
            <h3>Upcoming Events</h3>
            {events
              .filter(e => new Date(e.date) >= new Date())
              .sort((a, b) => new Date(a.date) - new Date(b.date))
              .slice(0, 5)
              .map(event => (
                <div key={event.id} className="upcoming-event-item">
                  <span className={`event-indicator ${event.type}`}></span>
                  <div>
                    <strong>{event.title}</strong>
                    <p>{event.date} at {event.time}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
