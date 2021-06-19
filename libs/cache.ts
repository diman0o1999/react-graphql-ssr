import { InMemoryCache, makeVar } from '@apollo/client';
import Cookies from 'js-cookie';
const cookies = Cookies;
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [],
    },
  },
});

export const cache: InMemoryCache = new InMemoryCache({
  addTypename: true,
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn() {
          return isLoggedInVar();
        },
        currentUser() {
          return isCurrentUserVar();
        },
      },
    },
  },
  ...fragmentMatcher,
});

// @ts-ignore
const currentUserVarInit = cookies.get('token')
  ? JSON.parse(cookies.get('user'))
  : null;
// @ts-ignore
export const isLoggedInVar = makeVar<boolean>(Boolean(cookies.get('token')));
export const isCurrentUserVar = makeVar<any>(currentUserVarInit);
