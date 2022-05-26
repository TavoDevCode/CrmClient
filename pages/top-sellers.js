import { useEffect } from 'react';
// COMPONETS
import Layout from '../components/Layout';
// RECHARTS
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// HOOKS
import useTopSeller from '../hooks/chart/useTopSeller';

const topSellers = () => {
    const { loading, error, sellers, startPolling, stopPolling } = useTopSeller();

    useEffect(() => {
        startPolling(1000);
        return () => {
            stopPolling();
        };
    }, [startPolling, stopPolling]);

    if (loading) return <h1>Cargando</h1>;

    // console.log(sellers);

    const sellersChart = [];

    sellers.map(({ ...seller }, index) => {
        sellersChart[index] = {
            total: seller.total,
            name: `${seller.seller[0].name} ${seller.seller[0].last_name}`,
        };
    });

    return (
        <Layout>
            <div className="flex justify-between items-center mb-3">
                <h1 className="px-4 sm:px-8 text-gray-800 text-2xl font-bold uppercase">Mejores vendedores</h1>
            </div>
            <div className="flex justify-center items-center">
                <BarChart
                    className="mt-10"
                    width={500}
                    height={300}
                    data={sellersChart}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#3498DB" className="text-blue-200" />
                </BarChart>
            </div>
        </Layout>
    );
};

export default topSellers;
