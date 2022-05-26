import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation Mutation($input: UserInput) {
        addUser(input: $input) {
            id
            name
            last_name
            phone
            email
            created_at
        }
    }
`;

export const AUTHENTICATE_USER = gql`
    mutation Mutation($input: AuthenticateInput) {
        authenticateUser(input: $input) {
            token
        }
    }
`;
