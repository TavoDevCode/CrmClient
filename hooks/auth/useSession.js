// NEXT
import { useRouter } from 'next/router';
// Graphql
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../queries/user';

const useSession = () => {
    const router = useRouter();

    const { data, loading, client } = useQuery(GET_USER);

    const removeCredentials = () => {
        client.clearStore();
        localStorage.removeItem('token');
        router.push('/login');
    };

    return { session: data ? data.getUser : [], loadingSession: loading, clientSession: client, removeCredentials };
};

export default useSession;
