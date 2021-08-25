import { useQuery, gql } from "@apollo/client";
import Country from "./Country";
import Loader from "../components/loaders/loader";
import "../styles/loaders/loader.css";

/*
 * Used to create query and looping trough items
 */

const COUNTRIES_QUERY = gql`
  query CountriesQuery {
    countries {
      name
      topLevelDomain
      alpha3Code
      capital
      subregion
      population
      flag
      languages {
        iso639_1
        iso639_2
        name
        nativeName
      }
    }
  }
`;

const Countries = () => {
  const { loading, error, data } = useQuery(COUNTRIES_QUERY);

  if (loading)
    return (
      <div className="loading m-2">
        {" "}
        <Loader />
        Loading...
      </div>
    );
  if (error)
    return (
      <p class="alert alert-danger m-2" role="alert">
        Error :(
      </p>
    );

  return (
    <>
      {data.countries.map((country) => (
        <Country key={data.countries.alpha3Code} country={country} />
      ))}
    </>
  );
};

export default Countries;
