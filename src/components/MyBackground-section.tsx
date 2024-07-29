"use client";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import {
  getDoc,
  doc,
  setDoc,
  DocumentData,
  getDocs,
  updateDoc,
  collectionGroup,
} from "firebase/firestore";
import { Ratingsection } from ".";
import { db } from "@/config/firebase";

import React from "react";
interface Background {
  readonly id: string;
  Form: {
    tittle: string;
    description: string;
    enddate: number;
    work: string;
    tag: string;
    fullname: string;
    education?: string;
    startdate: number;
  };
}
export function MyBackgroundsection() {
  const [education, setEducation] = React.useState<Background[] | DocumentData>(
    []
  );
  const [work, setWork] = React.useState<Background[] | DocumentData>([]);
  const [pending, setPending] = React.useState(true);

  const HandleFetchBackground = async (props: string) => {
    // setPending(true )
    try {
      const querysnapshot = await getDocs(collectionGroup(db, `${props}`));
      if (!querysnapshot) {
        throw new Error("data not found");
      }

      const data = querysnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      return data;
    } catch (err) {
      throw new Error(`${err}`);
    }
  };

  React.useEffect(() => {
    HandleFetchBackground("education")
      .then((data) => {
        setEducation(data);
        setPending(false);
      })
      .catch((err) => {
        setPending(false);
        throw new Error(`${err}`);
      });

    HandleFetchBackground("work")
      .then((data) => {
        setWork(data);
        setPending(false);
      })
      .catch((err) => {
        setPending(false);
        throw new Error(`${err}`);
      });
  }, []);

  const HandleDate = (dates: number) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date(dates);

    const Year = date.getFullYear();

    const month = months[date.getMonth()];

    return `${month} ${Year}`;
  };

  console.log(work, "work");

  return (
    <div className="overflow-hidden py-0 md:px-[30px] px-[10px] relative pt-[20px]">
      <div className="flex  gap-[20px] flex-col md:flex-row">
        <div className="lg:w-1/2 flex-grow-0 flex-shrink-0 flex-basis-1/2 max-w-[100%] md:max-w-[50%]">
          <div className="self-center relative mb-[30px]">
            <h4 className=" text-[16px]  text-[#fafafc] text-center lg:text-start font-[700]">
              Education
            </h4>
          </div>

          {pending ? (
            <div className="relative before:content-[''] before:absolute before:top-[10px] before:h-[calc(100%-10px)] before:bg-[#191923] before:right-[5px] before:w-[5px] animate-pulse">
              <div className="relative">
                <div className="bg-[#fafafc] absolute top-4 right-[-4px] w-[23px] h-[23px] opacity-0 rounded-full transition duration-400 ease-in-out"></div>
                <div className="absolute top-[8px] right-0 w-[15px] h-[15px] rounded-full border-[3px] border-solid border-[#ffc107] bg-[#1e1e28] shadow-md"></div>
                <div className=" md:mr-[40px] mr-[30px] bg-gradient-to-b from-[#2d2d3a] via-[#2b2b35] to-[#2b2b35] p-[30px] mb-[30px] shadow-md  relative after:content-[''] after:w-[10px] after:h-[10px] after:bg-[rgba(43,43,53,0.98)] after:-rotate-[-135deg] after:absolute after:top-[11px] after:right-[-5px] after:border-[transparent] after:border-t-[10px] after:border-r-[10px] after:rounded-tr-[50%]">
                  <div className="flex flex-wrap justify-between w-full">
                    <div className="">
                      <h5 className="text-[14px] font-semibold text-[#FAFAFC]"></h5>
                      <p className="mt-[5px] mb-[20px] text-[#646466] italic text-[12px]"></p>
                    </div>
                    <div className="mb-[15px] ">
                      <span className="bg-[#20202a] text-[#646466] py-[5px] px-[15px] ml-auto rounded-[15px] text-[10px]"></span>
                    </div>
                  </div>
                  <p className="mb-[1rem] leading-5 text-[12px]">Loading....</p>
                  <Link
                    href={"#"}
                    className="flex items-center  text-[#FFC107] gap-1 uppercase font-[600] relative text-[10px]"
                  >
                    <span>loading.. Diplome</span>
                    <IoIosArrowForward />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative before:content-[''] before:absolute before:top-[10px] before:h-[calc(100%-10px)] before:bg-[#191923] before:right-[5px] before:w-[5px]">
              {education &&
                education.map(
                  ({
                    id,
                    Form: {
                      tittle,
                      description,
                      enddate,
                      work,
                      tag,
                      fullname,
                      education,
                      startdate,
                    },
                  }: Background) => {
                    return (
                      <div className="relative" key={id}>
                        <div className="bg-[#fafafc] absolute top-4 right-[-4px] w-[23px] h-[23px] opacity-0 rounded-full transition duration-400 ease-in-out"></div>
                        <div className="absolute top-[8px] right-0 w-[15px] h-[15px] rounded-full border-[3px] border-solid border-[#ffc107] bg-[#1e1e28] shadow-md"></div>
                        <div className=" md:mr-[40px] mr-[30px] bg-gradient-to-b from-[#2d2d3a] via-[#2b2b35] to-[#2b2b35] p-[30px] mb-[30px] shadow-md  relative after:content-[''] after:w-[10px] after:h-[10px] after:bg-[rgba(43,43,53,0.98)] after:-rotate-[-135deg] after:absolute after:top-[11px] after:right-[-5px] after:border-[transparent] after:border-t-[10px] after:border-r-[10px] after:rounded-tr-[50%]">
                          <div className="flex flex-wrap justify-between w-full">
                            <div className="">
                              <h5 className="text-[14px] font-semibold text-[#FAFAFC]">
                                {tittle}
                              </h5>
                              <p className="mt-[5px] mb-[20px] text-[#646466] italic text-[12px]">
                                {fullname}
                              </p>
                            </div>
                            <div className="mb-[15px] ">
                              <span className="bg-[#20202a] text-[#646466] py-[5px] px-[15px] ml-auto rounded-[15px] text-[10px]">
                                {HandleDate(startdate)} -{" "}
                                {tittle === "Bachelor's degree"
                                  ? "present"
                                  : HandleDate(enddate)}
                              </span>
                            </div>
                          </div>
                          <p className="mb-[1rem] leading-5 text-[12px]">
                            {description}
                          </p>
                          <div
                            className="flex items-center  text-[#FFC107] gap-1 uppercase  font-[600] relative text-[10px]"
                          >
                            <span>{tag}</span>
                            {/* <IoIosArrowForward /> */}
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
            </div>
          )}
        </div>
        <div className="lg:w-1/2 flex-grow-0 flex-shrink-0 flex-basis-1/2 max-w-[100%] md:max-w-[50%]">
          <div className="self-center relative mb-[30px]">
            <h4 className=" text-[16px]  text-[#fafafc] text-center lg:text-start font-[700]">
              Work Experience
            </h4>
          </div>

          {pending ? (
            <div className="relative before:content-[''] before:absolute before:top-[10px] before:h-[calc(100%-10px)] before:bg-[#191923] before:right-[5px] before:w-[5px] animate-pulse">
              <div className="relative">
                <div className="bg-[#fafafc] absolute top-4 right-[-4px] w-[23px] h-[23px] opacity-0 rounded-full transition duration-400 ease-in-out"></div>
                <div className="absolute top-[8px] right-0 w-[15px] h-[15px] rounded-full border-[3px] border-solid border-[#ffc107] bg-[#1e1e28] shadow-md"></div>
                <div className=" md:mr-[40px] mr-[30px] bg-gradient-to-b from-[#2d2d3a] via-[#2b2b35] to-[#2b2b35] p-[30px] mb-[30px] shadow-md  relative after:content-[''] after:w-[10px] after:h-[10px] after:bg-[rgba(43,43,53,0.98)] after:-rotate-[-135deg] after:absolute after:top-[11px] after:right-[-5px] after:border-[transparent] after:border-t-[10px] after:border-r-[10px] after:rounded-tr-[50%]">
                  <div className="flex flex-wrap justify-between w-full">
                    <div className="">
                      <h5 className="text-[14px] font-semibold text-[#FAFAFC]"></h5>
                      <p className="mt-[5px] mb-[20px] text-[#646466] italic text-[12px]"></p>
                    </div>
                    <div className="mb-[15px] ">
                      <span className="bg-[#20202a] text-[#646466] py-[5px] px-[15px] ml-auto rounded-[15px] text-[10px]"></span>
                    </div>
                  </div>
                  <p className="mb-[1rem] leading-5 text-[12px]">Loading....</p>
                  <Link
                    href={"#"}
                    className="flex items-center  text-[#FFC107] gap-1 uppercase font-[600] relative text-[10px]"
                  >
                    <span>loading.. work</span>
                    <IoIosArrowForward />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative before:content-[''] before:absolute before:top-[10px] before:h-[calc(100%-10px)] before:bg-[#191923] before:right-[5px] before:w-[5px]">
              {work &&
                work.map(
                  ({
                    id,
                    Form: {
                      tittle,
                      description,
                      enddate,
                      work,
                      tag,
                      fullname,
                      education,
                      startdate,
                    },
                  }: Background) => {
                    return (
                      <div className="relative" key={id}>
                        <div className="bg-[#fafafc] absolute top-4 right-[-4px] w-[23px] h-[23px] opacity-0 rounded-full transition duration-400 ease-in-out"></div>
                        <div className="absolute top-[8px] right-0 w-[15px] h-[15px] rounded-full border-[3px] border-solid border-[#ffc107] bg-[#1e1e28] shadow-md"></div>
                        <div className=" md:mr-[40px] mr-[30px] bg-gradient-to-b from-[#2d2d3a] via-[#2b2b35] to-[#2b2b35] p-[30px] mb-[30px] shadow-md  relative after:content-[''] after:w-[10px] after:h-[10px] after:bg-[rgba(43,43,53,0.98)] after:-rotate-[-135deg] after:absolute after:top-[11px] after:right-[-5px] after:border-[transparent] after:border-t-[10px] after:border-r-[10px] after:rounded-tr-[50%]">
                          <div className="flex flex-wrap justify-between w-full">
                            <div className="">
                              <h5 className="text-[14px] font-semibold text-[#FAFAFC]">
                                {tittle}
                              </h5>
                              <p className="mt-[5px] mb-[20px] text-[#646466] italic text-[12px]">
                                {fullname}
                              </p>
                            </div>
                            <div className="mb-[15px] ">
                              <span className="bg-[#20202a] text-[#646466] py-[5px] px-[15px] ml-auto rounded-[15px] text-[10px]">
                                {HandleDate(startdate)} -{" "}
                                {tittle === "klipto"
                                  ? "present"
                                  : HandleDate(enddate)}
                              </span>
                            </div>
                          </div>
                          <p className="mb-[1rem] leading-5 text-[12px]">
                            {description}
                          </p>
                          <div
                            className="flex items-center  text-[#FFC107] gap-1 uppercase font-[600] relative text-[10px]"
                          >
                            <span>{tag}</span>
                            {/* <IoIosArrowForward /> */}
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyBackgroundsection;
