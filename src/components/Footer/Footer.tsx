import React from "react";

import { FooterProps as Props } from "./Footer.types";

const Footer: React.FC<Props> = props => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <span className="footer__logo heading-primary--main text-white text-6xl tracking-normal">
          {"<AM />"}
        </span>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a
                  href="https://www.linkedin.com/in/andre-mogrovejom/"
                  target="_blank"
                  className="footer__link"
                >
                  {" "}
                  Linkedin{" "}
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://github.com/AndreMogrovejo"
                  target="_blank"
                  className="footer__link"
                >
                  {" "}
                  Enterprise Github{" "}
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://github.com/AndreMogrovejoM"
                  target="_blank"
                  className="footer__link"
                >
                  {" "}
                  Personal Github{" "}
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://www.instagram.com/andrew_mm96/"
                  target="_blank"
                  className="footer__link"
                >
                  {" "}
                  Instagram{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Thank you to dedicate your time to see my{" "}
            <a
              href="https://www.linkedin.com/in/andre-mogrovejom/"
              target="_blank"
              className="footer__link"
            >
              Portfolio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
