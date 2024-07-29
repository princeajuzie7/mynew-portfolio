import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsGlobe } from "react-icons/bs";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import { useEffect } from "react";
import { FaEllipsisV } from "react-icons/fa";

export function ProfileCard({
  HandleToggle,
  toggle,
}: {
  HandleToggle: () => void;
  toggle: boolean;
}) {
  const Socials = [
    {
      name: "linkedin",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/princeajuzie/",
    },
    {
      name: "x",
      icon: <FaSquareXTwitter />,
      link: "https://twitter.com/Princeajuzie7",
    },
    {
      name: "bio",
      icon: <BsGlobe />,
      link: "https://bio.link/princeaj",
    },
    {
      name: "github",
      icon: <FaGithubSquare />,
      link: "https://github.com/Princeajuzie",
    },
    {
      name: "mailto",
      icon: <IoIosMail />,
      link: "mailto:princeajuzie1@gmail.com",
    },
  ];

  return (
    <div className={`lg:flex block  bodys`}>
      <div
        className={`flex  ${
          toggle
            ? "lg:relative  absolute z-[999] w-[0px]  art-infomart art-active"
            : "relative"
        }`}
      >
        <section
          className={`bg-[#20202a]  h-full w-[290px] min-w-[290px] shadow-md  relative z-[999] ${
            toggle
              ? "   h-screen   z-[999] absolute  w-[290px] left-[-290px]"
              : "hidden lg:block "
          } `}
        >
          <div className="px-[20px]">
            <div className="flex items-center justify-self-center flex-col absolute left-0 top-0 z-[9999] w-full p-[30px] h-[235px] bg-gradient-to-r from-[rgba(37,37,50,0.98)] to-[rgba(35,35,45,0.98)]">
              <div className="w-[90px] h-[90px] m-auto rounded-lg mb-[15px] relative">
                <Image
                  height={300}
                  width={300}
                  src="/resources/images/avatar.jpeg"
                  alt="Prince Ajuzie"
                  className="w-full h-full rounded-full mx-auto object-contain"
                />

                <div className="relative">
                  <div className="absolute bottom-2 right-1 h-[12px] w-[12px] bg-[#FFC107] rounded-3xl z-50"></div>
                  <div className="absolute bottom-2 right-1 h-[12px] w-[12px] bg-white rounded-full  animate-ping "></div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center text-center">
                <h5 className="text-[#fafafc] flex items-center text-center gap-1 text-[14px] text-[800]">
                  Prince Ajuzie
                  <svg
                    width="15px"
                    height="15px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.5924 3.20027C9.34888 3.4078 9.22711 3.51158 9.09706 3.59874C8.79896 3.79854 8.46417 3.93721 8.1121 4.00672C7.95851 4.03705 7.79903 4.04977 7.48008 4.07522C6.6787 4.13918 6.278 4.17115 5.94371 4.28923C5.17051 4.56233 4.56233 5.17051 4.28923 5.94371C4.17115 6.278 4.13918 6.6787 4.07522 7.48008C4.04977 7.79903 4.03705 7.95851 4.00672 8.1121C3.93721 8.46417 3.79854 8.79896 3.59874 9.09706C3.51158 9.22711 3.40781 9.34887 3.20027 9.5924C2.67883 10.2043 2.4181 10.5102 2.26522 10.8301C1.91159 11.57 1.91159 12.43 2.26522 13.1699C2.41811 13.4898 2.67883 13.7957 3.20027 14.4076C3.40778 14.6511 3.51158 14.7729 3.59874 14.9029C3.79854 15.201 3.93721 15.5358 4.00672 15.8879C4.03705 16.0415 4.04977 16.201 4.07522 16.5199C4.13918 17.3213 4.17115 17.722 4.28923 18.0563C4.56233 18.8295 5.17051 19.4377 5.94371 19.7108C6.278 19.8288 6.6787 19.8608 7.48008 19.9248C7.79903 19.9502 7.95851 19.963 8.1121 19.9933C8.46417 20.0628 8.79896 20.2015 9.09706 20.4013C9.22711 20.4884 9.34887 20.5922 9.5924 20.7997C10.2043 21.3212 10.5102 21.5819 10.8301 21.7348C11.57 22.0884 12.43 22.0884 13.1699 21.7348C13.4898 21.5819 13.7957 21.3212 14.4076 20.7997C14.6511 20.5922 14.7729 20.4884 14.9029 20.4013C15.201 20.2015 15.5358 20.0628 15.8879 19.9933C16.0415 19.963 16.201 19.9502 16.5199 19.9248C17.3213 19.8608 17.722 19.8288 18.0563 19.7108C18.8295 19.4377 19.4377 18.8295 19.7108 18.0563C19.8288 17.722 19.8608 17.3213 19.9248 16.5199C19.9502 16.201 19.963 16.0415 19.9933 15.8879C20.0628 15.5358 20.2015 15.201 20.4013 14.9029C20.4884 14.7729 20.5922 14.6511 20.7997 14.4076C21.3212 13.7957 21.5819 13.4898 21.7348 13.1699C22.0884 12.43 22.0884 11.57 21.7348 10.8301C21.5819 10.5102 21.3212 10.2043 20.7997 9.5924C20.5922 9.34887 20.4884 9.22711 20.4013 9.09706C20.2015 8.79896 20.0628 8.46417 19.9933 8.1121C19.963 7.95851 19.9502 7.79903 19.9248 7.48008C19.8608 6.6787 19.8288 6.278 19.7108 5.94371C19.4377 5.17051 18.8295 4.56233 18.0563 4.28923C17.722 4.17115 17.3213 4.13918 16.5199 4.07522C16.201 4.04977 16.0415 4.03705 15.8879 4.00672C15.5358 3.93721 15.201 3.79854 14.9029 3.59874C14.7729 3.51158 14.6511 3.40781 14.4076 3.20027C13.7957 2.67883 13.4898 2.41811 13.1699 2.26522C12.43 1.91159 11.57 1.91159 10.8301 2.26522C10.5102 2.4181 10.2043 2.67883 9.5924 3.20027ZM16.3735 9.86314C16.6913 9.5453 16.6913 9.03 16.3735 8.71216C16.0557 8.39433 15.5403 8.39433 15.2225 8.71216L10.3723 13.5624L8.77746 11.9676C8.45963 11.6498 7.94432 11.6498 7.62649 11.9676C7.30866 12.2854 7.30866 12.8007 7.62649 13.1186L9.79678 15.2889C10.1146 15.6067 10.6299 15.6067 10.9478 15.2889L16.3735 9.86314Z"
                        fill="#FFC107"
                      />
                    </g>
                  </svg>
                </h5>
                <p className="text-[12px] w-[265px]">
                  Software engineer | Author @ Tech minds 💡 | SAAS Builder in
                  public
                </p>
              </div>
            </div>

            <div
              className="pt-[240px] pb-[50px] pr-0 pl-0  scroll-smooth scrollbar-none  "
              style={{ height: `calc(100vh - 80px)` }}
              id="my-scrollbar"
            >
              <div className="py-[15px]">
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center justify-between">
                    <h6 className="text-white text-[12px] font-[400]">
                      Residence:
                    </h6>
                    <span>Nigeria</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <h6 className="text-white text-[12px] font-[400]">city:</h6>
                    <span>PortHarcourt</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <h6 className="text-white text-[12px] font-[400]">Age:</h6>
                    <span>22</span>
                  </li>
                </ul>
              </div>
              <div className="w-full h-[1px] opacity-[0.3] bg-[#646466]"></div>
              <div className="py-[15px] flex items-center justify-between gap-3">
                <div className="w-[33.3%] text-center items-center flex flex-col">
                  <div className="relative w-[65%] mb-[15px] mr-auto mt-0 text-center flex m-auto items-center flex-col">
                    <svg
                      viewBox="0 0 100 100"
                      style={{
                        width: "100%",
                      }}
                      display="block"
                    >
                      <path
                        d="M50 3.5a46.5 46.5 0 110 93 46.5 46.5 0 110-93"
                        stroke="#191923"
                        strokeWidth={7}
                        fill="none"
                      />
                      <path
                        d="M50 3.5a46.5 46.5 0 110 93 46.5 46.5 0 110-93"
                        stroke="#FFC107"
                        strokeWidth={7}
                        strokeDasharray="100.273,292.273"
                        strokeDashoffset="30.2273"
                        fill="none"
                      />
                    </svg>
                    <div
                      className="absolute left-[50%] top-[50%] p-0  m-0 text-[#818184] "
                      style={{
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      30%
                    </div>
                  </div>
                  <h6 className="text-white text-[12px] font-[500]">French</h6>
                </div>
                <div className="w-[33.3%] text-center items-center flex flex-col">
                  <div className="relative w-[65%] mb-[15px] mr-auto mt-0 text-center flex m-auto items-center flex-col">
                    <svg
                      viewBox="0 0 100 100"
                      style={{
                        width: "100%",
                      }}
                      display="block"
                    >
                      <path
                        d="M50 3.5a46.5 46.5 0 110 93 46.5 46.5 0 110-93"
                        stroke="#eee"
                        strokeWidth={7}
                        fill="none"
                      />
                      <path
                        d="M50 3.5a46.5 46.5 0 110 93 46.5 46.5 0 110-93"
                        stroke="#FFC107"
                        strokeWidth={7}
                        strokeDasharray="292.273,292.273"
                        fill="none"
                      />
                    </svg>
                    <div
                      className="absolute left-[50%]  top-[50%] p-0  m-0 text-[#818184 "
                      style={{
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      100%
                    </div>
                  </div>
                  <h6 className="text-white text-[12px] font-[500]">Igbo</h6>
                </div>
                <div className="w-[33.3%] text-center items-center flex flex-col">
                  <div className="relative w-[65%] mb-[15px] mr-auto mt-0 text-center flex m-auto items-center flex-col">
                    <svg
                      viewBox="0 0 100 100"
                      style={{
                        width: "100%",
                      }}
                      display="block"
                    >
                      <path
                        d="M50 3.5a46.5 46.5 0 110 93 46.5 46.5 0 110-93"
                        stroke="#eee"
                        strokeWidth={7}
                        fill="none"
                      />
                      <path
                        d="M50 3.5a46.5 46.5 0 110 93 46.5 46.5 0 110-93"
                        stroke="#FFC107"
                        strokeWidth={7}
                        strokeDasharray="292.273,292.273"
                        fill="none"
                      />
                    </svg>
                    <div
                      className="absolute left-[50%]  top-[50%] p-0  m-0 text-[#818184 "
                      style={{
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      100%
                    </div>
                  </div>
                  <h6 className="text-white text-[12px] font-[600]">English</h6>
                </div>
              </div>
              <div className="w-full h-[1px] opacity-[0.3] bg-[#646466]"></div>
              <div>
                <Link
                  href={"/resources/svg/cv.pdf"}
                  target="_blank"
                  className="flex items-center gap-2 mt-4 font-[600] uppercase"
                  download="cv"
                >
                  <h2>Download Cv</h2>
                  <FaDownload />
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:h-[50px] h-[80px] lg:mt-0 px-[35px] flex items-center justify-center gap-9 bg-gradient-to-r from-[rgba(37,37,50,0.98)] to-[rgba(35,35,45,0.98)] absolute z-[99] w-full">
            {Socials.map(({ name, link, icon }) => {
              return (
                <Link
                  href={link}
                  target="_blank"
                  className="text-lg hover:text-[#ffff] hover:ease-in-out "
                  key={name}
                >
                  {icon}
                </Link>
              );
            })}
          </div>
        </section>
      </div>
      <div
        className={`flex  ${toggle ? "  relative z-[99]  " : " art-notactive"}`}
      >
        <div
          className={`${
            toggle
              ? " lg:w-0 lg:h-0 w-screen h-screen  relative bg-[#25252F]   opacity-90 z-[99]  "
              : " art-notactive"
          }`}
          onClick={HandleToggle}
        ></div>
      </div>
    </div>
  );
}

export default ProfileCard;
