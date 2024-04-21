import React from "react";

import { FooterProps as Props } from "./Footer.types";

const Footer: React.FC<Props> = props => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet="./logo-green-small-1x.png 1x, ./logo-green-small-2x.png 2x"
            media="(max-width: 37.5em)"
          />
          <img
            srcSet="./logo-green-1x.png 1x, ./logo-green-2x.png 2x"
            alt="full logo"
            className="footer__logo"
            src="./logo-green-2x.png"
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer__link">
                  {" "}
                  Company{" "}
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  {" "}
                  Contact us{" "}
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  {" "}
                  Careers{" "}
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  {" "}
                  Privacy policy{" "}
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  {" "}
                  Terms{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built my{" "}
            <a href="" className="footer__link">
              Andre Mogrovejo
            </a>{" "}
            for his online course
            <a href="" className="footer__link">
              Advanced CSS and Sass
            </a>
            . Copyright &copy; by Andre Mogrovejo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
