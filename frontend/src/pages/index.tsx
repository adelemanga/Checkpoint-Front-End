import { ApolloProvider } from "@apollo/client";
import client from "../graphql/client";
import CountryList from "../components/CountryList";
import Header from "../components/Header";
import AddCountry from "../components/AddCountry";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <h1>Hello, Wilder!</h1>
        <AddCountry />
        <CountryList />
      </div>
    </ApolloProvider>
  );
}
