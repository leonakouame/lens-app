import { ApolloClient, InMemoryCache } from '@apollo/client'

const APIURL = 'https://api-mumbai.lens.dev/';

export const apolloClient= new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
})

import { apolloClient } from './apollo-client';
import { gql } from '@apollo/client'

const query  = `
  query {
    ping
  }
`

export const queryExample = async () => {
   const response = await apolloClient.query({
    query: gql(query),
  })
  console.log('Lens example data: ', response)
}