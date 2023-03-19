// import {useState} from 'react';
// import Calendar from 'react-calendar';



import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function LeaveCalendar() {
  const [date, setDate] = useState(new Date());

  function onDateChange(newDate) {
    setDate(newDate);
  }

  return (
    <div className="calendar">
      <Calendar value={date} onChange={onDateChange} />
    </div>
  );
}

   
   export default LeaveCalendar;