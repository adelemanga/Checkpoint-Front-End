import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query {
    countries {
      id
      code
      name
      emoji
      continent {
        name
      }
    }
  }
`;

export const ADD_COUNTRY = gql`
  mutation AddCountry(
    $name: String!
    $code: String!
    $emoji: String!
    $continentId: ID!
  ) {
    addCountry(
      input: {
        name: $name
        code: $code
        emoji: $emoji
        continentId: $continentId
      }
    ) {
      id
      name
      emoji
      continent {
        name
      }
    }
  }
`;

export const GET_COUNTRY_DETAILS = gql`
  query {
    countries {
      id
      code
      name
      emoji
      continent {
        name
      }
    }
  }
`;
