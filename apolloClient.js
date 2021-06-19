import {ApolloClient, InMemoryCache, makeVar} from "@apollo/client";

import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import { cache } from 'libs/cache';
export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    connectToDevTools: true,
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri: 'http://localhost:3000/graphql', // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      fetch,
    }),
    cache: cache.restore(initialState || {}),
  });
}
