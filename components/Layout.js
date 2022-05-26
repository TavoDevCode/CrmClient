import React from 'react';
import Head from 'next/head';
import Sidebar from './Sidebar';
import Header from './Header';
// NEXT
import { useRouter } from 'next/router';
import useSession from '../hooks/auth/useSession';

const Layout = ({ children }) => {
    // Routing
    const router = useRouter();

    const { session, loadingSession, clientSession, removeCredentials } = useSession();

    if (loadingSession) return null;

    if (!session) {
        clientSession.clearStore();
        router.push('/login');
        return null;
    }

    return (
        <>
            <Head>
                <title>CRM - Admin of cLients</title>
            </Head>
            <div className="bg-white min-w-screen">
                <div className="sm:flex min-h-screen">
                    <Sidebar />
                    <main className="w-full p-5">
                        <Header {...{ user: session, removeCredentials }} />
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
};

export default Layout;
