import { useQuery, gql } from "@apollo/client";
import Country from "./Country";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data.countries.map((country) => (
        <Country key={data.countries.alpha3Code} country={country} />
      ))}
    </>
  );
};

export default Countries;
