import { gql } from '@apollo/client';
import { UserFragment } from 'gql/usersSchema';

export const authSchema = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
  extend type Mutation {
    logOut: Boolean
    signInClient(email: String, password: String): String
  }
`;

// Queries
export const GetIsLoggedIn = gql`
  query GetIsLoggedIn {
    isLoggedIn @client
  }
`;

// Mutations
export const LogOut = gql`
  mutation LogOut {
    logOut @client
  }
`;

export const SignInClient = gql`
  mutation SignInClient($email: String!, $password: String!) {
    signInClient(email: $email, password: $password) @client
  }
`;

export const SignIn = gql`
  ${UserFragment}
  mutation SignIn($email: String!) {
    signIn(email: $email) {
      token
      user {
        ...UserFragment
      }
    }
  }
`;
