import { gql } from "@apollo/client";

// Continent Query
export const CONTINENT_QUERY = gql`
  query GetContinents {
    continents {
      code
      name
    }
  }
`;

// Country Query
export const COUNTRY_QUERY = gql`
  query GetCountries {
    countries {
      name
      capital
      currency
      states {
        name
      }
      emoji
    }
  }
`;
