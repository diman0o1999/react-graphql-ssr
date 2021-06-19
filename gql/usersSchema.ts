import { gql } from '@apollo/client';

export const GetUsers = gql`
  query GetUsers {
    users {
      email
      fullName
      id
    }
  }
`;
export const UserFragment = gql`
  fragment UserFragment on User {
    email
    fullName
    id
  }
`;
