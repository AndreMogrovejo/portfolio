import React from "react";

import { ToursProps as Props } from "./Projects.types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { Icon } from "@iconify-icon/react";
import {
  renderBabel,
  renderBugSnag,
  renderCommitizen,
  renderEslint,
  renderExpo,
  renderFirebase,
  renderGit,
  renderJavascript,
  renderJest,
  renderNext,
  renderReactNative,
  renderReactQuery,
  renderTailwind,
  renderTurbo,
  renderTypescript,
  renderZustand
} from "./Projects.helper";

const Projects: React.FC<Props> = props => {
  const MulticinesProject = (
    <div className="col-1-of-2">
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture card__picture--1">&nbsp;</div>
          <h4 className="card__heading">
            <span className="card__heading-span card__heading-span--1">
              Multicines
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li className="font-light">
                I led the development and implementation of new features in the
                web and mobile applications of{" "}
                <span className="font-normal">
                  Multicines, Wendys, and Pure Nature
                </span>
                , among others. Although I continue to provide support to the
                rest of the projects in which I had the opportunity to
                participate.
              </li>
              <li className="flex">
                {renderNext}
                {renderReactNative}
                {renderExpo}
                {renderReactQuery}
                {renderZustand}
                {renderTailwind}
                {renderFirebase}
                {renderTypescript}
              </li>

              <li className="flex">
                {renderBugSnag}
                {renderJest}
                {renderGit}
                {renderTurbo}
                {renderEslint}
                {renderCommitizen}
                {renderBabel}
                {renderJavascript}
              </li>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-1 h-12">
          <div className="card__cta"></div>
        </div>
      </div>
    </div>
  );

  const AppedirProject = (
    <div className="col-1-of-2">
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture card__picture--3">&nbsp;</div>
          <h4 className="card__heading">
            <span className="card__heading-span card__heading-span--3">
              Appedir
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li>Next.js</li>
              <li>React Native / Expo</li>
              <li>Api Rest</li>
              <li>Sleep in cozy hotels</li>
              <li>Difficulty: easy</li>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-3">
          <div className="card__cta">
            {/* <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">$397</p>
            </div> */}
            <a href="#popup" className="btn btn--white">
              Check it out!
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const KfcProject = (
    <div className="col-1-of-2">
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture card__picture--2">&nbsp;</div>
          <h4 className="card__heading">
            <span className="card__heading-span card__heading-span--2">
              Kfc
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li>Next.js</li>
              <li>React Native / Expo</li>
              <li>Api Rest</li>
              <li>Sleep in cozy hotels</li>
              <li>Difficulty: easy</li>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-2">
          <div className="card__cta">
            {/* <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">$397</p>
            </div> */}
            <a href="#popup" className="btn btn--white">
              Check it out!
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="section-projects" id="section-projects">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Projects</h2>
      </div>

      <Swiper
        pagination={{
          type: "progressbar"
        }}
        style={{
          // @ts-ignore
          "--swiper-theme-color": "#535C91"
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="row mt-1 mb-1">
            {MulticinesProject}
            {AppedirProject}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row mt-1 mb-1">
            {KfcProject}
            {MulticinesProject}
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn btn--primary">
          <div className="flex justify-center mr-auto ml-auto">
            <Icon
              icon="ri:linkedin-fill"
              className="text-gray-777 mr-2"
              width={24}
              height={24}
            />
            Go to Linkedin
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
