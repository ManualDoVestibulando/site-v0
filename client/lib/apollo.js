// Based in: https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js

import { ApolloClient, InMemoryCache } from '@apollo/client'

let apolloClient

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    uri: 'http://server:1337/graphql',
    cache: new InMemoryCache(),
  })
}

// Singleton
export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }

  if (typeof window === 'undefined') return _apolloClient
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}