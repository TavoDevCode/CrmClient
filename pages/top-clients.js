import { useEffect } from 'react';
// COMPONETS
import Layout from '../components/Layout';
// RECHARTS
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// HOOKS
import useTopClient from '../hooks/chart/useTopClient';

const topClients = () => {
    const { loading, error, clients, startPolling, stopPolling } = useTopClient();

    useEffect(() => {
        startPolling(1000);
        return () => {
            stopPolling();
        };
    }, [startPolling, stopPolling]);

    if (loading) return <h1>Cargando</h1>;

    // console.log(clients);

    const clientsChart = [];

    clients.map(({ ...client }, index) => {
        clientsChart[index] = {
            total: client.total,
            name: `${client.client[0].name} ${client.client[0].last_name}`,
        };
    });

    // console.log(clientsChart);

    return (
        <Layout>
            <div className="flex justify-between items-center mb-3">
                <h1 className="px-4 sm:px-8 text-gray-800 text-2xl font-bold uppercase">Mejores vendedores</h1>
            </div>
            <div className="flex justify-center items-center">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        className="mt-10"
                        data={clientsChart}
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
                </ResponsiveContainer>
            </div>
        </Layout>
    );
};

export default topClients;
