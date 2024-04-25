import React from "react";

import { HeaderProps as Props } from "./Header.types";

const Header: React.FC<Props> = props => {
  const LinkedInIcon = (
    <svg
      className="w-7 h-7 text-gray-777 mr-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="24"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
        clipRule="evenodd"
      />
      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
    </svg>
  );

  const PdfIcon = (
    <svg
      className="w-7 h-7 text-gray-777 mr-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="24"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2 2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm-6 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h.5a2.5 2.5 0 0 0 0-5H5Zm1.5 3H6v-1h.5a.5.5 0 0 1 0 1Zm4.5-3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1.376A2.626 2.626 0 0 0 15 15.375v-1.75A2.626 2.626 0 0 0 12.375 11H11Zm1 5v-3h.375a.626.626 0 0 1 .625.626v1.748a.625.625 0 0 1-.626.626H12Zm5-5a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1h1a1 1 0 1 0 0-2h-2Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <header className="header" id="header">
      <div className="header__logo-box">
        <span className="heading-primary--main text-white  text-6xl tracking-normal ">
          {"<AM />"}
        </span>
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          {/* <span className="heading-primary--sub text-lg tracking-wider">
            Hello my name is
          </span> */}
          <span className="heading-primary--main text-6xl my-16">
            Andre Mogrovejo
          </span>
          <span className="heading-primary--sub">Frontend Engineer</span>
        </h1>

        <a
          className="btn btn--white btn--animated"
          type="button"
          href="https://www.linkedin.com/in/andre-mogrovejom/"
          target="_blank"
        >
          <div className="flex justify-center mr-auto ml-auto">
            {LinkedInIcon} Go to Linkedin
          </div>
        </a>
        <a
          className="btn btn--white btn--animated mt-4 ml-0 lg:mt-0 lg:ml-4"
          type="button"
          href="./cv.pdf"
          download="Andre_Mogrovejo_CV.pdf"
        >
          <div className="flex justify-center mr-auto ml-auto">
            {PdfIcon} Download CV
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
