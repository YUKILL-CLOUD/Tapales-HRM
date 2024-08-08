"use client"
export default function HeroSection() {
return (
<section className="relative pt-20 lg:pt-24 pb-20 bg-violet-50 dark:bg-gray-900">
            <div className="absolute top-0 inset-x-0 h-64 flex items-start">
                    <div className="h-24 w-2/3 bg-gradient-to-br from-mainColor-default opacity-50 blur-2xl dark:from-mainColor dark:invisible dark:opacity-40">
                    </div>
                    <div className="h-20 w-3/5 bg-gradient-to-r from-mainColor-default opacity-60 blur-2xl dark:from-mainColor dark:opacity-40">
                    </div>
                </div>
                <div className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
                    <div aria-hidden="true" className="absolute inset-y-0 w-44 left-0 hidden dark:flex">
                        <div className="h-full md:h-1/2 lg:h-full w-full bg-gradient-to-tr opacity-40 dark:blur-2xl dark:from-[#0c1cac] dark:opacity-20">
                        </div>
                    </div>
                    <div className="mx-auto space-y-2 text-center lg:text-center flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none">
                    <h1 className="text-mainHover dark:text-mainColor text-3xl/snug sm:text-5xl/tight lg:text-4xl/tight xl:text-[3.50rem]/tight font-bold">
                        Connect with our Freindly Clinic
                    </h1>
                    <p className=" text-gray-700 dark:text-gray-300 lg:text-lg max-w-2xl lg:max-w-none mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugit! Laborum quo maxime
                        at sapiente
                        quasi   
                    </p>
                    <div className="mt-6 pt-8">
                    <a href="/message" className="inline-block py-2 px-4 text-gray-800 bg-mainColor-default text-white font-semibold hover:bg-mainHover transition rounded-full">
                            Make Connections
                    </a>
                </div>
                </div>
                </div>
            </section>
)
}