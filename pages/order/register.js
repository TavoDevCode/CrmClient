// COMPONENTS
import Layout from '../../components/Layout';
import AssignClient from '../../components/order/AssignClient';
import AssignProducts from '../../components/order/AssignProducts';
import OrderSummary from '../../components/order/OrderSummary';
import TotalPayment from '../../components/order/TotalPayment';
// HOOKS
import { useAddOrder } from '../../hooks/order';

const Register = () => {
    const { products, totalPayment, amountProducts, updateTotalPayment, validateOrder, createNewProduct, loading } = useAddOrder();

    return (
        <Layout>
            <div className="flex justify-between items-center mb-3">
                <h1 className="px-4 sm:px-8 text-gray-800 text-2xl font-bold uppercase">Crear nuevo pedido</h1>
            </div>

            <div className="px-4 sm:px-8 py-4">
                <div className="inline-block min-w-full rounded-lg">
                    <AssignClient />
                    <AssignProducts />
                    <OrderSummary {...{ products, amountProducts, updateTotalPayment }} />
                    <TotalPayment {...{ totalPayment }} />
                    <div className="flex w-full mt-5">
                        <button
                            type="button"
                            className={`flex items-center justify-center bg-blue-600 focus:outline-none text-white text-sm sm:text-base hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in ${validateOrder()}`}
                            onClick={() => !validateOrder() && createNewProduct()}
                            disabled={loading}
                        >
                            {loading && (
                                <svg fill="none" className="w-6 h-6 animate-spin" viewBox="0 0 32 32">
                                    <path
                                        clipRule="evenodd"
                                        d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                    />
                                </svg>
                            )}
                            <span className="uppercase">Registrar pedido</span>
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Register;
