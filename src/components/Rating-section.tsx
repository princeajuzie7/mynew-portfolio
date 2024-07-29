"use client";
import Head from "next/head";
import Image from "next/image";
import Axiosrequest from "@/utils/Axiosrequest";
import React, { useRef, useState, useEffect } from "react";
import { Virtual, Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper/core";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/swiper-bundle.css";

import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.css';

// // Install Swiper modules\

interface Rating {
  fullname: string;
  readonly id?: number;
  readonly uid?: string | number;
  image: string;
  experience: string;
  rate: number;
  work: string;
}

export function Ratingsection({ sheetdata }: any) {
  // Create array with 500 slides
  const [ratingData, setRatingData] = React.useState<Rating[]>([]);
  const [pending, setPending] = React.useState<boolean>(true);

  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const updateNavigationButtons = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.swiper.isBeginning);
      setIsEnd(swiperRef.current.swiper.isEnd);
    }
  };

  const HandlefetchRate = async () => {
    try {
      const res = await Axiosrequest.get(
        `${process.env.NEXT_PUBLIC_RATESHEET}`
      );
      if (res.status === 200) {
        setRatingData(res.data.data);
        setPending(false);
      }
    } catch (error: Error | any) {
      console.error(error);
      setPending(false);
      throw new Error(`${error}`);
    }
  };
  console.log(ratingData);
  useEffect(() => {
    HandlefetchRate();
  }, []);

  return (
    <>
      <div className="  w-full lg:px-8 px-2">
        <div>
          <h4 className="text-[17px] font-[600] text-white mb-[30px] lg:text-start text-center">
            Recommendations
          </h4>
        </div>
        <div className="  ">
          <div className=" w-full  ">
            <Swiper
              modules={[Virtual, Navigation, Pagination, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={1400}
              spaceBetween={20}
              slidesPerView={1}
              ref={swiperRef}
              onSlideChange={updateNavigationButtons}
              virtual
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              className=" py-6"
            >
              <div>
                {pending ? (
                  <div>
                    {Array.from({ length: 5 }, (_, index) => (
                      <SwiperSlide
                        key={index}
                        virtualIndex={index}
                        className=" "
                      >
                        <div className="relative p-[30px] bg-[#2D2D39] animate-pulse">
                          {/* testimonial body */}
                          <div className="testimonial-body">
                            {/* photo */}

                            {/* name */}
                            <h5 className="text-[14px] font-[600] text-[#fafafc]"></h5>
                            <div className="mb-[15px] text-[#646466] text-[11px] italic mt-[5px]"></div>
                            {/* text */}
                            <div className="mb-[15px] text-[13.5px]">
                              loading experience...
                            </div>
                          </div>
                          {/* testimonial body end */}
                          {/* testimonial footer */}
                          <div className="relative overflow-hidden flex justify-between">
                            <div className="">
                              {/* star rate */}
                              <ul className="flex bg-[#20202a] mt-[5px] text-[15px] rounded-[30px] text-[grey] animate-pulse py-[5px] px-[15px]">
                                <li className="mr-[5px]">
                                  <FaStar className="font-[900]" />
                                </li>
                                <li className="mr-[5px]">
                                  <FaStar className="font-[900]" />
                                </li>
                                <li className="mr-[5px]">
                                  <FaStar className="font-[900]" />
                                </li>
                                <li className="mr-[5px]">
                                  <FaStar className="font-[900]" />
                                </li>
                                <li className="mr-[5px]">
                                  <FaStar className="font-[900]" />
                                </li>
                              </ul>
                              {/* star rate end */}
                            </div>
                            <div className="art-right-side"></div>
                          </div>
                          {/* testimonial footer end */}
                        </div>
                      </SwiperSlide>
                    ))}

                    {/* testimonial */}
                  </div>
                ) : (
                  <div>
                    {/* testimonial */}
                    {ratingData.map((slideContent) => (
                      <SwiperSlide
                        key={slideContent?.id}
                        virtualIndex={slideContent?.id}
                        className=" "
                      >
                        <div className="relative p-[30px] bg-[#2D2D39]">
                          {/* testimonial body */}
                          <div className="testimonial-body">
                            {/* photo */}
                            <Image
                              className="absolute object-cover w-[65px] h-[65px] rounded-full right-[30px] top-[-15px] shadow-md"
                              src={slideContent?.image}
                              height={200}
                              width={200}
                              alt={`${slideContent?.fullname}`}
                            />
                            {/* name */}
                            <h5 className="text-[14px] font-[600] text-[#fafafc]">
                              {slideContent?.fullname}
                            </h5>
                            <div className="mb-[15px] text-[#646466] text-[11px] italic mt-[5px]">
                              {slideContent?.work}
                            </div>
                            {/* text */}
                            <div className="mb-[15px] text-[13.5px]">
                              {slideContent?.experience}
                            </div>
                          </div>
                          {/* testimonial body end */}
                          {/* testimonial footer */}
                          <div className="relative overflow-hidden flex justify-between">
                            <div className="">
                              {/* star rate */}
                              <ul className="flex bg-[#20202a] mt-[5px] text-[15px] rounded-[30px] py-[5px] px-[15px]">
                                {Array.from({ length: 5 }, (_, _index) => (
                                  <li className="mr-[5px]" key={_index}>
                                    <FaStar
                                      className={`font-[900] ${
                                        _index < slideContent?.rate
                                          ? "text-[#FFC107]"
                                          : ""
                                      }`}
                                    />
                                  </li>
                                ))}
                              </ul>
                              {/* star rate end */}
                            </div>
                            <div className="art-right-side"></div>
                          </div>
                          {/* testimonial footer end */}
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                )}
              </div>
            </Swiper>
          </div>

          <div className="">
            {/* slider navigation */}
            <div className="pt-[15px] flex justify-between">
              {/* left side */}
              <div className="art-sn-left">
                {/* slider pagination */}
                <div className="absolute text-center transition-opacity duration-300 transform translate-x-0 translate-y-0 translate-z-0">
                  <span
                    className="mr-[10px] bg-[#8c8c8e] opacity-[0.5] h-[4px]"
                    tabIndex={0}
                    role="button"
                    aria-label="Go to slide 1"
                  />
                  <span
                    className="w-[20px] bg-[#FFC107]"
                    tabIndex={0}
                    role="button"
                    aria-label="Go to slide 2"
                  />
                  <span
                    className="mr-[10px] bg-[#8c8c8e] opacitiy-[0.5] h-[4px]"
                    tabIndex={0}
                    role="button"
                    aria-label="Go to slide 3"
                  />
                </div>
              </div>
              {/* left side end */}
              {/* right side */}
              <div className="art-sn-right">
                {/* slider navigation */}
                <div className="flex gap-2">
                  {/* prev */}
                  <div
                    className={`art-slider-nav art-testi-swiper-prev ${
                      isBeginning
                        ? "text-[#35353D] cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    onClick={handlePrevSlide}
                    tabIndex={0}
                    role="button"
                    aria-label="Previous slide"
                    aria-disabled={isBeginning}
                  >
                    <FaChevronLeft />
                    <i className="fas fa-chevron-left" />
                  </div>
                  {/* next */}
                  <div
                    className={`art-slider-nav art-testi-swiper-next ${
                      isEnd
                        ? "text-[#35353D] cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    tabIndex={0}
                    role="button"
                    aria-label="Next slide"
                    aria-disabled={isEnd}
                    onClick={handleNextSlide}
                  >
                    <FaChevronRight />
                  </div>
                </div>
                {/* slider navigation */}
              </div>
              {/* right side end */}
            </div>
            {/* slider navigation end */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Ratingsection;
