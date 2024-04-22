import React from "react";

import { PopupProps as Props } from "./Popup.types";

const Popup: React.FC<Props> = props => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src="./nat-8.jpg" alt="Tour photo" className="popup__img" />
          <img src="./nat-9.jpg" alt="Tour photo" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-certificates" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">
            Start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Please read these term before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
            aspernatur libero repellat quis consequatur ducimus quam nisi
            exercitationem omnis earum qui. ur ducimus quam nisi exercitationem
            omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat
            quis consequatur ducimus quam nisi exercitationem omnis earum qui.
          </p>
          <a href="#" className="btn btn--primary">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
