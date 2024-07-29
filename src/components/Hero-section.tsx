import Image from "next/image";
import User2 from "../../public/resources/images/face.svg";
import { TypeAnimation } from "react-type-animation";
import { IoIosArrowForward } from "react-icons/io";

export function Herosection() {
  function Scrolto() {
    const id = document.getElementById("contact");
    if (id) {
      id.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      throw new Error("Section not found!");
    }
  }

  function scrollToWork() {
    const id = document.getElementById("work");
    if (id) {
      id.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      throw new Error("Section not found!");
    }
  }
  return (
    <div className="xl:px-8 lg:px-2 lg:pt-8 px-[10px] py-0  relative w-full ">
      <div
        className="  transition duration-550 ease-in-out p bg-cover bg-center shadow-md  z-50 w-full rounded-md  relative "
        style={{
          backgroundImage: `url(/resources/images/bg.jpg)`,
          backgroundPosition: "center",
        }}
      >
        <div className=" relative lg:flex gap-11 lg:px-20 lg:py-[50px] px-[30px] py-[60px]  lg:items-center lg:justify-center rounded-md bg-gradient-to-r from-[rgba(45,45,58,0.9)] via-[rgba(45,45,58,0.7)] to-[rgba(43,43,53,0.7)] ">
          <div className=" lg:w-[calc(100vw-550px)] ">
            <div className="  self-center flex flex-col gap-4 items-center text-center lg:text-start lg:justify-start lg:items-start justify-center   lg:flex lg:flex-col lg:gap-4">
              <h1 className="mb-15 text-white lg:text-[36px]  text-[46px]  font-[800]">
                Join Me on a Journey <br />
                Through Tech
              </h1>
              <div className="art-lg-text art-code lg:mb-[25px] mb-[10px] text-[#fff] text-[16px] lg:min-h-0 min-h-[70px]">
                &lt;<i className="text-[#FFC107] text-[16px]">code</i>&gt; I
                build{" "}
                <TypeAnimation
                  sequence={[
                    "real time server.", // Types 'One'
                    1000, // Waits 1s
                    "web applications", // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    "mobile application", // Types 'Three' without deleting 'Two'
                    1000,
                    "automation tools.",
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{
                    fontSize: "16px",
                    display: "inline-block",
                    color: "#fff",
                  }}
                />
                <span>
                  <span className="wrap"></span>
                </span>
                &lt;<i className="text-[#FFC107]">/code</i>&gt;
              </div>
              <div className="art-buttons-frame lg:flex items-center gap-5 lg:gap-3 lg:flex-row flex flex-col  text-center">
                <div
                  className="py-[15px] px-[35px] bg-[#FFC107] rounded-md uppercase text-[#20202a] text-[700] mr-[15px] cursor-pointer"
                  onClick={scrollToWork}
                >
                  <span className="font-[600]">Explore now</span>
                </div>
                <div
                  className="flex text-[#fff] cursor-pointer items-center gap-2 uppercase text-center  hover:transition-transform hover:duration-400 hover:ease-in-out"
                  onClick={Scrolto}
                >
                  <span className="text-center">Hire me</span>
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
          <Image
            src={User2}
            height={200}
            width={200}
            alt="prince ajuzie"
            className="art-banner-photo h-auto   lg:w-[320px] lg:block hidden  right-8 bottom-0 absolute"
          />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
