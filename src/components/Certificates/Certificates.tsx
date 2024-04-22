import React from "react";

import { ToursProps as Props } from "./Certificates.types";

const Certificates: React.FC<Props> = props => {
  const LinkedInIcon = (
    <svg
      className="w-7 h-7 text-gray-777 mr-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
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

  return (
    <section className="section-certificates" id="section-certificates">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Certificates</h2>
      </div>

      <div className="row">
        <div className="col-1-of-4">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  The sea explorer
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>3 day certificates</li>
                  <li>Up to 30 people</li>
                  <li>2 tour guides</li>
                  <li>Sleep in cozy hotels</li>
                  <li>Difficulty: easy</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$297</p>
                </div>
                <a href="#popup" className="btn btn--white">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  The Forest hiker
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>7 day certificates</li>
                  <li>Up to 40 people</li>
                  <li>6 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: medium</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$397</p>
                </div>
                <a href="#popup" className="btn btn--white">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  The snow adventure
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>5 day certificates</li>
                  <li>Up to 15 people</li>
                  <li>3 tour guides</li>
                  <li>Sleep in provide tentnts</li>
                  <li>Difficulty: defficult</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$497</p>
                </div>
                <a href="#popup" className="btn btn--white">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  The snow adventure
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>5 day certificates</li>
                  <li>Up to 15 people</li>
                  <li>3 tour guides</li>
                  <li>Sleep in provide tentnts</li>
                  <li>Difficulty: defficult</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$497</p>
                </div>
                <a href="#popup" className="btn btn--white">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn btn--primary">
          <div className="flex justify-center mr-auto ml-auto">
            {LinkedInIcon} Go to Linkedin
          </div>
        </a>
      </div>
    </section>
  );
};

export default Certificates;
