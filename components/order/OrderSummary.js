// COMPONENTS
import ProductsSummary from './ProductSummary';

const OrderSummary = ({ products, amountProducts, updateTotalPayment }) => {
    return (
        <>
            <h1 htmlFor="name" className="text-xs sm:text-sm tracking-wide text-gray-600">
                Ajustar las cantidades del producto
            </h1>

            {products.length > 0 ? (
                <>
                    {products.map((product, index) => (
                        <ProductsSummary key={index} {...{ product, amountProducts, updateTotalPayment }} />
                    ))}
                </>
            ) : (
                <h1 htmlFor="name" className="mt-4 text-mg tracking-wide text-gray-600 font-bold">
                    No se han seleccionado productos
                </h1>
            )}
        </>
    );
};

export default OrderSummary;
