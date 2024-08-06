"use client"
import Image from 'next/image'

export default function HeroSection() {
return (
  <section className="relative pt-20 lg:pt-24 pb-20 bg-violet-50 dark:bg-gray-900">
                <div className="absolute top-0 inset-x-0 h-64 flex items-start">
                  <div className="h-24 w-2/3 bg-gradient-to-br from-mainColor opacity-20 blur-2xl dark:from-mainColor dark:invisible dark:opacity-40">
                  </div>
                  <div className="h-20 w-3/5 bg-gradient-to-r from-mainColor opacity-40 blur-2xl dark:from-mainColor dark:opacity-40">
                  </div>
                </div>
                <div className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
                    <div aria-hidden="true" className="absolute inset-y-0 w-44 left-0 hidden dark:flex">
                        <div className="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40 dark:blur-2xl dark:from-[#0c1cac] dark:opacity-20">
                        </div>
                    </div>
                    <div className="mx-auto space-y-8 text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
                        <h1 className="text-mainColor dark:text-mainColor text-3xl/snug sm:text-5xl/tight lg:text-4xl/tight xl:text-[3.50rem]/tight font-bold">
                            Our Services
                        </h1>
                        <p className=" text-gray-700 dark:text-gray-300 lg:text-lg max-w-2xl lg:max-w-none mx-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugit! Laborum quo maxime
                            at sapiente
                            quasi
                        </p>
                
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[34rem] mx-auto lg:mx-0 w-full">
                            <div className="relative text-center bg-white dark:bg-gray-950/60 border border-blue-100 dark:border-gray-950 p-5 rounded-3xl before:absolute before:inset-1 before:bg-blue-50 dark:before:bg-gray-950 before:rounded-[1.25rem]">
                                <span className="font-bold text-2xl text-gray-900 dark:text-gray-100 relative">
                                    450+
                                </span>
                                <h2 className="text-sm text-gray-700 dark:text-gray-300 relative">Diagnostic Weekly</h2>
                            </div>
                            <div className="relative text-center bg-white dark:bg-gray-950/60 border border-blue-100 dark:border-gray-950 p-5 rounded-3xl before:absolute before:inset-1 before:bg-blue-50 dark:before:bg-gray-950 before:rounded-[1.25rem]">
                                <span className="font-bold text-2xl text-gray-900 dark:text-gray-100 relative">
                                    450+
                                </span>
                                <h2 className="text-sm text-gray-700 dark:text-gray-300 relative">Diagnostic Weekly</h2>
                            </div>
                            <div className="relative text-center bg-white dark:bg-gray-950/60 border border-blue-100 dark:border-gray-950 p-5 rounded-3xl before:absolute before:inset-1 before:bg-blue-50 dark:before:bg-gray-950 before:rounded-[1.25rem]">
                                <span className="font-bold text-2xl text-gray-900 dark:text-gray-100 relative">
                                    450+
                                </span>
                                <h2 className="text-sm text-gray-700 dark:text-gray-300 relative">Diagnostic Weekly</h2>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-1 lg:w-1/2 relative max-w-3xl mx-auto lg:max-w-none">
                        <div className="lg:absolute lg:right-0 md:w-5/6 md:h-auto lg:w-full lg:h-full bg-blue-100 overflow-hidden rounded-b-[24px]">
                            <Image src="/services.jpg" alt="cat face" width={1850} height={1150} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
)
}