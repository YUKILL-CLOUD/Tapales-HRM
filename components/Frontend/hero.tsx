import React from 'react';

export default function HeroSection() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-20 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex md:min-h-screen md:items-center md:justify-center">
        <div className="flex-none space-y-5 max-w-xl">
        
          <h1 className="text-4xl text-mainColor font-extrabold sm:text-5xl">
          Streamline Your Pet's Care
          </h1>
          <p>
          Effortlessly 
          <span className=' hover:text-mainHover mr-2 ml-2'>manage</span>
          your pet's appointments, health records, and more with our intuitive clinic management system. Stay organized, stay informed, and give your pet the care they deserve.
          </p>
          <div className="flex items-center gap-x-3 sm:text-sm">
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-mainColor duration-150 hover:bg-mainHover active:bg-gray-900 rounded-full md:inline-flex"
            >
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            
          </div>
        </div>
        <div className="flex-1 hidden md:block">
          {/* Replace with your image */}
          <img
            src="pngegg.png"
            className="max-w-xl"
            alt="Illustration"
          />
        </div>
      </div>
    </section>
  );
}
