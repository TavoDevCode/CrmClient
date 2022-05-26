// Graphql
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../queries/product';

const useProduct = () => {
    const { data, loading, error, client } = useQuery(GET_PRODUCTS);

    return { data, loading, error, client, products: data ? data.getProducts : [] };
};

export default useProduct;
