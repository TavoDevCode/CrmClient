// Graphql
import { useQuery } from '@apollo/client';
import { GET_TOP_SELLERS } from '../../queries/chart';

const useTopSeller = () => {
    const { data, loading, error, client, startPolling, stopPolling } = useQuery(GET_TOP_SELLERS);

    return { data, loading, error, client, sellers: data ? data.getTopSellers : [], startPolling, stopPolling };
};

export default useTopSeller;
