// Graphql
import { useQuery } from '@apollo/client';
import { GET_ORDERS_SELLER } from '../../queries/order';

const useOrder = () => {
    const { data, loading, error, client } = useQuery(GET_ORDERS_SELLER);

    return { data, loading, error, client, orders: data ? data.getOrdersSeller : [] };
};

export default useOrder;
