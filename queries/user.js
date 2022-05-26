import { gql } from '@apollo/client';

export const GET_USER = gql`
    query Query {
        getUser {
            #id
            name
            last_name
            #phone
            email
            #created_at
        }
    }
`;
