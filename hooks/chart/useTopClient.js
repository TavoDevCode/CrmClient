// Graphql
import { useQuery } from '@apollo/client';
import { GET_TOP_CLIENTS } from '../../queries/chart';

const useTopClient = () => {
    const { data, loading, error, startPolling, stopPolling } = useQuery(GET_TOP_CLIENTS);

    return { data, loading, error, clients: data ? data.getTopClients : [], startPolling, stopPolling };
};

export default useTopClient;
