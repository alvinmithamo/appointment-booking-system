import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

const testimonials = [
    {
        id: 1,
        quote: "BOOKRAHISI transformed our appointment scheduling with their innovative platform. Highly recommended!",
        author: "Jane Doe, CEO at CompanyX"
    },
    {
        id: 2,
        quote: "The user experience is top-notch. We have seen a significant improvement in managing our bookings.",
        author: "John Smith, Founder of StartupY"
    },
    {
        id: 3,
        quote: "A game-changer for our business. The platform is easy to use and very effective.",
        author: "Alice Johnson, Manager at BusinessZ"
    }
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 2000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel">
            <div className="carousel-inner">
                {testimonials.map((testimonial, index) => (
                    <div
                        className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                        key={testimonial.id}
                    >
                        <p className="carousel-quote">"{testimonial.quote}"</p>
                        <p className="carousel-author">- {testimonial.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
