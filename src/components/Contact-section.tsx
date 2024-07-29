import { FaUser, FaAt, FaEnvelope } from "react-icons/fa";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
export function Contactsection() {
  const formref = useRef<HTMLFormElement>();
  const [pending, setPending] = useState(false);
  const [sucesss, setsuccess] = useState("Send Message");
  const HandleSubmit = async (e: Event | any) => {
    e.preventDefault();
    setPending(true);
    try {
      const res = await emailjs.sendForm(
        `${process.env.NEXT_PUBLIC_SERVICEID}`,
        `${process.env.NEXT_PUBLIC_TEMPLEATEID}`,
        formref.current as unknown as string,
        { publicKey: `${process.env.NEXT_PUBLIC_OPTIONID}` }
      );

      if (res.status === 200) {
        setPending(false);
        setsuccess("Sent Successfully 🚀");
        setTimeout(() => {
          setsuccess("Send Message");
          if (typeof window !== "undefined") {
            window.location.reload();
          }
        }, 2000);
      }

      console.log(res);
    } catch (error) {
      setPending(false);
      setsuccess(`${error}`);
      setTimeout(() => {
        setsuccess("Send Message");
      }, 2000);
    }
  };

  return (
    <div>
      <div className="pt-[30px] lg:px-8 px-2">
        <div>
          <h4 className="text-[#FAFAFC] text-[16px] font-[700] lg:text-start mb-4 text-center">
            Contact Information
          </h4>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
          <div className="p-[30px] mb-[30px] bg-[#2C2C38]">
            <div className="py-[15px]">
              <ul className="flex flex-col">
                <li className="flex  justify-between mb-[5px]">
                  <h6 className="text-white text-[12px] font-[400]">Country:</h6>
                  <span>Nigeria</span>
                </li>
                <li className="flex  justify-between mb-[5px]">
                  <h6 className="text-white text-[12px] font-[400]">City:</h6>
                  <span>PortHarcourt</span>
                </li>
                <li className="flex  justify-between mb-[5px]">
                  <h6 className="text-white text-[12px] font-[400]">Street:</h6>
                  <span>64 Pipeline Rd</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-[30px] mb-[30px] bg-[#2C2C38]">
            <div className="py-[15px]">
              <ul className="flex flex-col">
                <li className="flex  justify-between mb-[5px]">
                  <h6 className="text-white text-[12px] font-[400]">Email:</h6>
                  <span>princeajuzie1@gmail.com</span>
                </li>
                <li className="flex  justify-between mb-[5px]">
                  <h6 className="text-white text-[12px] font-[400]">Linkedin:</h6>
                  <span>@princeajuzie</span>
                </li>
                <li className="flex  justify-between mb-[5px]">
                  <h6 className="text-white text-[12px] font-[400]">Skype:</h6>
                  <span>PrinceAjuize</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-[30px] mb-[30px] bg-[#2C2C38]">
            <div className="py-[15px]">
              <ul className="flex flex-col">
                <li className="flex  justify-between mb-[5px]">
                  <h6 className="text-white text-[12px] font-[400]">Personal:</h6>
                  <span>+234 (808) 50 34 076</span>
                </li>
                <li className="flex  justify-between mb-[5px]">
                  <h6 className="text-white text-[12px] font-[400]">Office:</h6>
                  <span>+234 (903) 55 25 951</span>
                </li>
                <li className="flex  justify-between mb-[5px]">
                  <h6 className="text-white text-[12px] font-[400]">Support service:</h6>
                  <span>+234 (706) 23 62 262</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-[#FAFAFC] text-[16px] font-[700] lg:text-start mb-4 text-center">
            Get in touch
          </h4>
          <div>
            <div className="bg-[#2D2D39] p-[30px] mb-[30px] ">
              <form
                onSubmit={HandleSubmit}
                ref={formref as React.RefObject<HTMLFormElement>}
              >
                <div>
                  <div className="artinput">
                    <input
                      type="text"
                      name="full-Name"
                      id="name"
                      placeholder="Name"
                      readOnly={pending}
                      required
                      className="h-[50px] w-full text-[#fafafc] pl-[65px] bg-[#242430] pr-[15px] shadow-md mb-0 outline-none inputfocus "
                    />
                    <label
                      htmlFor="name"
                      className="text-center justify-center flex items-center absolute text-[#8c8c8e] bg-[#20202a] h-[50px] w-[50px] py-0 px-[15px] uppercase text-[11px] leading-[15px] cursor-text font-[500] top-0 left-0 focus:"
                    >
                      <FaUser className="font-[500] " />
                    </label>
                  </div>
                  <div></div>
                </div>
                <div>
                  <div className="artinput">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                      readOnly={pending}
                      className="h-[50px] w-full text-[#fafafc] pl-[65px] bg-[#242430] pr-[15px] shadow-md mb-0 outline-none inputfocus "
                    />
                    <label
                      htmlFor="email"
                      className="text-center justify-center flex items-center absolute text-[#8c8c8e] bg-[#20202a] h-[50px] w-[50px] py-0 px-[15px] uppercase text-[11px] leading-[15px] cursor-text font-[500] top-0 left-0 focus:"
                    >
                      <FaAt className="font-[500] " />
                    </label>
                  </div>
                  <div></div>
                </div>
                <div>
                  <div className="artinput">
                    <textarea
                      name="message"
                      id="message"
                      required
                      readOnly={pending}
                      className=" w-full text-[#fafafc] h-[170px] pl-[65px] bg-[#242430] py-[20px] pr-[15px] shadow-md mb-0 outline-none inputfocus "
                      placeholder="Message"
                    ></textarea>

                    <label
                      htmlFor="message"
                      className="text-center justify-center flex pt-[20px] absolute text-[#8c8c8e] bg-[#20202a] h-[97%] w-[50px] py-0 px-[15px] uppercase text-[11px] leading-[15px] cursor-text font-[500] top-0 left-0 focus:"
                    >
                      <FaEnvelope className="font-[500] " />
                    </label>
                  </div>
                  <div></div>
                </div>
                <div>
                  <input
                    type="submit"
                    value={`${pending ? "sending... 🚀🚀" : sucesss}`}
                    onSubmit={HandleSubmit}
                    disabled={pending}
                    className={`text-[12px] text-[#20202a]  rounded-md ${
                      pending
                        ? "bg-[#ffc1074a] cursor-not-allowed"
                        : "cursor-pointer"
                    }   leading-[1.5px] transition-[0.4s] ease-in-out h-[45px] py-0 px-[35px] bg-[#FFC107] font-[600]`}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactsection;
