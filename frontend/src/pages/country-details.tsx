import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/client";
import Header from "@/components/Header";
import CountryDetails from "@/components/CountryDetails";


export default function CountryDetailsPage() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <h1>Countries Details</h1>
        <CountryDetails />
      </div>
    </ApolloProvider>
  );
}
