import React from "react";

import { AboutProps as Props } from "./About.types";

const About: React.FC<Props> = props => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum, quisquam.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum, quisquam.
          </p>

          <a href="#" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              srcSet="./nat-1.jpg 300w, ./nat-1-large.jpg 1000w"
              alt="Photo 1"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              className="composition__photo composition__photo--p1"
              src="./nat-1-large.jpg"
            />
            <img
              srcSet="./nat-2.jpg 300w, ./nat-2-large.jpg 1000w"
              alt="Photo 2"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              className="composition__photo composition__photo--p2"
              src="./nat-2-large.jpg"
            />
            <img
              srcSet="./nat-3.jpg 300w, ./nat-3-large.jpg 1000w"
              alt="Photo 3"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              className="composition__photo composition__photo--p3"
              src="./nat-3-large.jpg"
            />

            <img
              src="./nat-1-large.jpg"
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src="./nat-2-large.jpg"
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src="./nat-3-large.jpg"
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
