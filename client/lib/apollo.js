import { withApollo } from "next-apollo"
import { ApolloClient } from '@apollo/client';

const client = new ApolloClient({
  uri: 'server:1337/graphql',
});

export default withApollo(client);
