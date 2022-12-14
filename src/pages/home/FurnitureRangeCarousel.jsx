
import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";


export default function FurnitureRangeCarousel() {
    return (
        <div className="px-4 md:px-10 lg:px-24 ">
            <div className="container mx-auto">
                <div className="flex items-center justify-center w-full h-full py-4 sm:py-8 px-4">
                    {/* Carousel for desktop and large size devices */}
                    <CarouselProvider className="lg:block " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={6} visibleSlides={5} step={1} infinite={true}>
                        <div className="w-full relative flex items-center justify-center ">
                            <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 md:-left-6 focus:outline-none cursor-pointer bg-green-600 rounded-full h-5 w-5 sm:h-8 sm:w-8 flex justify-center items-center" id="prev">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full flex lg:gap-12 md:gap-10 gap-6 items-center justify-start transition ease-out duration-700">
                                        
                                        <Slide >
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer duration-500 transition-all hover:scale-105">
                                                <a href="/products" className="group" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-lg h-[50px] text-red-700"><title>UL_CATEGORY_ICONS</title><path d="M27.5 19.4H27v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1h-.5A2.48 2.48 0 0 0 0 21.9v4a2.48 2.48 0 0 0 2.5 2.5h.2v1.1a.47.47 0 0 0 .5.5H5a.47.47 0 0 0 .5-.5v-1.1h19.2v1.1a.47.47 0 0 0 .5.5H27a.47.47 0 0 0 .5-.5v-1.1h.1a2.48 2.48 0 0 0 2.5-2.5v-4a2.63 2.63 0 0 0-2.6-2.5zM4 18.4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v1.5a2.61 2.61 0 0 0-1 2v1.5H5v-1.5a2.61 2.61 0 0 0-1-2v-1.5zM4.4 29h-.8v-.6h.8v.6zm22 0h-.8v-.6h.8v.6zm2.6-3.1a1.54 1.54 0 0 1-1.5 1.5h-25A1.54 1.54 0 0 1 1 25.9v-4a1.54 1.54 0 0 1 1.5-1.5A1.54 1.54 0 0 1 4 21.9v2a.47.47 0 0 0 .5.5h21a.47.47 0 0 0 .5-.5v-2a1.5 1.5 0 0 1 3 0v4z"></path><circle cx="8.6" cy="19.2" r=".4"></circle><circle cx="15" cy="19.2" r=".4"></circle><circle cx="21.4" cy="19.2" r=".4"></circle></svg>
                                                    <h4 className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-sm mt-2 text-gray-600">Sofas</h4>
                                                </a>
                                            </div>
                                        </Slide>

                                        <Slide >
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer duration-500 transition-all hover:scale-105">
                                                <a href="/products" className="group" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-lg h-[50px]"><title>UL_group_ICONS</title><path d="M28 24h-.5v-2a2 2 0 0 0-2-2h-20v-5a2 2 0 0 0-4 0v12.5a.47.47 0 0 0 .5.5h1.5v1.5a.47.47 0 0 0 .5.5h2a.47.47 0 0 0 .5-.5V28h17v1.5a.47.47 0 0 0 .5.5h2a.47.47 0 0 0 .5-.5V28H28a.47.47 0 0 0 .5-.5v-3a.47.47 0 0 0-.5-.5zM5.5 21h20a1 1 0 0 1 1 1v2h-21v-3zm-3-6a1.08 1.08 0 0 1 1-1 1 1 0 0 1 1 1v9h-2v-9zm3 14h-1v-1h1v1zm20 0h-1v-1h1v1zm2-2h-25v-2h25v2z"></path></svg>
                                                    <h4 className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-sm mt-2 text-gray-600">Beds</h4>
                                                </a>
                                            </div>
                                        </Slide>

                                        <Slide >
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer duration-500 transition-all hover:scale-105">
                                                <a href="/products" className="group" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-lg h-[50px]"><title>UL_CATEGORY_ICONS</title><path d="M30 10.5v19a.5.5 0 0 1-1 0V21h-3v-1h3v-9.5a.5.5 0 0 1 1 0zM4 20v1H1v8.5a.47.47 0 0 1-.5.5.47.47 0 0 1-.5-.5v-19a.47.47 0 0 1 .5-.5.47.47 0 0 1 .5.5V20h3z"></path><path d="M26.5 15h-23a.47.47 0 0 0-.5.5v2a.47.47 0 0 0 .5.5H5v11.5a.47.47 0 0 0 .5.5.47.47 0 0 0 .5-.5V21h1v8.5a.5.5 0 0 0 1 0V20H6v-2h18v2h-2v9.5a.5.5 0 0 0 1 0V21h1v8.5a.5.5 0 0 0 1 0V18h1.5a.47.47 0 0 0 .5-.5v-2a.47.47 0 0 0-.5-.5zm-.5 2H4v-1h22v1z"></path></svg>
                                                    <h4 className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-sm mt-2 text-gray-600">Dining</h4>
                                                </a>
                                            </div>
                                        </Slide>

                                        <Slide >
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer duration-500 transition-all hover:scale-105">
                                                <a href="/products" className="group" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-lg h-[50px]"><title>UL_CATEGORY_ICONS</title><path d="M28.5 17h-13v-1H24a.47.47 0 0 0 .5-.5v-9A.47.47 0 0 0 24 6H6a.47.47 0 0 0-.5.5v9a.47.47 0 0 0 .5.5h8.5v1h-13a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1v1.5a.47.47 0 0 0 .5.5h2a.47.47 0 0 0 .5-.5V28h19v1.5a.47.47 0 0 0 .5.5h2a.47.47 0 0 0 .5-.5V28h1a1 1 0 0 0 1-1v-9a1.08 1.08 0 0 0-1-1zm-24 12h-1v-1h1v1zm10-2h-13v-9h13v9zm-8-12V7h17v8h-17zm20 14h-1v-1h1v1zm2-2h-13v-9h13v9z"></path><path d="M17.5 21.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0zM13.5 21.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0z"></path></svg>
                                                    <h4 className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-sm mt-2 text-gray-600">TV Units</h4>
                                                </a>
                                            </div>
                                        </Slide>

                                        <Slide >
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer duration-500 transition-all hover:scale-105">
                                                <a href="/products" className="group" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-lg h-[50px]"><title>UL_CATEGORY_ICONS</title><path d="M29 19.4a1.8 1.8 0 0 0-.2-1 2 2 0 0 0-1.8-.8h-1.7a3.64 3.64 0 0 0-1.6.3 6.36 6.36 0 0 0-1.5-.3h-3.9a3.87 3.87 0 0 0-1.6.3 6.93 6.93 0 0 0-1.6-.3h-3.9a3.64 3.64 0 0 0-1.6.3 6.46 6.46 0 0 0-1.9-.3h-2a3.13 3.13 0 0 0-2.4 1.3l-2.1 3.4a1.9 1.9 0 0 0-.3 1.4v4.9a1.42 1.42 0 0 0 .2.6c.3.7 1.3.8 2 .8h21.1a3.36 3.36 0 0 0 3.2-1.5l1.5-2.5v-.1a4.54 4.54 0 0 0 .2-.8zm-.9 5.8a2.27 2.27 0 0 1-.1.4s-1.2 2-1.5 2.4c-.2.2-.4 1-2.3 1H3.62c-1.4 0-1.7-.2-1.8-.3v-4a3.25 3.25 0 0 0 1.3.1h.7a6 6 0 0 1 1.8.3l.2.1h.1a2.91 2.91 0 0 1 1.4-.3h3.6a6 6 0 0 1 1.8.3l.2.1.2-.1a2.91 2.91 0 0 1 1.4-.3h4a5 5 0 0 1 1.4.3l.2.1.2-.1a2.91 2.91 0 0 1 1.4-.3h2.1c2.2 0 2.1-.3 2.7-.9l.6-.8.3-.4.8-1.3v3.7h-.1zm-.1-5.8a.37.37 0 0 1-.1.3l-1.9 3a2.66 2.66 0 0 1-1.1 1 4.44 4.44 0 0 1-1.3.2h-2.1a3.64 3.64 0 0 0-1.6.3 6.36 6.36 0 0 0-1.5-.3h-4a3.64 3.64 0 0 0-1.6.3 6.93 6.93 0 0 0-1.6-.3H7.42a3.64 3.64 0 0 0-1.6.3A9.22 9.22 0 0 0 4 23.9h-.28a5.84 5.84 0 0 1-1.9-.2 1.26 1.26 0 0 1 .1-.8L4 19.5a2 2 0 0 1 1.5-.8h2a6 6 0 0 1 1.8.3l.2.1.2-.1a2.91 2.91 0 0 1 1.4-.3h3.6a6 6 0 0 1 1.8.3l.2.1.2-.1a2.91 2.91 0 0 1 1.4-.3h3.8a6.36 6.36 0 0 1 1.5.3l.2.1.2-.1a2.91 2.91 0 0 1 1.4-.3H27a1.18 1.18 0 0 1 1 .3.53.53 0 0 1 0 .4z"></path></svg>
                                                    <h4 className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-sm mt-2 text-gray-600">Mattresses</h4>
                                                </a>
                                            </div>
                                        </Slide>

                                        <Slide >
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer duration-500 transition-all hover:scale-105">
                                                <a href="/products" className="group" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-lg h-[50px]"><title>UL_CATEGORY_ICONS</title><path d="M20.3 22.5a.52.52 0 0 0 .2-.4v-.3a2.75 2.75 0 0 0-1.2-2.2v-7.1a1.32 1.32 0 0 0-1.3-1.3h-6.2a1.26 1.26 0 0 0-1.3 1.3v7.1a2.51 2.51 0 0 0-1.2 2.2v.3a.52.52 0 0 0 .2.4l-.8 7.1a.35.35 0 0 0 .4.4h.8a.66.66 0 0 0 .5-.4l1.7-7.1h5.8l1.7 7.1a.54.54 0 0 0 .5.4h.8a.35.35 0 0 0 .4-.4zm-.12 6.7l-1.49-6.7h.9l.94 6.7h-.35zm-9-16.7a.47.47 0 0 1 .5-.5h6.2a.47.47 0 0 1 .5.5v6.8a1.31 1.31 0 0 0-.5-.1H11.7a.9.9 0 0 0-.5.1v-6.8zM9.75 29.2H9.5l.89-6.7h.9zm.15-7.5a1.77 1.77 0 0 1 1.8-1.7h6.2a1.84 1.84 0 0 1 1.8 1.7H9.9z"></path></svg>
                                                    <h4 className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-sm mt-2 text-gray-600">Seating</h4>
                                                </a>
                                            </div>
                                        </Slide>

                                        <Slide >
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer duration-500 transition-all hover:scale-105">
                                                <a href="/products" className="group" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-lg h-[50px]"><title>UL_CATEGORY_ICONS</title><path d="M27 19.6H2.85a.47.47 0 0 0-.5.5v9.4a.47.47 0 0 0 .5.5h3.8a.47.47 0 0 0 .5-.5v-5.7h15.8v5.7a.47.47 0 0 0 .5.5h3.7a.47.47 0 0 0 .5-.5v-9.4a.77.77 0 0 0-.65-.5zm-.45 9.4h-2.7v-5.7a.47.47 0 0 0-.5-.5H6.65a.47.47 0 0 0-.5.5V29h-2.8v-8.4h23.2V29z"></path></svg>
                                                    <h4 className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-sm mt-2 text-gray-600 flex-1">Coffee Tables</h4>
                                                </a>
                                            </div>
                                        </Slide>

                                        <Slide >
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer duration-500 transition-all hover:scale-105">
                                                <a href="/products" className="group" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-lg h-[50px]"><title>UL_CATEGORY_ICONS</title><path d="M25.5 2a1 1 0 0 0-1-1h-19a1 1 0 0 0-1 1v27a1 1 0 0 0 1 1h19a1 1 0 0 0 1-1V2zm-11 27h-9V8h9v21zm0-22h-9V2h9v5zm10 22h-9V8h9v21zm0-22h-9V2h9v5z"></path><path d="M17.5 16.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0zM13.5 16.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0zM17.5 4.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 1 1 1 0zM13.5 4.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 1 1 1 0z"></path></svg>
                                                    <h4 className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-sm mt-2 text-gray-600">Cupboards</h4>
                                                </a>
                                            </div>
                                        </Slide>

                                        <Slide >
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer duration-500 transition-all hover:scale-105">
                                                <a href="/products" className="group" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-lg h-[50px]"><title>UL_CATEGORY_ICONS</title><path d="M24.73 23.1h-2.2v-1.6a1.5 1.5 0 0 0-1.6-1.5h-8.3l-4-5.9a3.8 3.8 0 0 0-5.2-1 .76.76 0 0 0-.2.4.37.37 0 0 0 .1.3l6.9 10.1V27a1.52 1.52 0 0 0 1.4 1.5v1a.47.47 0 0 0 .5.5h1.5a.47.47 0 0 0 .5-.5v-1h4.2v1a.47.47 0 0 0 .5.5h1.5a.47.47 0 0 0 .5-.5v-1h.1a1.51 1.51 0 0 0 1.5-1.3h3.7a.65.65 0 0 0 .6-.6v-1.5a1.91 1.91 0 0 0-2-2zM11 20.2a1.43 1.43 0 0 0-.7 1v1.11l-6-8.71a3.09 3.09 0 0 1 3.6 1l3.7 5.4a2 2 0 0 0-.6.2zm2.2 8.8h-.6v-.5h.64v.5zm6.7 0h-.59v-.5h.62v.5zm1.6-1.8a.55.55 0 0 1-.5.3h-9.2a.65.65 0 0 1-.6-.6v-4h10.3V27m.1-5H11.34v-.5a.51.51 0 0 1 .6-.5h9.2a.56.56 0 0 1 .6.5v.5h-.1zm4.3 4.2h-3.41V24h2.35a1.11 1.11 0 0 1 1.1 1.1v1.1z"></path></svg>
                                                    <h4 className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-sm mt-2 text-gray-600">Recliners</h4>
                                                </a>
                                            </div>
                                        </Slide>

                                        <Slide >
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer duration-500 transition-all hover:scale-105">
                                                <a href="/products" className="group" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-lg h-[50px]"><title>UL_CATEGORY_ICONS</title><path d="M16 25h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 0h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 0h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 0h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 0h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 0h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 0h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm8.5-19h-19a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h1v1.5a.47.47 0 0 0 .5.5h2a.47.47 0 0 0 .5-.5V28h11v1.5a.47.47 0 0 0 .5.5h2a.47.47 0 0 0 .5-.5V28h1a1 1 0 0 0 1-1V7a1.08 1.08 0 0 0-1-1zm-16 23h-1v-1h1v1zm14 0h-1v-1h1v1zm2-2h-19v-8h19v8zm0-9h-19v-5h19v5zm0-6h-19V7h19v5zM14 26h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm2-1h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 0h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 0h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 0h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 0h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"></path><path d="M16.5 10.5a.47.47 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.47.47 0 0 1 .5.5zM16.5 16.5a.47.47 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.47.47 0 0 1 .5.5z"></path></svg>
                                                    <h4 className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-sm mt-2 text-gray-600">Storage</h4>
                                                </a>
                                            </div>
                                        </Slide>

                                        <Slide >
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer duration-500 transition-all hover:scale-105">
                                                <a href="/products" className="group" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-lg h-[50px]"><title>UL_CATEGORY_ICONS</title><path d="M17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm-9.5-3.7l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0-8L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm-2 8.2l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zM17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm0 0a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm-7.5-3.9l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm-2 .2l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm0 0l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0-8L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zM17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm0 0a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zM9.5 10.1L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0 8l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm-2 .2l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm0 0l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0-8L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zM17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm-9.5-3.7l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0-8L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zM17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm0 0a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zM9.5 10.1L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0 8l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm-2 .2l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm0 0l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0-8L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zM17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm0 0a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zM9.5 10.1L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0 8l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm-2 .2l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zM17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm0 0a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm0 0a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm-9.5-3.7l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0-8L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7z"></path><path d="M24.5 3h-19a1 1 0 0 0-1 1v23a1 1 0 0 0 1 1h1v1.5a.5.5 0 0 0 1 0V28h15v1.5a.5.5 0 0 0 1 0V28h1a1 1 0 0 0 1-1V4a1.08 1.08 0 0 0-1-1zm-10 24h-9v-7h9v7zm0-8h-9v-7h9v7zm0-8h-9V4h9v7zm10 16h-9v-7h9v7zm0-8h-9v-7h9v7zm0-8h-9V4h9v7z"></path><path d="M7.2 10.9a.47.47 0 0 1-.6-.4l-.9-3.9a.47.47 0 0 1 .4-.6.47.47 0 0 1 .6.4l.9 3.9a.82.82 0 0 1-.4.6zM24.3 7l-1.6 3.7a.43.43 0 0 1-.7.2.55.55 0 0 1-.3-.7l1.6-3.7a.43.43 0 0 1 .7-.2.52.52 0 0 1 .3.7z"></path><path d="M22.9 7.5l-2.4 3.2a.5.5 0 1 1-.8-.6l2.4-3.2a.49.49 0 0 1 .7-.1.56.56 0 0 1 .1.7zM24.2 14.8l-1.6 3.7a.36.36 0 0 1-.6.2.61.61 0 0 1-.3-.7l1.6-3.7a.52.52 0 0 1 .7-.3.88.88 0 0 1 .2.8zM22.2 14.7l-.9 3.9a.51.51 0 0 1-1-.2l.9-3.9a.55.55 0 0 1 .6-.4.49.49 0 0 1 .4.6zM11.4 18.7a.49.49 0 0 1-.7-.1l-2.2-3.3a.62.62 0 0 1 .1-.7.49.49 0 0 1 .7.1l2.2 3.3a.47.47 0 0 1-.1.7zM13.5 22.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0z"></path></svg>
                                                    <h4 className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-sm mt-2 text-gray-600">Bookshelves</h4>
                                                </a>
                                            </div>
                                        </Slide>

                                        <Slide >
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer duration-500 transition-all hover:scale-105">
                                                <a href="/products" className="group" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-lg h-[50px]"><title>UL_CATEGORY_ICONS</title><path d="M20.88 10l-2-7.6a.63.63 0 0 0-.6-.5h-6.6a.56.56 0 0 0-.6.5l-2 7.6a.78.78 0 0 0 .7 1h4.7v18H13a.5.5 0 0 0 0 1h4a.5.5 0 1 0 0-1h-1.5V11h2v4.1a1.5 1.5 0 0 0-1 1.4 1.5 1.5 0 0 0 3 0 1.41 1.41 0 0 0-1-1.4V11h1.7a.68.68 0 0 0 .68-1zm-2.2 6.5a.7.7 0 1 1-.7-.7.68.68 0 0 1 .7.7zm-8.6-6.5L12 3h6.1l1.9 7h-9.9z"></path></svg>
                                                    <h4 className="transition-all duration-300 group-hover:text-teal-600 text-xs md:text-sm mt-2 text-gray-600">Decor</h4>
                                                </a>
                                            </div>
                                        </Slide>
                                        
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 md:-right-8 focus:outline-none bg-green-600 rounded-full h-5 w-5 sm:h-8 sm:w-8 flex justify-center items-center" id="next">
                                <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>

                    
                </div>
            </div>
        </div>
    );
}
