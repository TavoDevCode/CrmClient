// Graphql
import { useQuery } from '@apollo/client';
import { GET_CLIENTS_SELLER } from '../../queries/client';

const useClient = () => {
    const { data, loading, error, client } = useQuery(GET_CLIENTS_SELLER);

    return { loading, error, client, clients: data ? data.getClientsSeller : [] };
};

export default useClient;
