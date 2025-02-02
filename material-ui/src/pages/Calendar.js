import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/Calender.css"; // Custom styling
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";

// Localization settings for Date-Fns
const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  // Add event to calendar
  const handleAddEvent = () => {
    // Check if all fields are filled
    if (newEvent.title && newEvent.start && newEvent.end) {
      // Convert the start and end dates to Date objects
      const event = {
        ...newEvent,
        start: new Date(newEvent.start),
        end: new Date(newEvent.end),
      };
      setEvents([...events, event]);
      setNewEvent({ title: "", start: "", end: "" }); // Reset the input fields
    } else {
      console.log("Please fill in all fields.");
    }
  };

  return (
    <div>
      <Header />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h2>Event Scheduler</h2>
          
          {/* Event Input Form */}
          <Box display="flex" gap={2} alignItems="center" mb={3}>
            <TextField
              label="Event Title"
              variant="outlined"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              size="small"
            />
            <TextField
              type="datetime-local"
              variant="outlined"
              value={newEvent.start}
              onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
              size="small"
            />
            <TextField
              type="datetime-local"
              variant="outlined"
              value={newEvent.end}
              onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
              size="small"
            />
            <Button variant="contained" color="primary" onClick={handleAddEvent}>
              Add Event
            </Button>
          </Box>

          {/* Event Calendar */}
          <div className="calendar-container">
            <BigCalendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
              defaultView="month"
            />
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Calendar;
