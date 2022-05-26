// COMPONENTS
import Orders from './Orders';
// HOOKS
import useUpdateOrder from '../../hooks/order/useUpdateOrder';

const Order = ({ order }) => {
    const {
        total,
        client: { name, last_name, email, phone },
        state,
        orders,
    } = order;

    const { orderState, classState, updateOrderFunction, deleteOrderConfirm } = useUpdateOrder(order);

    return (
        <div className={`my-5 p-5 shadow rounded flex flex-wrap border-t-4 ${classState}`}>
            <div className="w-1/2">
                <h1 className="font-semibold text-md text-gray-800">
                    Cliente: {name} {last_name}
                </h1>

                {email && (
                    <p className="my-2 flex text-sm items-center">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                            ></path>
                        </svg>
                        {email}
                    </p>
                )}

                {phone && (
                    <p className="my-2 flex text-sm items-center">
                        <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            ></path>
                        </svg>
                        {phone}
                    </p>
                )}

                <select
                    className="mt-2 appearance-none bg-blue-500 border border-blue-500 text-white p-2 rounded text-center text-xs leading-tight focus:outline-none focus:bg-blue-400 font-bold"
                    value={orderState}
                    onChange={(e) => updateOrderFunction(e.target.value)}
                >
                    <option value="COMPLETED">COMPLETADO</option>
                    <option value="PENDING">PENDIENTE</option>
                    <option value="CANCELED">CANCELADO</option>
                </select>
            </div>
            <div className="mx-2">
                <h1 className="text-md font-semibold">Resumen del pedido</h1>
                {orders.map((order, index) => (
                    <Orders {...{ key: index, order }} />
                ))}
                <p>
                    <span className="font-bold">Total a pagar:</span> ${total}
                </p>
                <button
                    className="mt-3 p-2 border-2 border-red-500 rounded-md text-md font-semibold bg-red-500 text-white"
                    type="button"
                    onClick={deleteOrderConfirm}
                >
                    Eliminar pedido
                </button>
            </div>
        </div>
    );
};

export default Order;
