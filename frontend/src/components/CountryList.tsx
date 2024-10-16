
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../graphql/queries";

function CountryList() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Countries</h2>
      <ul className="liste">
        {data.countries.map((country: any) => (
          <li className="liste1" key={country.id}>
            {country.emoji}
            <br />
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
