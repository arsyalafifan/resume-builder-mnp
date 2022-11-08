import { ApolloClient, InMemoryCache } from '@apollo/client';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
    uri: 'https://refined-sheep-77.hasura.app/v1/graphql',
    headers: {
        'x-hasura-admin-secret': 'JmIzLejUOMN5g61yZO6GfOBmQI6JWQ87qB8M2Ccn0sLzVrc92Jeb17t4mBKLZHg3'
    }
});

const wsLink = new GraphQLWsLink(createClient({
    url: 'wss://refined-sheep-77.hasura.app/v1/graphql',
    connectionParams: {
      headers: {
          'x-hasura-admin-secret': 'JmIzLejUOMN5g61yZO6GfOBmQI6JWQ87qB8M2Ccn0sLzVrc92Jeb17t4mBKLZHg3'
      }
    }
}));

const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
);

const apolloClient = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

export default apolloClient;