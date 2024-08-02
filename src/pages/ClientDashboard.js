import React from 'react';
import Calendar from '../components/CalendarComponent';
import AppointmentForm from '../components/AppointmentForm';

const ClientDashboard = () => {
  return (
    <div>
        <h1>Client Dashboard</h1>
        <Calendar />
        <AppointmentForm />
    </div>
  )
}

export default ClientDashboard