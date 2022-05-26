import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
    query Query {
        getProducts {
            id
            name
            price
            stock
            #created_at
        }
    }
`;

export const ADD_PRODUCT = gql`
    mutation Mutation($input: ProductInput) {
        addProduct(input: $input) {
            id
            name
            price
            stock
            created_at
        }
    }
`;

export const DELETE_PRODUCT = gql`
    mutation DeleteProduct($id: ID!) {
        deleteProduct(id: $id) {
            id
            name
            price
            stock
            created_at
        }
    }
`;

export const GET_PRODUCT = gql`
    query GetProduct($id: ID!) {
        getProduct(id: $id) {
            id
            name
            price
            stock
            #created_at
        }
    }
`;

export const UPDATE_PRODUCT = gql`
    mutation Mutation($id: ID!, $input: ProductInput) {
        updateProduct(id: $id, input: $input) {
            id
            name
            price
            stock
            created_at
        }
    }
`;
