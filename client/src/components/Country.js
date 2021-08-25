import { Link } from "react-router-dom";

/*
 * Single country item view used to display country information
 */

const Country = ({
  country: {
    name,
    topLevelDomain,
    alpha3Code,
    capital,
    subregion,
    population,
    flag,
    languages: [{ iso639_1, iso639_2, name: languageName, nativeName }],
  },
}) => {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-6">
          <h4>
            {name}, <span class="h6">{alpha3Code}</span>
          </h4>
          <p>Top Level Domain: {topLevelDomain}</p>
          <p>Capital: {capital}</p>
          <p>Subregion: {subregion}</p>
          <p>
            Population:{" "}
            {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
          <img
            src={flag}
            alt="Flag"
            style={{
              width: 300,
              display: "block",
              margin: "auto",
              border: "20px solid rgba(0, 0, 0, 0.05)",
            }}
          />
        </div>
        <div className="col-md-3">
          <h5>Language</h5>
          <p>ISO639 1: {iso639_1}</p>
          <p>ISO639 2: {iso639_2}</p>
          <p>Name: {languageName}</p>
          <p>Native Name: {nativeName}</p>
          <Link to={`/translation/${alpha3Code}`} className="btn btn-secondary">
            Country Name Translations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Country;
