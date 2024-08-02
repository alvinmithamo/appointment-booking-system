import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <main>
        <section className="hero">
          <h1>Welcome to Our Appointment Booking System</h1>
          <p>Effortlessly schedule appointments with doctors, psychologists, and other consultants.</p>
          <a href="/signup" className="cta-button">Get Started</a>
        </section>
        <h2 className='heading'>Features</h2>
        <section className="features-container">
          <div className="feature-box">
            <h3>Easy Scheduling</h3>
            <p>Book and manage your appointments with just a few clicks.</p>
          </div>
          <div className="feature-box">
            <h3>Calendar Sync</h3>
            <p>Sync your appointments with Google and Outlook calendars.</p>
          </div>
          <div className="feature-box">
            <h3>Recurring Appointments</h3>
            <p>Set up recurring appointments effortlessly.</p>
          </div>
        </section>
      </main>

      <section className="about">
                <div className="about-content">
                    <h2>About Us</h2>
                    <p>
                        At BOOKRAHISI, our mission is to provide a seamless and efficient booking system for individuals and businesses alike. We understand the importance of managing appointments effectively and strive to offer a solution that simplifies the process.
                    </p>
                    <p>
                        Our core values include reliability, innovation, and customer-centricity. We continuously improve our platform to meet the evolving needs of our users. What sets us apart is our commitment to delivering a user-friendly experience backed by robust technology.
                    </p>
                    <p>
                        Whether you're a small business or a large enterprise, BOOKRAHISI offers flexible solutions tailored to your needs. Join us and experience the ease of managing your appointments with our state-of-the-art platform.
                    </p>
                </div>
            </section>

            <section className="testimonials">
                <h2 className='heading'>What Our Users Say</h2>
                <Carousel />
                {/* Add more testimonials as needed */}
            </section>

      {/* <footer>
        <p>&copy; 2024 BOOKRAHISI. All rights reserved.</p>
      </footer> */}
    </div>
  )
}

export default Home