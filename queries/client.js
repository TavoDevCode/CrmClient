import { gql } from '@apollo/client';

export const GET_CLIENTS_SELLER = gql`
    query GetClientsSeller {
        getClientsSeller {
            id
            name
            last_name
            business
            email
            phone
            #seller
            created_at
        }
    }
`;

export const ADD_CLIENT = gql`
    mutation AddClient($input: ClientInput) {
        addClient(input: $input) {
            id
            name
            last_name
            business
            email
            phone
            seller
            created_at
        }
    }
`;

export const DELETE_CLIENT = gql`
    mutation Mutation($id: ID!) {
        deleteClient(id: $id) {
            id
            name
            last_name
            business
            email
            phone
            seller
            created_at
        }
    }
`;

export const GET_SPECIFIC_CLIENT = gql`
    query GetSpecificClient($id: ID!) {
        getSpecificClient(id: $id) {
            id
            name
            last_name
            business
            email
            phone
            #seller
            #created_at
        }
    }
`;

export const UPDATE_CLIENT = gql`
    mutation Mutation($id: ID!, $input: ClientInput) {
        updateClient(id: $id, input: $input) {
            id
            name
            last_name
            business
            email
            phone
            seller
            created_at
        }
    }
`;
