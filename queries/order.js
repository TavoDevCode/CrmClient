import { gql } from '@apollo/client';

export const GET_ORDERS_SELLER = gql`
    query Query {
        getOrdersSeller {
            id
            orders {
                id
                amount
                name
                price
            }
            total
            client {
                id
                name
                last_name
                email
                phone
            }
            seller
            state
            created_at
        }
    }
`;

export const GET_ORDERS_SELLER_CACHE = gql`
    query Query {
        getOrdersSeller {
            id
        }
    }
`;

export const ADD_ORDER = gql`
    mutation AddOrder($input: OrderInput) {
        addOrder(input: $input) {
            id
        }
    }
`;

export const UPDATE_ORDER = gql`
    mutation UpdateOrder($id: ID!, $input: OrderInput) {
        updateOrder(id: $id, input: $input) {
            state
        }
    }
`;

export const DELETE_ORDER = gql`
    mutation DeleteOrder($id: ID!) {
        deleteOrder(id: $id) {
            id
        }
    }
`;
