import { useContext } from 'react';
// SELECT
import Select from 'react-select';
// HOOKS
import { useProduct } from '../../hooks/product';
// CONTEXT
import OrderContext from '../../context/order/OrderContext';

const AssignProducts = () => {
    const { addProducts, updateTotalPayment } = useContext(OrderContext);

    const { loading, error, products } = useProduct();

    if (loading) return null;

    return (
        <>
            <label htmlFor="name" className="mt-10 text-xs sm:text-sm tracking-wide text-gray-600">
                Seleccione o busque los productos
            </label>
            <Select
                options={products}
                isMulti
                className="my-3"
                onChange={(option) => {
                    addProducts(option);
                    updateTotalPayment();
                }}
                getOptionValue={(options) => options.id}
                getOptionLabel={(options) => options.name}
                placeholder="Busque o seleccione producto"
                noOptionsMessage={() => 'Sin opciones'}
            />
        </>
    );
};

export default AssignProducts;
