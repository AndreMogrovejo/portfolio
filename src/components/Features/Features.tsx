import React from "react";

import { FeaturesProps as Props } from "./Features.types";

const Features: React.FC<Props> = props => {
  return (
    <section className="section-features">
      <div className="flex flex-col">
        <div className="mr-auto ml-auto">
          <h1 className="heading-primary">
            <span className="heading-primary--sub text-2lg tracking-wider">
              My experience
            </span>
          </h1>
        </div>

        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-world"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Lead Frontend Engineer
              </h3>
              <p className="feature-box__text">
                <span className="font-bold">
                  Since December 2023 Trade.ec Remote - Ecuador
                </span>
                <br />I currently oversee a dynamic three-person team engaged in
                two distinct projects utilizing Next.js and Expo React Native
                frameworks. My role involves leading all client meetings to
                ensure a thorough understanding of their requirements and
                project objectives, enabling us to stay ahead of deadlines and
                deliverables.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-compass"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Ssr Frontend Engineer
              </h3>
              <p className="feature-box__text">
                <span className="font-bold">
                  From December 2021 to December 2023 (2 years 1 month) Trade.ec
                  Remote - Ecuador
                </span>
                <br />
                Developed a platform based on React, including Next.js and React
                Native/Expo for mobile applications. Our main customer is KFC,
                along with all their sub-brands such as Appedir, Kioscos, El
                Español, Wendy's, Juan Valdez, etc.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-map"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Frontend Engineer
              </h3>
              <p className="feature-box__text">
                <span className="font-bold">
                  From December 2020 to December 2021 (1 year 1 month) TECSUP
                  DIGITAL TRANSFORMATION Remote - Peru
                </span>
                <br />
                Developed a virtual fair registration and administration panel
                application for Agromin in 2021 based on React with Redux. I
                have also built administrator panels, auction web pages, and
                single-page applications, including a video streaming platform,
                panel administrators, and other single-page applications. We
                utilized React, AWS and Firebase cloud services for these
                projects.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-heart"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Software Engineer Intern
              </h3>
              <p className="feature-box__text">
                <span className="font-bold">
                  Jun 2020 - Dec 2020 (7 months) UNSA Hybrid - Peru
                </span>
                <br />
                Integrating changes at system support, used to manage University
                grade grading system. Integrating changes at system support,
                used to manage University grade grading system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
