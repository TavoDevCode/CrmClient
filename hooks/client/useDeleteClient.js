// Graphql
import { useMutation } from '@apollo/client';
import { GET_CLIENTS_SELLER, DELETE_CLIENT } from '../../queries/client';
// Utils
import { swalBase, swalConfirm } from '../../utils/sweetalert';

const useDeleteClient = (client) => {
    const { id, name, last_name } = client;

    const [deleteClient] = useMutation(DELETE_CLIENT, {
        update(cache) {
            // Get a copy object cache
            const { getClientsSeller } = cache.readQuery({ query: GET_CLIENTS_SELLER });

            // Rewrite cache
            cache.writeQuery({
                query: GET_CLIENTS_SELLER,
                data: {
                    getClientsSeller: getClientsSeller.filter((client) => client.id !== id),
                },
            });
        },
    });

    const deleteClientConfirm = () => {
        swalConfirm(
            {
                title: 'Eliminar cliente!',
                text: `Estas seguro de eliminar al cliente ${name} ${last_name}`,
                confirmButtonText: 'Si, eliminar',
                cancelButtonText: 'No eliminar',
            },
            () => deleteClientFunction(),
        );
    };

    const deleteClientFunction = async () => {
        try {
            // DELETE FOR ID CLIENT
            const { data } = await deleteClient({
                variables: {
                    id,
                },
            });

            swalBase({
                title: 'Eliminado!',
                text: `Se eliminado correctamente el cliente ${name} ${last_name}!`,
            });
        } catch (e) {
            swalBase({
                title: 'Error!',
                text: e.message,
                icon: 'error',
            });
        }
    };

    return { deleteClientConfirm };
};

export default useDeleteClient;
