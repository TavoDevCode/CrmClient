// NEXT
import Link from 'next/link';
// COMPONENTS
import Layout from '../../components/Layout';
import Order from '../../components/Order/Order';
// HOOKS
import { useOrder } from '../../hooks/order';

const Index = () => {
    const { loading, error, orders } = useOrder();

    return (
        <Layout>
            {loading && <h1>Loading</h1>}

            {error && <h1>Error</h1>}

            {!loading && !error && orders && (
                <>
                    <div className="flex justify-between items-center mb-3">
                        <h1 className="px-4 sm:px-8 text-gray-800 text-2xl font-bold uppercase">Mis pedidos</h1>
                        <Link href="/order/register">
                            <a className="border-2 border-blue-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-blue-600 hover:text-white transition duration-300">
                                Agregar nuevo pedido
                            </a>
                        </Link>
                    </div>

                    {orders.length === 0 ? (
                        <h1 className="mx-20 p-3 border text-center text-md text-gray-500 font-semibold">No hay pedidos aun</h1>
                    ) : (
                        <>
                            {orders.map((order, index) => (
                                <Order key={index} {...{ order }} />
                            ))}
                        </>
                    )}
                </>
            )}
        </Layout>
    );
};

export default Index;
