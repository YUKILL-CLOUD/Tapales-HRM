import React from 'react'

export default function Cta() {
  return (
    
        <section className="py-20 relative bg-mainColor">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                <div className="max-w-xl md:mx-auto">
                    <p className="text-white text-3xl font-semibold sm:text-4xl">
                            Build the future with us
                    </p>
                    <p className="text-blue-100 mt-3">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
                    </p>
                </div>
                <div className="mt-4">
                    <a href="javascript:void(0)" className="inline-block py-2 px-4 text-gray-800 font-medium bg-white duration-150 hover:bg-mainHover hover:text-white active:bg-gray-200 rounded-full">
                            Contact us
                    </a>
                </div>
             </div>
                <div className="absolute top-0 w-full h-full" style={{ background: "linear-gradient(268.24deg, rgba(128, 0, 128, 0.76) 50%, rgba(186, 85, 211, 0.545528) 80.61%, rgba(75, 0, 130, 0) 117.35%)" }}></div>
        </section>
     )
}