import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import CountryList from "../components/CountryList";
import AddCountry from "../components/AddCountry";
import Header from "../components/Header";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <h1>Salut, Wilder!</h1>
        <AddCountry />
        <CountryList />
      </div>
    </ApolloProvider>
  );
}
