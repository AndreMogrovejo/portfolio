import React from "react";

import { ToursProps as Props } from "./Projects.types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { Icon } from "@iconify-icon/react";
import {
  renderAWS,
  renderAxios,
  renderBabel,
  renderBugSnag,
  renderCommitizen,
  renderEslint,
  renderExpo,
  renderFirebase,
  renderGit,
  renderHusky,
  renderJavascript,
  renderJest,
  renderNext,
  renderPrettier,
  renderReact,
  renderReactNative,
  renderReactQuery,
  renderRedux,
  renderRestApi,
  renderStyledComponents,
  renderSupabase,
  renderSwift,
  renderTailwind,
  renderTurbo,
  renderTypescript,
  renderVercel,
  renderVite,
  renderZustand
} from "./Projects.helper";

const Projects: React.FC<Props> = props => {
  const MulticinesProject = (
    <div className="col-1-of-2">
      <div className="card">
        <div className="card__side card__side--front relative">
          <div className="card__picture card__picture--1">&nbsp;</div>
          <a
            type="button"
            href="https://www.multicines.com.ec/en"
            target="_blank"
            className="hidden w-full h-1/2 absolute top-0 left-0 z-99 lg:block "
          />
          <h4 className="card__heading">
            <span className="card__heading-span card__heading-span--1">
              Multicines
            </span>
          </h4>
          <div className="card__details ">
            <ul>
              <li className="font-light">
                I work as a Lead Frontend Engineer, taking on responsibilities
                such as team management, decision-making when solving problems
                or improving existing workflows, client communication,
                coordinating and scheduling deployments with new versions of the
                application, reviewing and correcting PRs, as well as fostering
                continuous improvement of the project.
              </li>
              <li className="flex justify-center">
                {renderNext}
                {renderReactNative}
                {renderExpo}
                {renderReactQuery}
                {renderZustand}
                {renderStyledComponents}
                {renderFirebase}
                {renderTypescript}
              </li>

              <li className="flex justify-center">
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
        <div className="card__side card__side--back card__side--back-1 h-12 lg:h-6">
          <div className="card__cta"></div>
        </div>
      </div>
    </div>
  );

  const AppedirProject = (
    <div className="col-1-of-2">
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture card__picture--2">&nbsp;</div>
          <a
            type="button"
            href="https://www.descarga-appedir.com"
            target="_blank"
            className="hidden w-full h-1/2 absolute top-0 left-0 z-99 lg:block "
          />
          <h4 className="card__heading">
            <span className="card__heading-span card__heading-span--2">
              Appedir
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li className="font-light">
                I was involved in this project for +2 years, during which I was
                responsible for carrying out necessary updates from React Native
                63 to 72. This involved making native changes for both Android
                and iOS platforms, as well as enhancing the project's
                scalability. Additionally, I led the migration of the global
                state manager from Redux to Context API. I also conducted native
                development in Swift for creating various widgets on iOS,
                including the development and integration of Live-Activities.
              </li>
              <li className="flex justify-center">
                {renderReactNative}
                {renderReactQuery}
                {renderRedux}
                {renderFirebase}
                {renderTypescript}
                {renderJavascript}
                {renderSwift}
                {renderGit}
              </li>

              <li className="flex justify-center">
                {renderBugSnag}
                {renderJest}
                {renderEslint}
                {renderCommitizen}
                {renderBabel}
                {renderPrettier}
                {renderAxios}
                {renderHusky}
              </li>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-2 h-12 lg:h-6">
          <div className="card__cta"></div>
        </div>
      </div>
    </div>
  );

  const KfcProject = (
    <div className="col-1-of-2">
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture card__picture--3">&nbsp;</div>
          <a
            type="button"
            href="https://apps.apple.com/cl/app/kfc-app-ec-co-cl-ar-y-ve/id1277450431"
            target="_blank"
            className="hidden w-full h-1/2 absolute top-0 left-0 z-99 lg:block "
          />
          <h4 className="card__heading">
            <span className="card__heading-span card__heading-span--3">
              Kfc
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li className="font-light">
                I've won several contests within the frontend team, including a
                hackathon aimed at accelerating the development of this
                application, as it had very close deadlines. Among my main
                responsibilities, I particularly excelled in creating Expo
                plugins derived from native development to seamlessly integrate
                essential functionalities into Expo.
              </li>
              <li className="flex justify-center">
                {renderReactNative}
                {renderExpo}
                {renderReactQuery}
                {renderZustand}
                {renderFirebase}
                {renderTypescript}
              </li>

              <li className="flex justify-center">
                {renderBugSnag}
                {renderJest}
                {renderGit}
                {renderEslint}
                {renderCommitizen}
                {renderBabel}
                {renderJavascript}
              </li>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-3 h-12 lg:h-6">
          <div className="card__cta"></div>
        </div>
      </div>
    </div>
  );

  const KonectaProject = (
    <div className="col-1-of-2">
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture card__picture--4">&nbsp;</div>
          <a
            type="button"
            href="https://www.konecta-group.com/es"
            target="_blank"
            className="hidden w-full h-1/2 absolute top-0 left-0 z-99 lg:block "
          />
          <h4 className="card__heading">
            <span className="card__heading-span card__heading-span--4">
              Konecta
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li className="font-light">
                <span className="font-bold">FREELANCER:</span> This was a
                freelance project developed under the name Konecta, serving as a
                payment system with primary support from Interbank. My role
                encompassed defining requirements and scopes, integrating the
                payment platform, and leading the development process and
                delivery timelines with my development team.
              </li>
              <li className="flex justify-center">
                {renderVite}
                {renderReact}
                {renderReactQuery}
                {renderSupabase}
                {renderTailwind}
                {renderTypescript}
              </li>

              <li className="flex justify-center">
                {renderVercel}
                {renderGit}
                {renderEslint}
                {renderCommitizen}
                {renderBabel}
                {renderJavascript}
              </li>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-4 h-12 lg:h-6">
          <div className="card__cta"></div>
        </div>
      </div>
    </div>
  );

  const LiveSubastasProject = (
    <div className="col-1-of-2">
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture card__picture--5">&nbsp;</div>
          <a
            type="button"
            href="https://dev.livesubastas.com"
            target="_blank"
            className="hidden w-full h-1/2 absolute top-0 left-0 z-99 lg:block "
          />
          <h4 className="card__heading">
            <span className="card__heading-span card__heading-span--5">
              LiveSubastas
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li className="font-light">
                <span className="font-bold">FREELANCER:</span> This was a
                freelance project developed under the name Live Subastas,
                focusing on online auction item sales. Given the need for
                real-time service solutions, we implemented Web Sockets
                technology. As the primary frontend developer, I maintained
                continuous communication with the client to understand and
                fulfill their requirements effectively.
              </li>
              <li className="flex justify-center">
                {renderVite}
                {renderReact}
                {renderReactQuery}
                {renderRestApi}
                {renderAWS}
                {renderTailwind}
                {renderTypescript}
              </li>

              <li className="flex justify-center">
                {renderRedux}
                {renderGit}
                {renderEslint}
                {renderCommitizen}
                {renderBabel}
                {renderJavascript}
              </li>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-5 h-12 lg:h-6">
          <div className="card__cta"></div>
        </div>
      </div>
    </div>
  );

  const AeroAdministratorProject = (
    <div className="col-1-of-2">
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture card__picture--6">&nbsp;</div>
          <a
            type="button"
            href="https://plataforma.sector-aeronautico.com"
            target="_blank"
            className="hidden w-full h-1/2 absolute top-0 left-0 z-99 lg:block "
          />
          <h4 className="card__heading">
            <span className="card__heading-span card__heading-span--6">
              Aeronautica
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li className="font-light">
                <span className="font-bold">FREELANCER:</span> This was a
                freelance project developed under the name Aeronautica, an
                extensive web service aimed at promoting instructional learning
                through recorded online classes. The system comprises three main
                modules: one designed for students, another for teachers'
                workflows, and a third that serves as an administrative panel
                for comprehensive system management, including payment
                calculations and analytics.
              </li>
              <li className="flex justify-center">
                {renderVite}
                {renderReact}
                {renderReactQuery}
                {renderTailwind}
                {renderFirebase}
                {renderTypescript}
                {renderRestApi}
              </li>

              <li className="flex justify-center">
                {renderRedux}
                {renderGit}
                {renderEslint}
                {renderCommitizen}
                {renderBabel}
                {renderJavascript}
              </li>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-6 h-12 lg:h-6">
          <div className="card__cta"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="section-projects" id="section-projects">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most Recent Projects</h2>
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
        className=""
      >
        <SwiperSlide>
          <div className="row py-4">
            {MulticinesProject}
            {AppedirProject}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row py-4">
            {KfcProject}
            {KonectaProject}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row py-4">
            {LiveSubastasProject}
            {AeroAdministratorProject}
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="u-center-text u-margin-top-huge gap-4">
        <a
          type="button"
          href="https://www.linkedin.com/in/andre-mogrovejom/"
          target="_blank"
          className="btn btn--primary"
        >
          <div className="flex justify-center mr-auto ml-auto">
            See Certificates &rarr;
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
