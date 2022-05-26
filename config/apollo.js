import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/',
});

const authLink = setContext((_, { headers }) => {
    // Get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // Return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    // connectToDevTools: true,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    getClientsSeller: {
                        merge(existing, incoming) {
                            return incoming;
                        },
                    },
                    getProducts: {
                        merge(existing, incoming) {
                            return incoming;
                        },
                    },
                    getOrdersSeller: {
                        merge(existing, incoming) {
                            return incoming;
                        },
                    },
                    getTopSellers: {
                        merge(existing, incoming) {
                            return incoming;
                        },
                    },
                },
            },
        },
    }),
    link: authLink.concat(httpLink),
});

export default client;
