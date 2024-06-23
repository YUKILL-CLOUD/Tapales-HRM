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
      <div className="flex items-center justify-between py-2 lg:py-1 lg:block"> {/* Reduced Padding */}
          <a href="javascript:void(0)">
            <img
              src="https://www.floatui.com/logo.svg"
              width={120}
              height={50}
              alt="Float UI logo"
            />
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
              <li className="mt-8 mb-8 lg:mt-0 lg:mb-0">
                <a href="javascript:void(0)" className="text-gray-600 hover:text-textrHover">
                  The Doctor
                </a>
              </li>
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
