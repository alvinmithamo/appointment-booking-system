import React, {useState} from 'react';


function AppointmentForm(){
    const [details, setDetails] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        recurring: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setDetails((prevDetails) => ({
            ...prevDetails,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <form onSubmit={handleSubmit}>
    <input type="text" name="name" value={details.name} onChange={handleChange} placeholder="Name" required />
    <input type="email" name="email" value={details.email} onChange={handleChange} placeholder="Email" required />
    <input type="date" name="date" value={details.date} onChange={handleChange} required />
    <input type="time" name="time" value={details.time} onChange={handleChange} required />
    <label>
      <input type="checkbox" name="recurring" checked={details.recurring} onChange={handleChange} />
      Recurring
    </label>
    <button type="submit">Book Appointment</button>
  </form>
  )
}

export default AppointmentForm