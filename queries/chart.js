import { gql } from '@apollo/client';

export const GET_TOP_SELLERS = gql`
    query GetTopSellers {
        getTopSellers {
            total
            seller {
                name
                last_name
                email
            }
        }
    }
`;

export const GET_TOP_CLIENTS = gql`
    query GetTopClients {
        getTopClients {
            total
            client {
                name
                last_name
                email
            }
        }
    }
`;
