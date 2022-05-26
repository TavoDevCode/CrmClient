import { useContext, useState } from 'react';
// NEXT
import { useRouter } from 'next/router';
// Graphql
import { useMutation } from '@apollo/client';
import { GET_ORDERS_SELLER_CACHE, ADD_ORDER } from '../../queries/order';
// Utils
import { swalBase } from '../../utils/sweetalert';
// CONTEXTS
import OrderContext from '../../context/order/OrderContext';

const useAddOrder = () => {
    const { client, products, totalPayment, amountProducts, updateTotalPayment, resetState } = useContext(OrderContext);

    const router = useRouter();

    const [addOrder] = useMutation(ADD_ORDER, {
        update(cache, { data: { addOrder } }) {
            const { getOrdersSeller } = cache.readQuery({ query: GET_ORDERS_SELLER_CACHE });

            // Rewrite cache
            cache.writeQuery({
                query: GET_ORDERS_SELLER_CACHE,
                data: {
                    getOrdersSeller: [...getOrdersSeller, addOrder],
                },
            });
        },
    });

    const [loading, setLoading] = useState(false);

    const validateOrder = () => {
        return !products.every((product) => product.amount > 0) || totalPayment === 0 || client.length === 0 ? 'opacity-50 cursor-not-allowed' : '';
    };

    const createNewProduct = async () => {
        setLoading(true);
        const { id } = client;

        const orders = products.map(({ __typename, stock, ...product }) => product);

        try {
            const { data } = await addOrder({
                variables: {
                    input: {
                        client: id,
                        total: totalPayment,
                        orders,
                    },
                },
            });

            setLoading(false);

            swalBase({
                title: 'Registrado!',
                text: `Se realizo correctamente el pedido!`,
            });

            resetState();

            // Redirect
            router.push('/order');
        } catch (e) {
            setLoading(false);
            swalBase({ title: 'Error', text: e.message, icon: 'error' });
            // console.log(e);
        }
    };

    return { products, totalPayment, amountProducts, updateTotalPayment, validateOrder, createNewProduct, loading };
};

export default useAddOrder;
