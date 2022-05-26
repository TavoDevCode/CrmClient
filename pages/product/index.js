// NEXT
import Link from 'next/link';
// COMPONENTS
import Layout from '../../components/Layout';
import ProductRow from '../../components/product/ProductRow';
// HOOKS
import { useProduct } from '../../hooks/product';

const Index = () => {
    const { loading, error, products } = useProduct();

    return (
        <Layout>
            {loading && <h1>Loading</h1>}

            {error && <h1>Error</h1>}

            {!loading && !error && products && (
                <>
                    <div className="flex justify-between items-center mb-3">
                        <h1 className="px-4 sm:px-8 text-gray-800 text-2xl font-bold uppercase">Productos</h1>
                        <Link href="/product/register">
                            <a className="border-2 border-blue-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-blue-600 hover:text-white transition duration-300">
                                Agregar nuevo producto
                            </a>
                        </Link>
                    </div>

                    <div className="px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal overflow-x-auto">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Nombre
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Precio
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Stock
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product, index) => (
                                        <ProductRow {...{ key: index, product }} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
        </Layout>
    );
};

export default Index;
