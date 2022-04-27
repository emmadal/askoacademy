import React, { memo } from "react";

const BrowseCourse = () => {
  return (
    <div className="css-whvxmy-Home">
      <h3 id="career" className="css-3ejmj1-Home text-white fw-bold">
        TYPE D'ENSEIGNEMENT
      </h3>
      <div className="css-104js7c-Home mt-3">
        <a
          className="ie-accentBottom css-jhu4e0-Home"
          href="/tracks/data-scientist-with-python"
        >
          <span className="jsx-c80dbc0b64ccf72d css-1rnz58g-Home">
            ENSEIGNEMENT PRIMAIRE
          </span>
        </a>
        <a
          className="ie-accentBottom css-jhu4e0-Home"
          href="/tracks/machine-learning-scientist-with-python"
        >
          <span className="jsx-c80dbc0b64ccf72d css-1rnz58g-Home">
            ENSEIGNEMENT SECONDAIRE
          </span>
        </a>
        <a
          className="ie-accentBottom css-jhu4e0-Home"
          href="/tracks/data-engineer-with-python"
        >
          <span className="jsx-c80dbc0b64ccf72d css-1rnz58g-Home">
            ENSEIGNEMENT SUPÉRIEUR
          </span>
        </a>
        <a
          className="ie-accentBottom css-jhu4e0-Home"
          href="/tracks/data-analyst-with-sql-server"
        >
          <span className="jsx-c80dbc0b64ccf72d css-1rnz58g-Home">
            COURS A DOMICILE
          </span>
        </a>
        <a
          className="ie-accentBottom css-jhu4e0-Home"
          href="/tracks/statistician-with-r"
        >
          <span className="jsx-c80dbc0b64ccf72d css-1rnz58g-Home">
            COACHING
          </span>
        </a>
      </div>
      <div className="css-yh0384-Home"></div>
    </div>
  );
};

export default memo(BrowseCourse);
