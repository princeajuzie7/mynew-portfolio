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
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import {
  getDoc,
  doc,
  setDoc,
  DocumentData,
  getDocs,
  updateDoc,
  collectionGroup,
} from "firebase/firestore";
import { db } from "@/config/firebase";
// import 'swiper/swiper-bundle.css';

// // Install Swiper modules\

export function Mynewslettersection() {
  const [slides, setSlides] = useState(
    Array.from({ length: 5 }).map((_, index) => `Slide ${index + 1}`)
  );

  const [newsData, setNewsData] = React.useState<DocumentData[]>([]);
  const [pending, setPending] = React.useState(true);
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

  React.useEffect(() => {
    const HandleFetchcategory = async () => {
      try {
        const response = await getDocs(collectionGroup(db, `MyNewsletter`));

        if (!response) {
          throw new Error(`not authorized to make this request`);
        }

        const data = response.docs.map((docs) => {
          return { ...docs.data(), id: docs.id };
        });
        setNewsData(data);
        setPending(false);
      } catch (err) {
        setPending(false);
        throw new Error(`${err}`);
      }
    };

    HandleFetchcategory();
  }, []);

  return (
    <>
      <div className="  w-full lg:px-8 px-2 mt-[45px]">
        <div>
          <h4 className="text-[17px] font-[600] text-white mb-[30px] lg:text-start text-center">
            Newsletter
          </h4>
        </div>
        <div className="  ">
          <div className=" w-full  ">
            <Swiper
              modules={[Virtual, Navigation, Pagination, Autoplay]}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              speed={1400}
              spaceBetween={20}
              slidesPerView={1}
              ref={swiperRef}
              onSlideChange={updateNavigationButtons}
              virtual
              breakpoints={{
                1080: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              className=" py-6"
            >
              <div>
                {pending ? (
                  <div>
                    {Array.from({ length: 5 }, (_, _index: number) => (
                      <SwiperSlide
                        key={_index}
                        virtualIndex={_index}
                        className=" "
                      >
                        <div className="lg:w-[280px] w-full  mr-[30px] animate-pulse">
                          {/* blog post card */}
                          <div className=" transform scale-[1] transition ease-in-out mb-0">
                            {/* post cover */}
                            <div className="relative pb-[60%] block">
                              {/* img */}
                            </div>
                            {/* post cover end */}
                            {/* post description */}
                            <div className="py-[30px] px-[10px] relative bottom-0 bg-[#2C2C37]">
                              {/* title */}
                              <div className="text-[#ffff]">
                                <h5 className="mb-[15px] text-[14px] font-[600]"></h5>
                              </div>
                              {/* text */}
                              <div className="mb-[15px] text-[#8c8c8e] text-[12px]">
                                loading...
                              </div>
                              {/* link */}

                              <Link
                                href={`#`}
                                target="_blank"
                                className="flex items-center  text-[#FFC107] gap-1 uppercase font-[600] relative text-[10px]"
                              >
                                <span>loading... Readmore link </span>
                                <IoIosArrowForward />
                              </Link>
                            </div>
                            {/* post description end */}
                          </div>
                          {/* blog post card end */}
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                ) : (
                  <div>
                    {/* testimonial */}
                    {newsData.map((slideContent) => (
                      <SwiperSlide
                        key={slideContent?.id}
                        virtualIndex={slideContent?.id}
                        className=" "
                      >
                        <div className="lg:w-[280px]   w-full mr-[30px]">
                          {/* blog post card */}
                          <div className=" transform scale-[1] transition ease-in-out mb-0">
                            {/* post cover */}
                            <div className="relative pb-[60%] block">
                              {/* img */}
                              <Image
                                src={slideContent?.projectimage}
                                height={200}
                                width={200}
                                alt="blog post"
                                className="w-full h-full absolute object-cover position-[center] transition ease-in-out"
                              />
                            </div>
                            {/* post cover end */}
                            {/* post description */}
                            <div className="py-[30px] px-[10px] h-36  relative bottom-0 bg-[#2C2C37]">
                              {/* title */}
                              <div className="text-[#ffff]">
                                <h5 className="mb-[15px] text-[14px] font-[600]">
                                  {slideContent?.tittle}
                                </h5>
                              </div>
                              {/* text */}
                              <div className="mb-[15px] text-[#8c8c8e] text-[12px] w-[250px] overflow-hidden whitespace-nowrap text-ellipsis">
                                {slideContent?.message}
                              </div>
                              {/* link */}

                              <Link
                                href={`${slideContent?.newslink}`}
                                target="_blank"
                                className="flex items-center  text-[#FFC107] gap-1 uppercase font-[600] relative text-[10px]"
                              >
                                <span> Read more</span>
                                <IoIosArrowForward />
                              </Link>
                            </div>
                            {/* post description end */}
                          </div>
                          {/* blog post card end */}
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

export default Mynewslettersection;
