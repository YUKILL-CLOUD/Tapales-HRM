'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [state, setState] = useState(false);
  const navRef = useRef(null);

  const navigation = [
    { title: 'Home', path: 'javascript:void(0)' },
    { title: 'About', path: 'javascript:void(0)' },
    { title: 'Contact', path: 'javascript:void(0)' },
    { title: 'Team', path: 'javascript:void(0)' },
    { title: 'Blog', path: 'javascript:void(0)' },
  ];

  useEffect(() => {
    const body = document.body;
    const customBodyStyle = ['overflow-hidden', 'lg:overflow-visible'];
    const customStyle = ['sticky-nav', 'fixed', 'border-b'];
  
    if (state) {
      body.classList.add(...customBodyStyle);
    } else {
      body.classList.remove(...customBodyStyle);
    }
  
    const handleScroll = () => {
        const nav = navRef.current as unknown as HTMLElement;
        if (window.scrollY > 80) {
            nav.classList.add(...customStyle);
        } else {
            nav.classList.remove(...customStyle);
        }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [state]);
  
  useEffect(() => {
    const customStyle = ['sticky-nav', 'fixed', 'border-b'];
    const handleScroll = () => {
        const nav = navRef.current as unknown as HTMLElement;
        if (window.scrollY > 80) {
            nav.classList.add(...customStyle);
        } else {
            nav.classList.remove(...customStyle);
        }
    };
    
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav ref={navRef} className="bg-white w-full top-0 z-20">
  <div className="items-center px-2 max-w-screen-xl mx-auto md:px-4 lg:flex"> {/* Reduced Padding */}
    <div className="flex items-center justify-between py-2 lg:py-3 lg:block"> {/* Reduced Padding */}
    <a href="javascript:void(0)" className="flex items-center text-mainColor hover:text-mainHover" >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 122.88 95.78"
    width="80"
    height="40"
    className="fill-current" // Removed the mr-1 class
  >
    <path
      d="M85.64,9.03c18.13-19.58,21.19-1.79,34.54,1.95c1.61,0.45,2.81,0.56,2.7,1.32c-1.17,7.67-3.67,9.12-6.46,9.19 c-3.09,0.09-5.6,0.03-7.45,0.91c-2.36,1.12-4.07,2.57-5.32,4.27l-18.96-9.67C85.29,14.76,85.62,12.12,85.64,9.03L85.64,9.03 L85.64,9.03z M101.67,30.37c-4.04,10.76,1.35,26.76-16.71,32.65c-1.09,9.16-1.04,18.33,0.24,27.49l2.19-0.23 c3.95-0.42,3.92,3.17,2.05,5.48H77.76c-0.85-10.98-2.97-23-2.09-33.48c-6.15,1.65-9.86,1.21-16.54-1.34 c-3.24-1.23-16.62-9.23-20.25-5.98c-2.04,1.84,3.41,9.18-10.05,22.21l0.24,12.89l2.28,0c3.45,0,3.26,3.45,2.01,5.7h-6.65 c-4.42,0-3.49,0.47-3.55-4.18l-0.11-10.03l-0.71-6.22c0.01-3.7,2.67-7.64,0.13-16.46c-1.68-5.83-1.54-10.48-5.93-11.12 c-4.07,8.21-7.97,15.73-11.39,24.34c-0.23,0.58-0.55,1.13-0.83,1.7c-3.9,8.98-5.53,2.23-3.35-3.1l1.46-3.56 c1.87-7.53,7.14-21.65,12.11-26.89c18.74-19.77,56.72-1.07,67.91-18.18L101.67,30.37L101.67,30.37L101.67,30.37z"
      fill="currentColor"
    />
  </svg>
  <span className="text-2xl font-bold">Tapales</span>
</a>



      <div className="lg:hidden">
        <button
            className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-300 focus:border"
            onClick={() => setState(!state)}
            >
            {state ? (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
                </svg>
            ) : (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                />
                </svg>
            )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
            state ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'
          }`}
        >
          <div>
            <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
              
              <li className="mt-4 lg:mt-0">
                <a
                  href="javascript:void(0)"
                  className="py-3 px-4 text-center border text-gray-600 hover:text-textrHover rounded-md block lg:inline lg:border-0"
                >
                  Login
                </a>
              </li>
              <li className="mt-8 lg:mt-0">
                <a
                  href="javascript:void(0)"
                  className="py-3 px-4 text-center text-white bg-mainColor hover:bg-mainHover rounded-md shadow block lg:inline"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-gray-600 hover:text-textrHover">
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
