"use client"
import Image from "next/image"
import React from "react"
import Link from "next/link"

type Services = {
    id: number;
    title: string;
    description: string;
    icon: string;
};
type ServiceCard = {
    title: string;
    description: string;
    icon: string;
};



const ServiceCard: React.FC<ServiceCard>= ({ title, description, icon }) => {
return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-5 xl:p-7 hover:cursor-default rounded-lg bg-gray-100 dark:bg-gray-900  group transition duration-300 z-10 hover:z-10 shadow-md shadow-transparent hover:shadow-gray-100/40 dark:hover:shadow-transparent border border-transparent hover:border-gray-200 dark:hover:border-gray-800 hover:-translate-y-2 overflow-hidden relative">
        <div className="absolute w-40 h-10 rounded-full border-8 border-sky-600/20 dark:border-sky-500/30 blur-md -z-10 -top-1 right-5 rotate-45" />
        <div className="flex min-w-max items-start">
            <div className="p-1.5 rounded-full  shadow-sm relative bg-gradient-to-br from-gray-100 to-neutral-300 dark:from-gray-900 dark:to-gray-700">
                <div className=" bg-gray-100 dark:bg-gray-900 rounded-full p-3 flex">
                    <Image src={icon} alt="icon" className="w-10 h-10" />
                </div>
            </div>
        </div>
        <div className="space-y-5 flex flex-col md:flex-1 relative">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-justify line-clamp-3">
                {description}
            </p>
            <Link href="/Message#test" scroll={false} className="text-sky-700 dark:text-sky-400 flex items-center gap-x-3 w-max">
                Get a quota
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                </svg>
            </Link>
        </div>
    </div>
)
}
const services: Services[] = [
{
    id: 1,
    title: "Immunization",
    description: "To ensure safe and nourishing environment for your pet, our clinic offers deworming and rabies vaccinations for canines and felines.",
    icon: ""
},
{
    id: 2,
    title: "Service name 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: ""
},
{
    id: 3,
    title: "Service name 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: ""
},
{
    id: 4,
    title: "Service name 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt culpa autem",
    icon: ""
},
]

const Features: React.FC = () => {
return (
    <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 xl:gap-14">
            <div className="flex flex-col gap-5">
                <div className="space-y-4 max-w-xl">
                    <span className="text-blue-600 dark:text-blue-500 font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-blue-600 dark:before:bg-blue-500 before:rounded-full">
                        Services
                    </span>
                    <h1 className="font-bold text-gray-800 dark:text-white text-3xl">We are here to help with best services
                    </h1>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-10">
                {
                    services.map(service => (
                        <ServiceCard key={service.id} {...service} />
                    ))
                }
            </div>
        </div>
    </section>

)
}

export default Features