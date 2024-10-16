import { useQuery } from "@apollo/client";
import { GET_COUNTRY_DETAILS } from "../graphql/queries";

function CountryDetails() {
  const { loading, error, data } = useQuery(GET_COUNTRY_DETAILS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Countries Details</h2>
      <ul className="ul">
        {data.countries.map((country: any) => (
          <li key={country.id}>
            {country.emoji} <br/>
            Name: {country.name} ( {country.code} )<br />
            <br />
            Continent: {country.continent.name}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryDetails;


