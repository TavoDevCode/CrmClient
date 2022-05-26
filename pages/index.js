import Link from 'next/link';
// COMPONENTS
import Layout from '../components/Layout';
import ClientRow from '../components/client/ClientRow';
// HOOKS
import { useClients } from '../hooks/client';

const Index = () => {
    const { loading, error, clients } = useClients();

    return (
        <Layout>
            {loading && <h1>Cargando...</h1>}

            {error && <h1>Error..xxx</h1>}

            {!loading && !error && clients && (
                <>
                    <div className="flex justify-between items-center mb-3">
                        <h1 className="px-4 sm:px-8 text-gray-800 text-2xl font-bold uppercase">Clientes</h1>
                        <Link href="/client/register">
                            <a className="border-2 border-blue-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-blue-600 hover:text-white transition duration-300">
                                Agregar nuevo cliente
                            </a>
                        </Link>
                    </div>

                    <div className="px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal overflow-x-auto">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            business
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            email
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            phone
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clients.map((client, index) => (
                                        <ClientRow key={index} {...{ client }} />
                                    ))}
                                </tbody>
                            </table>
                            {/* <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                <span className="text-xs xs:text-sm text-gray-900">Showing 1 to 4 of 50 Entries</span>
                                <div className="inline-flex mt-2 xs:mt-0">
                                    <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                        Prev
                                    </button>
                                    &nbsp; &nbsp;
                                    <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                        Next
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </>
            )}
        </Layout>
    );
};

export default Index;
