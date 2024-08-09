'use client';
import React from 'react';

const ContactMap: React.FC = () => {
    return (
        <div className="relative w-full flex flex-col items-center">
               {/* Title Section */}
                <div className="relative bg-mainColor py-4 md:py-6 sm:py-4 max-w-screen-xl mx-auto px-4 md:text-center md:px-8 z-10">
                <p className="text-white text-xl font-bold sm:text-2xl">
                    Location
                </p>
            </div>

            {/* Background Gradient */}
            <div
                className="absolute top-0 left-0 w-full h-full -z-10"
                style={{
                    background: "linear-gradient(268.24deg, rgba(128, 0, 128, 0.76) 30%, rgba(186, 85, 211, 0.545528) 80%, rgba(75, 0, 130, 0) 115%)",
                
                }}
            ></div>

            {/* Map Section */}
            <div className="relative w-full h-[500px] sm:h-[600px] md:h-[800px] z-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.3251857036093!2d122.56665157377398!3d10.70938196042939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aee51245524329%3A0xcba580e3bd5dbf44!2sTapales%20Veterinary%20Clinic!5e0!3m2!1sen!2sph!4v1723180546527!5m2!1sen!2sph"
                    className="absolute top-0 left-0 w-full h-full"
                    allowFullScreen
                    loading="lazy"
                    style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactMap;
