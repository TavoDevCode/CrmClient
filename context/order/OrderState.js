import { useReducer, useMemo } from 'react';

// CONTEXT
import OrderContext from './OrderContext';
import OrderReducer from './OrderReducer';

// TYPES
import { SELECT_CLIENT, SELECT_PRODUCTS, AMOUNT_PRODUCTS, UPDATE_TOTAL_PAYMENT, RESET_STATES } from '../../types';

const initialState = {
    client: {},
    products: [],
    totalPayment: 0,
};

const OrderState = ({ children }) => {
    const [state, dispatch] = useReducer(OrderReducer, initialState);

    const orderContext = useMemo(
        () => ({
            client: state.client,
            products: state.products,
            totalPayment: state.totalPayment,
            addClient: (data) => {
                dispatch({
                    type: SELECT_CLIENT,
                    payload: { client: data },
                });
            },
            addProducts: (data) => {
                let newProduct = [];

                if (state.products.length > 0) {
                    newProduct = data.map((product) => {
                        const newObj = state.products.find((pdt) => pdt.id === product.id);
                        return { ...product, ...newObj };
                    });
                } else {
                    newProduct = data;
                }

                dispatch({
                    type: SELECT_PRODUCTS,
                    payload: { products: newProduct },
                });
            },
            amountProducts: (data) => {
                dispatch({
                    type: AMOUNT_PRODUCTS,
                    payload: { product: data },
                });
            },
            updateTotalPayment: () => {
                dispatch({
                    type: UPDATE_TOTAL_PAYMENT,
                    payload: {},
                });
            },
            resetState: () => {
                dispatch({
                    type: RESET_STATES,
                    payload: {},
                });
            },
        }),
        [state],
    );

    return <OrderContext.Provider value={orderContext}>{children}</OrderContext.Provider>;
};

export default OrderState;
