// NEXT
import Router from 'next/router';
// HOOS
import { useDeleteProduct } from '../../hooks/product';

const ProductRow = ({ product }) => {
    const { id, name, price, stock } = product;

    const { deleteProductConfirm } = useDeleteProduct(product);

    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{name}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{price}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{stock}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-center">
                    <button
                        type="button"
                        onClick={deleteProductConfirm}
                        className="rounded-2xl text-1xl font-medium bg-blue-600 text-white transition duration-300 mx-2 p-1"
                    >
                        <span className="uppercase">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            Router.push({
                                pathname: '/product/[id]',
                                query: { id },
                            });
                        }}
                        className="rounded-2xl text-sm font-medium bg-green-600 text-white transition duration-300 mx-2 p-1"
                    >
                        <span className="uppercase">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default ProductRow;
