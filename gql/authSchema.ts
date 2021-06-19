import gql from 'graphql-tag';

export const SignIn = gql`
  mutation SignIn($email: String!) {
    signIn(email: $email) {
      token
      user {
        id
        fullName
      }
    }
  }
`;
