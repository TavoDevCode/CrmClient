import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import client from '../config/apollo';
// CONTEXT
import OrderState from '../context/order/OrderState';

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <OrderState>
                <Component {...pageProps} />
            </OrderState>
        </ApolloProvider>
    );
}

export default MyApp;
