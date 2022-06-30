import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
  cache: new InMemoryCache(),
});

export const getCharactersData = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        characters(page: 11) {
          info {
            count
            pages
          }
          results {
            image
            name
            id
            location {
              id
              name
            }
            origin {
              id
              name
            }
            episode {
              id
              episode
              air_date
            }
          }
        }
      }
    `,
  });

  return data;
};
