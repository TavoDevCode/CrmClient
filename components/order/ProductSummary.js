import { useState, useEffect } from 'react';

const ProductsSummary = ({ product, amountProducts, updateTotalPayment }) => {
    const { name, price } = product;

    const [amount, setAmount] = useState(0);

    const updateProduct = () => {
        const newProduct = { ...product, amount: Number(amount) };
        amountProducts(newProduct);
    };

    useEffect(() => {
        updateProduct();
        updateTotalPayment();
    }, [amount]);

    return (
        <div className="flex justify-between  mt-5">
            <div className="w-2/4 mb-2">
                <p className="text-sm">{name}</p>
                <p>$ {price}</p>
            </div>

            <div>
                <input
                    className="text-sm sm:text-base placeholder-gray-500 px-3 rounded-md border border-gray-400 py-2 focus:outline-none focus:border-blue-400 focus:border-2"
                    type="number"
                    name="amount"
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                />
                <p className="text-sm mt-2 text-red-600 text-right">
                    {Number(amount) < 0 ? `Cantidad invalida` : Number(amount) === 0 ? `Seleccione cantidad` : ''}
                </p>
            </div>
        </div>
    );
};

export default ProductsSummary;
