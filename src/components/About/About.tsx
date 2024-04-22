import React from "react";

import { AboutProps as Props } from "./About.types";

const About: React.FC<Props> = props => {
  const renderImages = (
    <div className="col-1-of-2">
      <div className="composition">
        <img
          srcSet="./Kfc.png 300w, ./Kfc.png 1000w"
          alt="KFC"
          sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
          className="composition__photo composition__photo--p1"
          src="./Kfc.png"
        />
        <img
          srcSet="./Appedir.png 300w, ./Appedir.png 1000w"
          alt="Appedir"
          sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
          className="composition__photo composition__photo--p2"
          src="./Appedir.png"
        />
        <img
          srcSet="./Multicines.png 300w, ./Multicines.png 1000w"
          alt="Multicines"
          sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
          className="composition__photo composition__photo--p3"
          src="./Multicines.png"
        />
      </div>
    </div>
  );

  return (
    <section className="section-about" id="about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">About me</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Lead Frontend Engineer with +3 years of experience
          </h3>
          <p className="paragraph">
            Currently, I am working for a leading technology company in South
            America called Trade.ec, where I have worked on large projects such
            as:{" "}
            <span className="font-bold">
              KFC, Appedir, Multicines, Juan Valdez, Wendys, El Español Gourmet
            </span>{" "}
            among others.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            My rol focus on
          </h3>
          <p className="paragraph">
            I led the development and implementation of new features in the web
            and mobile applications of{" "}
            <span className="font-bold">
              Multicines, Wendys, and Pure Nature
            </span>
            , among others. Although I continue to provide support to the rest
            of the projects in which I had the opportunity to participate.
          </p>

          <a
            href="https://trdglobal.io/trabajos.html"
            target="_blank"
            className="btn-text"
          >
            Learn more &rarr;
          </a>
        </div>
        {renderImages}
      </div>
    </section>
  );
};

export default About;
