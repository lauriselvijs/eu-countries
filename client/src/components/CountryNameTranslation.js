import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const COUNTRY_NAME_QUERY = gql`
  query CountryNameQuery($alpha3Code: String!) {
    country(alpha3Code: $alpha3Code) {
      translations {
        de
        es
        fr
        ja
        it
        br
        pt
        nl
        hr
        fa
      }
    }
  }
`;

const CountryNameTranslation = ({ match: { params } }) => {
  let { alpha3Code } = params;

  const { loading, error, data } = useQuery(COUNTRY_NAME_QUERY, {
    variables: { alpha3Code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { de, es, fr, ja, it, br, pt, hr, fa } = data.country.translations;

  return (
    <div>
      <h1 className="display-4 my3">Country Name Translation</h1>
      <ul className="list-group">
        <li className="list-group-item">German: {de}</li>
        <li className="list-group-item">Spanish: {es}</li>
        <li className="list-group-item">French: {fr}</li>
        <li className="list-group-item">Japanese: {ja}</li>
        <li className="list-group-item">Italian: {it}</li>
        <li className="list-group-item">Brazilian: {br}</li>
        <li className="list-group-item">Portuguese: {pt}</li>
        <li className="list-group-item">Croatian: {hr}</li>
        <li className="list-group-item">Persian: {fa}</li>
      </ul>
      <Link to={`/`} className="btn btn-secondary m-2">
        Back To Country List
      </Link>
    </div>
  );
};

export default CountryNameTranslation;
