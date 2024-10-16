import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/client";
import AddCountry from "@/components/AddCountry";
import Header from "@/components/Header";

export default function AddCountryPage() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <h1>Add countries</h1>
        <AddCountry />
      </div>
    </ApolloProvider>
  );
}
