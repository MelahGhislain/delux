import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const CarouselSlider = ({items}) => {

   
  return (
    
        <div className="container">
            <div className="flex items-center justify-center w-full h-full">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="block " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={items.length} visibleSlides={1} step={1} infinite={true} dragEnabled={true} isPlaying={true}>
                    <div className="w-full relative flex items-center justify-center ">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 focus:outline-none cursor-pointer bg-green-600 rounded-full h-5 w-5 sm:h-8 sm:w-8 flex justify-center items-center" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex items-center justify-start transition ease-out duration-700">
                                    {
                                        items.map((item, index) => (
                                            <Slide index={index} key={index}>
                                                <div className="flex flex-shrink-0 relative w-full">
                                                    <img src={item.image} alt="black chair and white table" className="object-contain object-center w-full h-[15rem] sm:h-[18rem] md:h-[20rem] lg:h-[25rem]" />
                                                </div>
                                            </Slide>
                                        ))
                                    }
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 focus:outline-none bg-green-600 rounded-full h-5 w-5 sm:h-8 sm:w-8 flex justify-center items-center" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                {/* <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slider>
                                        <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                            {
                                                items.map((item, index) => (
                                                    <Slide index={index} key={index}>
                                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer duration-500 transition-all hover:scale-105">
                                                            <img src={item.image} alt="black chair and white table" className="object-cover object-center w-full" />
                                                        </div>
                                                    </Slide>
                                                ))
                                            }
                                        </div>
                                    </Slider>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider> */}

                {/* Carousel for mobile and Small size Devices */}
                {/* <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    <Slider>
                                        <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                            {
                                                items.map((item, index) => (
                                                    <Slide index={index} key={index}>
                                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto cursor-pointer duration-500 transition-all hover:scale-105">
                                                            <img src={item.image} alt="black chair and white table" className="object-cover object-center w-full" />
                                                        </div>
                                                    </Slide>
                                                ))
                                            }
                                        </div>
                                    </Slider>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider> */}
            </div>
        </div>

  )
}

export default CarouselSlider