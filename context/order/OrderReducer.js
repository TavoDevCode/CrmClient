import { SELECT_CLIENT, SELECT_PRODUCTS, AMOUNT_PRODUCTS, UPDATE_TOTAL_PAYMENT, RESET_STATES } from '../../types';

export default (prevState, action) => {
    const {
        type,
        payload: { client, products, product },
    } = action;

    switch (type) {
        case SELECT_CLIENT:
            return {
                ...prevState,
                client,
            };
        case SELECT_PRODUCTS:
            return {
                ...prevState,
                products,
            };
        case AMOUNT_PRODUCTS:
            return {
                ...prevState,
                products: prevState.products.map((pdt) => (pdt.id === product.id ? (pdt = product) : pdt)),
            };
        case UPDATE_TOTAL_PAYMENT:
            return {
                ...prevState,
                totalPayment: prevState.products.reduce((newProduct, article) => (newProduct += article.price * article.amount), 0),
            };
        case RESET_STATES:
            return {
                client: {},
                products: [],
                totalPayment: 0,
            };
        default:
            return state;
    }
};
