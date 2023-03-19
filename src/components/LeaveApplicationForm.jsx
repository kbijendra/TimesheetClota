import React, { useState } from 'react';

function LeaveApplicationForm() {
  const [employeeCode, setEmployeeCode] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [dateOfJoining, setDateOfJoining] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [numberOfDays, setNumberOfDays] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    console.log({
      employeeCode,
      dateOfBirth,
      dateOfJoining,
      employeeName,
      numberOfDays,
      reason,
    });
    // clear form after submission
    setEmployeeCode('');
    setDateOfBirth('');
    setDateOfJoining('');
    setEmployeeName('');
    setNumberOfDays('');
    setReason('');
  };

  return (
    <div>
      <h1>Leave Application Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="employeeCode">Employee Code:</label>
        <input
          type="text"
          id="employeeCode"
          name="employeeCode"
          value={employeeCode}
          onChange={(e) => setEmployeeCode(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="dateOfJoining">Date of Joining:</label>
        <input
          type="date"
          id="dateOfJoining"
          name="dateOfJoining"
          value={dateOfJoining}
          onChange={(e) => setDateOfJoining(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="employeeName">Employee Name:</label>
        <input
          type="text"
          id="employeeName"
          name="employeeName"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="numberOfDays">Number of Days:</label>
        <input
          type="number"
          id="numberOfDays"
          name="numberOfDays"
          value={numberOfDays}
          onChange={(e) => setNumberOfDays(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="reason">Reason:</label><br />
        <textarea
          id="reason"
          name="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          rows="5"
          cols="30"
          required
        ></textarea><br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default LeaveApplicationForm;
