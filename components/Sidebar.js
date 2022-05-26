import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
    const router = useRouter();

    return (
        <aside className="bg-blue-400 sm:w-1/3 xl:w-1/5 p-6">
            <div>
                <h1 className="text-white font-black text-2xl">CRM Clientes</h1>
            </div>
            <nav className="mt-5 list-none">
                <ol>
                    <li>
                        <Link href="/">
                            <a className={`text-white mb-3 block text-lg ${router.pathname === '/' ? 'bg-blue-500 p-2' : 'p-2'}`}>Clientes</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/order">
                            <a className={`text-white mb-3 block text-lg ${router.pathname === '/order' ? 'bg-blue-500 p-2' : 'p-2'}`}>Pedidos</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/product">
                            <a className={`text-white mb-3 block text-lg ${router.pathname === '/product' ? 'bg-blue-500 p-2' : 'p-2'}`}>Productos</a>
                        </Link>
                    </li>
                </ol>
            </nav>
            <div>
                <h1 className="text-white font-black text-xl mt-4">Otras Opciones</h1>
            </div>
            <nav className="mt-5 list-none">
                <ol>
                    <li>
                        <Link href="/top-sellers">
                            <a className={`text-white mb-3 block text-lg ${router.pathname === '/top-sellers' ? 'bg-blue-500 p-2' : 'p-2'}`}>
                                Mejores vendedores
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/top-clients">
                            <a className={`text-white mb-3 block text-lg ${router.pathname === '/top-clients' ? 'bg-blue-500 p-2' : 'p-2'}`}>
                                Mejores clientes
                            </a>
                        </Link>
                    </li>
                </ol>
            </nav>
        </aside>
    );
};

export default Sidebar;
