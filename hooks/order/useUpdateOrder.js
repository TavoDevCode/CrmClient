import { useState, useEffect } from 'react';
// Graphql
import { useMutation } from '@apollo/client';
import { GET_ORDERS_SELLER, UPDATE_ORDER, DELETE_ORDER } from '../../queries/order';
// Utils
import { swalBase, swalConfirm } from '../../utils/sweetalert';

const useUpdateOrder = (order) => {
    const { id, state, client } = order;

    const [updateOrder] = useMutation(UPDATE_ORDER);

    const [deleteOrder] = useMutation(DELETE_ORDER, {
        update(cache) {
            // Get a copy object cache
            const { getOrdersSeller } = cache.readQuery({ query: GET_ORDERS_SELLER });

            // Rewrite cache
            cache.writeQuery({
                query: GET_ORDERS_SELLER,
                data: {
                    getOrdersSeller: getOrdersSeller.filter((order) => order.id !== id),
                },
            });
        },
    });

    const [orderState, setOrderState] = useState(state);
    const [classState, setClassState] = useState('');

    useEffect(() => {
        classOrder();
        if (orderState) {
            setOrderState(orderState);
        }
    }, [orderState]);

    const classOrder = () => {
        if (orderState === 'PENDING') {
            setClassState('border-yellow-500');
        } else if (orderState === 'COMPLETED') {
            setClassState('border-blue-500');
        } else {
            setClassState('border-red-800');
        }
    };

    const updateOrderFunction = async (newState) => {
        try {
            const { data } = await updateOrder({
                variables: {
                    id,
                    input: {
                        state: newState,
                        client: client.id,
                    },
                },
            });

            setOrderState(data.updateOrder.state);
            // console.log(data.updateOrder.state);
        } catch (e) {
            console.log(e);
        }
    };

    const deleteOrderConfirm = () => {
        swalConfirm(
            {
                title: 'Eliminar pedido!',
                text: `Estas seguro de eliminar al pedido`,
                confirmButtonText: 'Si, eliminar',
                cancelButtonText: 'No eliminar',
            },
            () => deleteOrderFunction(),
        );
    };

    const deleteOrderFunction = async () => {
        try {
            // DELETE FOR ID CLIENT
            const { data } = await deleteOrder({
                variables: {
                    id,
                },
            });

            swalBase({
                title: 'Eliminado!',
                text: `Se eliminado correctamente el predido!`,
            });
        } catch (e) {
            swalBase({
                title: 'Error!',
                text: e.message,
                icon: 'error',
            });
        }
    };

    return { orderState, classState, updateOrderFunction, deleteOrderConfirm };
};

export default useUpdateOrder;
